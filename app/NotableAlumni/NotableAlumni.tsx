"use client";

import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform, Raycast, Vec2 } from 'ogl';
import React, { useEffect, useRef, useState } from 'react';
import TypingText from "../TypingText/TypingText";

type GL = Renderer['gl'];

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: number;
    return function (this: any, ...args: Parameters<T>) {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => func.apply(this, args), wait);
    };
}

function lerp(p1: number, p2: number, t: number): number {
    return p1 + (p2 - p1) * t;
}

function autoBind(instance: any): void {
    const proto = Object.getPrototypeOf(instance);
    Object.getOwnPropertyNames(proto).forEach(key => {
        if (key !== 'constructor' && typeof instance[key] === 'function') {
            instance[key] = instance[key].bind(instance);
        }
    });
}

const DEFAULT_FONT = 'bold 30px Figtree';
const DEFAULT_FONT_URL = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap';

function deriveFontFamilyFromUrl(url: string): string {
    const fileName = (url.split('/').pop() || 'custom-font').split('?')[0];
    const base = fileName.replace(/\.(woff2?|ttf|otf|eot)$/i, '');
    return base.replace(/[^a-zA-Z0-9-_ ]/g, '').trim() || 'CircularGalleryFont';
}

async function loadFontFromStylesheet(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch font stylesheet (${response.status})`);
    const cssText = await response.text();
    const faceBlocks = cssText.match(/@font-face\s*{[^}]*}/g) || [];
    let family: string | null = null;
    const fontFaces: FontFace[] = [];
    for (const block of faceBlocks) {
        const familyMatch = block.match(/font-family:\s*['"]?([^;'"]+)['"]?/);
        const urlMatch = block.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
        if (!familyMatch || !urlMatch) continue;
        family = familyMatch[1].trim();
        const descriptors: FontFaceDescriptors = {};
        const weightMatch = block.match(/font-weight:\s*([^;]+);/);
        const styleMatch = block.match(/font-style:\s*([^;]+);/);
        const rangeMatch = block.match(/unicode-range:\s*([^;]+);/);
        if (weightMatch) descriptors.weight = weightMatch[1].trim();
        if (styleMatch) descriptors.style = styleMatch[1].trim();
        if (rangeMatch) descriptors.unicodeRange = rangeMatch[1].trim();
        fontFaces.push(new FontFace(family, `url(${urlMatch[1]})`, descriptors));
    }
    if (!family) throw new Error('No @font-face rule found in the stylesheet');
    await Promise.allSettled(
        fontFaces.map(async face => {
            await face.load();
            document.fonts.add(face);
        })
    );
    return family;
}

async function loadFontFromFile(url: string): Promise<string> {
    const family = deriveFontFamilyFromUrl(url);
    const fontFace = new FontFace(family, `url(${url})`);
    await fontFace.load();
    document.fonts.add(fontFace);
    return family;
}

async function loadCustomFont(fontUrl: string): Promise<string> {
    const isStylesheet = fontUrl.includes('fonts.googleapis.com') || /\.css(\?.*)?$/i.test(fontUrl);
    return isStylesheet ? loadFontFromStylesheet(fontUrl) : loadFontFromFile(fontUrl);
}

async function resolveFont(font: string, fontUrl?: string): Promise<string> {
    const effectiveUrl = fontUrl || (font === DEFAULT_FONT ? DEFAULT_FONT_URL : null);
    if (!effectiveUrl) {
        if (document.fonts && document.fonts.load) {
            try {
                await document.fonts.load(font);
                await document.fonts.ready;
            } catch {
                // Ignore
            }
        }
        return font;
    }
    try {
        const family = await loadCustomFont(effectiveUrl);
        const sizeMatch = font.match(/^\s*(.*?\d+px)/);
        const prefix = sizeMatch ? sizeMatch[1].trim() : 'bold 30px';
        const resolved = `${prefix} "${family}"`;
        if (document.fonts && document.fonts.load) {
            try {
                await document.fonts.load(resolved);
            } catch {
                // Ignore
            }
        }
        return resolved;
    } catch (error) {
        console.error('CircularGallery: unable to load font from', fontUrl, error);
        return font;
    }
}

function getFontSize(font: string): number {
    const match = font.match(/(\d+)px/);
    return match ? parseInt(match[1], 10) : 30;
}

function createTextTexture(
    gl: GL,
    text: string,
    designation: string = '',
    font: string = 'bold 30px monospace',
    color: string = 'black'
): { texture: Texture; width: number; height: number } {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2d context');

    const fontSize = getFontSize(font);

    // Measure all 2 possible lines to set canvas width
    context.font = font;
    const metrics1 = context.measureText(text);

    context.font = `600 ${fontSize * 0.55}px sans-serif`;
    const metrics2 = context.measureText(designation);

    const textWidth = Math.max(metrics1.width, metrics2.width);
    const textHeight = fontSize * 2.4; // Accommodate 2 lines smoothly

    canvas.width = textWidth + 40;
    canvas.height = textHeight + 40;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // Draw Line 1: Name
    context.font = font;
    context.fillStyle = color;
    context.fillText(text, canvas.width / 2, canvas.height * 0.35);

    // Draw Line 2: Designation
    if (designation) {
        context.font = `600 ${fontSize * 0.55}px sans-serif`;
        context.fillStyle = color;
        context.fillText(designation, canvas.width / 2, canvas.height * 0.7);
    }

    const texture = new Texture(gl, { generateMipmaps: false });
    texture.image = canvas;
    return { texture, width: canvas.width, height: canvas.height };
}

interface TitleProps {
    gl: GL;
    plane: Mesh;
    renderer: Renderer;
    text: string;
    designation?: string;
    textColor?: string;
    font?: string;
}

class Title {
    gl: GL;
    plane: Mesh;
    renderer: Renderer;
    text: string;
    designation: string;
    textColor: string;
    font: string;
    mesh!: Mesh;

    constructor({ gl, plane, renderer, text, designation, textColor = '#545050', font = '30px sans-serif' }: TitleProps) {
        autoBind(this);
        this.gl = gl;
        this.plane = plane;
        this.renderer = renderer;
        this.text = text;
        this.designation = designation || '';
        this.textColor = textColor;
        this.font = font;
        this.createMesh();
    }

    createMesh() {
        const { texture, width, height } = createTextTexture(this.gl, this.text, this.designation, this.font, this.textColor);
        const geometry = new Plane(this.gl);
        const program = new Program(this.gl, {
            vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform float uHoverFactor;
        uniform float uActive;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;

          float alphaMod = 1.0;
          // Hide designation initially, smoothly fade it in when hovered (uActive)
          if (vUv.y < 0.5) {
            alphaMod = smoothstep(0.0, 0.5, uActive);
          }
          
          gl_FragColor = vec4(color.rgb, color.a * uHoverFactor * alphaMod);
        }
      `,
            uniforms: {
                tMap: { value: texture },
                uHoverFactor: { value: 1.0 },
                uActive: { value: 0.0 }
            },
            transparent: true
        });
        this.mesh = new Mesh(this.gl, { geometry, program });
        const aspect = width / height;

        // Adjusted scale dynamically for the 2-line layout
        const textHeightScaled = this.plane.scale.y * 0.24;
        const textWidthScaled = textHeightScaled * aspect;
        this.mesh.scale.set(textWidthScaled, textHeightScaled, 1);
        this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeightScaled * 0.5 - 0.05;
        this.mesh.setParent(this.plane);
    }
}

interface ScreenSize {
    width: number;
    height: number;
}

interface Viewport {
    width: number;
    height: number;
}

interface MediaProps {
    geometry: Plane;
    gl: GL;
    image: string;
    index: number;
    length: number;
    renderer: Renderer;
    scene: Transform;
    screen: ScreenSize;
    text: string;
    designation?: string;
    viewport: Viewport;
    bend: number;
    textColor: string;
    borderRadius?: number;
    font?: string;
}

class Media {
    extra: number = 0;
    geometry: Plane;
    gl: GL;
    image: string;
    index: number;
    length: number;
    renderer: Renderer;
    scene: Transform;
    screen: ScreenSize;
    text: string;
    designation?: string;
    viewport: Viewport;
    bend: number;
    textColor: string;
    borderRadius: number;
    font?: string;
    program!: Program;
    plane!: Mesh;
    title!: Title;
    scale!: number;
    padding!: number;
    width!: number;
    widthTotal!: number;
    x!: number;
    isBefore: boolean = false;
    isAfter: boolean = false;

    // Transitions State
    hoverFactor: number = 1.0;
    scaleFactor: number = 1.0;
    zoomFactor: number = 1.0;
    activeFactor: number = 0.0;
    isLoaded: boolean = false;
    imageLoadFactor: number = 0.0;

    baseScaleX: number = 0;
    baseScaleY: number = 0;

    constructor({
        geometry,
        gl,
        image,
        index,
        length,
        renderer,
        scene,
        screen,
        text,
        designation,
        viewport,
        bend,
        textColor,
        borderRadius = 0,
        font
    }: MediaProps) {
        this.geometry = geometry;
        this.gl = gl;
        this.image = image;
        this.index = index;
        this.length = length;
        this.renderer = renderer;
        this.scene = scene;
        this.screen = screen;
        this.text = text;
        this.designation = designation;
        this.viewport = viewport;
        this.bend = bend;
        this.textColor = textColor;
        this.borderRadius = borderRadius;
        this.font = font;

        this.createShader();
        this.createMesh();
        this.createTitle();
        this.onResize();
    }

    createShader() {
        const texture = new Texture(this.gl, {
            generateMipmaps: true
        });
        this.program = new Program(this.gl, {
            depthTest: false,
            depthWrite: false,
            vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          // Flattened Z axis - Removed the wobbly/jiggly code.
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        uniform float uHoverFactor;
        uniform float uZoom;
        uniform float uImageLoaded;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );

          // Apply Photo Zoom inward directly from center
          uv = (uv - 0.5) / uZoom + 0.5;

          vec4 color = texture2D(tMap, uv);
          
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);
          
          // Hover dimming combined with load fade
          vec3 finalColor = color.rgb * (0.35 + 0.65 * uHoverFactor);
          
          gl_FragColor = vec4(finalColor, alpha * uImageLoaded);
        }
      `,
            uniforms: {
                tMap: { value: texture },
                uPlaneSizes: { value: [0, 0] },
                uImageSizes: { value: [0, 0] },
                uBorderRadius: { value: this.borderRadius },
                uHoverFactor: { value: 1.0 },
                uZoom: { value: 1.0 },
                uImageLoaded: { value: 0.0 }
            },
            transparent: true
        });

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = this.image;
        img.onload = () => {
            texture.image = img;
            this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
            this.isLoaded = true;
        };
    }

    createMesh() {
        this.plane = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        });
        this.plane.setParent(this.scene);
    }

    createTitle() {
        this.title = new Title({
            gl: this.gl,
            plane: this.plane,
            renderer: this.renderer,
            text: this.text,
            designation: this.designation,
            textColor: this.textColor,
            font: this.font
        });
    }

    update(scroll: { current: number; last: number }, direction: 'right' | 'left', hoveredIndex: number | null) {
        this.plane.position.x = this.x - scroll.current - this.extra;

        const x = this.plane.position.x;
        const H = this.viewport.width / 2;

        if (this.bend === 0) {
            this.plane.position.y = 0;
            this.plane.rotation.z = 0;
        } else {
            const B_abs = Math.abs(this.bend);
            const R = (H * H + B_abs * B_abs) / (2 * B_abs);
            const effectiveX = Math.min(Math.abs(x), H);

            const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
            if (this.bend > 0) {
                this.plane.position.y = -arc;
                this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
            } else {
                this.plane.position.y = arc;
                this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
            }
        }

        // Fades image in slowly once it resolves, stopping the 'abrupt load' effect.
        if (this.isLoaded) {
            this.imageLoadFactor = lerp(this.imageLoadFactor, 1.0, 0.05);
            this.program.uniforms.uImageLoaded.value = this.imageLoadFactor;
        }

        let targetHover = 1.0;
        let targetScale = 1.0;
        let targetZoom = 1.0;
        let targetActive = 0.0;

        if (hoveredIndex !== null) {
            const isHovered = (hoveredIndex === this.index);
            targetHover = isHovered ? 1.0 : 0.35;
            targetScale = isHovered ? 1.06 : 1.0;
            targetZoom = isHovered ? 1.15 : 1.0; // The internal photo zoom
            targetActive = isHovered ? 1.0 : 0.0; // Show the extra 2 text fields
        }

        // Factor lerping for smooth UI
        this.hoverFactor = lerp(this.hoverFactor, targetHover, 0.1);
        this.scaleFactor = lerp(this.scaleFactor, targetScale, 0.1);
        this.zoomFactor = lerp(this.zoomFactor, targetZoom, 0.1);
        this.activeFactor = lerp(this.activeFactor, targetActive, 0.1);

        // Apply uniforms
        this.program.uniforms.uHoverFactor.value = this.hoverFactor;
        this.program.uniforms.uZoom.value = this.zoomFactor;

        this.plane.scale.x = this.baseScaleX * this.scaleFactor;
        this.plane.scale.y = this.baseScaleY * this.scaleFactor;

        if (this.title && this.title.mesh) {
            this.title.mesh.program.uniforms.uHoverFactor.value = this.hoverFactor;
            this.title.mesh.program.uniforms.uActive.value = this.activeFactor;
        }

        const planeOffset = this.plane.scale.x / 2;
        const viewportOffset = this.viewport.width / 2;
        this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
        this.isAfter = this.plane.position.x - planeOffset > viewportOffset;

        if (direction === 'right' && this.isBefore) {
            this.extra -= this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
        if (direction === 'left' && this.isAfter) {
            this.extra += this.widthTotal;
            this.isBefore = this.isAfter = false;
        }
    }

    onResize({ screen, viewport }: { screen?: ScreenSize; viewport?: Viewport } = {}) {
        if (screen) this.screen = screen;
        if (viewport) {
            this.viewport = viewport;
            if (this.plane.program.uniforms.uViewportSizes) {
                this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
            }
        }
        this.scale = this.screen.height / 1500;
        this.baseScaleY = (this.viewport.height * (850 * this.scale)) / this.screen.height;
        this.baseScaleX = (this.viewport.width * (650 * this.scale)) / this.screen.width;
        this.plane.scale.y = this.baseScaleY * this.scaleFactor;
        this.plane.scale.x = this.baseScaleX * this.scaleFactor;
        this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
        this.padding = 1.8;
        this.width = this.baseScaleX + this.padding;
        this.widthTotal = this.width * this.length;
        this.x = this.width * this.index;
    }
}

interface AppConfig {
    items?: { image: string; text: string; designation?: string; details?: string }[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    scrollSpeed?: number;
    scrollEase?: number;
    onHover: (index: number | null) => void;
}

class App {
    container: HTMLElement;
    scrollSpeed: number;
    scroll: {
        ease: number;
        current: number;
        target: number;
        last: number;
        position?: number;
    };
    onCheckDebounce: (...args: any[]) => void;
    renderer!: Renderer;
    gl!: GL;
    camera!: Camera;
    scene!: Transform;
    planeGeometry!: Plane;
    medias: Media[] = [];
    mediasImages: { image: string; text: string; designation?: string; details?: string }[] = [];
    screen!: { width: number; height: number };
    viewport!: { width: number; height: number };
    raf: number = 0;

    boundOnResize!: () => void;
    boundOnWheel!: (e: Event) => void;
    boundOnTouchDown!: (e: MouseEvent | TouchEvent) => void;
    boundOnTouchMove!: (e: MouseEvent | TouchEvent) => void;
    boundOnTouchUp!: () => void;

    isDown: boolean = false;
    start: number = 0;

    mouse = new Vec2(-999, -999);
    raycast!: Raycast;
    hoveredIndex: number | null = null;
    autoScrollSpeed: number = 0.05;
    onHover: (index: number | null) => void;

    constructor(
        container: HTMLElement,
        {
            items,
            bend = 1,
            textColor = '#ffffff',
            borderRadius = 0,
            font = 'bold 30px Figtree',
            scrollSpeed = 2,
            scrollEase = 0.05,
            onHover
        }: AppConfig
    ) {
        document.documentElement.classList.remove('no-js');
        this.container = container;
        this.scrollSpeed = scrollSpeed;

        // Set higher initial target & current so the sequence actively starts instantly without delay.
        this.scroll = { ease: scrollEase, current: 1500, target: 1500, last: 1500 };

        this.onHover = onHover;
        this.onCheckDebounce = debounce(this.onCheck.bind(this), 200);
        this.createRenderer();
        this.createCamera();
        this.createScene();
        this.onResize();
        this.createGeometry();
        this.raycast = new Raycast();
        this.createMedias(items, bend, textColor, borderRadius, font);
        this.update();
        this.addEventListeners();
    }

    createRenderer() {
        this.renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, 2)
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(0, 0, 0, 0);
        this.container.appendChild(this.renderer.gl.canvas as HTMLCanvasElement);
    }

    createCamera() {
        this.camera = new Camera(this.gl);
        this.camera.fov = 45;
        this.camera.position.z = 20;
    }

    createScene() {
        this.scene = new Transform();
    }

    createGeometry() {
        this.planeGeometry = new Plane(this.gl, {
            heightSegments: 50,
            widthSegments: 100
        });
    }

    createMedias(
        items: { image: string; text: string; designation?: string; details?: string }[] | undefined,
        bend: number = 1,
        textColor: string,
        borderRadius: number,
        font: string
    ) {
        const defaultItems = [
            { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge', designation: 'Engineering' },
            { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'Desk Setup', designation: 'Workspace' }
        ];
        const galleryItems = items && items.length ? items : defaultItems;
        this.mediasImages = galleryItems.concat(galleryItems);
        this.medias = this.mediasImages.map((data, index) => {
            return new Media({
                geometry: this.planeGeometry,
                gl: this.gl,
                image: data.image,
                index,
                length: this.mediasImages.length,
                renderer: this.renderer,
                scene: this.scene,
                screen: this.screen,
                text: data.text,
                designation: data.designation,
                viewport: this.viewport,
                bend,
                textColor,
                borderRadius,
                font
            });
        });
    }

    onTouchDown(e: MouseEvent | TouchEvent) {
        this.isDown = true;
        this.scroll.position = this.scroll.current;
        this.start = 'touches' in e ? e.touches[0].clientX : e.clientX;
    }

    onTouchMove(e: MouseEvent | TouchEvent) {
        const isTouch = 'touches' in e;
        const clientX = isTouch ? e.touches[0].clientX : e.clientX;
        const clientY = isTouch ? e.touches[0].clientY : e.clientY;

        if (this.isDown) {
            const distance = (this.start - clientX) * (this.scrollSpeed * 0.025);
            this.scroll.target = (this.scroll.position ?? 0) + distance;
        }

        if (!isTouch && this.renderer && this.renderer.gl && this.renderer.gl.canvas) {
            const rect = this.renderer.gl.canvas.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                this.mouse.set(
                    (x / rect.width) * 2 - 1,
                    -(y / rect.height) * 2 + 1
                );
            } else {
                this.mouse.set(-999, -999);
            }
        }
    }

    onTouchUp() {
        this.isDown = false;
        this.onCheck();
    }

    onWheel(e: Event) {
        const wheelEvent = e as WheelEvent;
        const delta = wheelEvent.deltaY || (wheelEvent as any).wheelDelta || (wheelEvent as any).detail;
        this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
        this.onCheckDebounce();
    }

    onCheck() {
        if (!this.medias || !this.medias[0]) return;
        const width = this.medias[0].width;
        const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
        const item = width * itemIndex;
        this.scroll.target = this.scroll.target < 0 ? -item : item;
    }

    onResize() {
        this.screen = {
            width: this.container.clientWidth,
            height: this.container.clientHeight
        };
        this.renderer.setSize(this.screen.width, this.screen.height);
        this.camera.perspective({
            aspect: this.screen.width / this.screen.height
        });
        const fov = (this.camera.fov * Math.PI) / 180;
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const width = height * this.camera.aspect;
        this.viewport = { width, height };
        if (this.medias) {
            this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
        }
    }

    checkHover() {
        if (this.mouse.x === -999) {
            if (this.hoveredIndex !== null) {
                this.hoveredIndex = null;
                this.onHover(null);
            }
            return;
        }

        this.raycast.castMouse(this.camera, this.mouse);
        const meshes = this.medias.map(m => m.plane);
        const hits = this.raycast.intersectBounds(meshes);

        if (hits.length > 0) {
            const hitMesh = hits[0];
            const mediaIndex = this.medias.findIndex(m => m.plane === hitMesh);
            if (mediaIndex !== -1) {
                if (this.hoveredIndex !== mediaIndex) {
                    this.hoveredIndex = mediaIndex;
                    const originalIndex = mediaIndex % (this.mediasImages.length / 2);
                    this.onHover(originalIndex);
                }
                return;
            }
        }

        if (this.hoveredIndex !== null) {
            this.hoveredIndex = null;
            this.onHover(null);
        }
    }

    update() {
        this.checkHover();

        // Constant smooth background movement, even before any touches.
        const targetSpeed = this.hoveredIndex !== null ? 0.0 : 0.05;
        this.autoScrollSpeed = lerp(this.autoScrollSpeed, targetSpeed, 0.1);

        if (!this.isDown) {
            this.scroll.target += this.autoScrollSpeed;
        }

        this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';

        if (this.medias) {
            this.medias.forEach(media => media.update(this.scroll, direction, this.hoveredIndex));
        }
        this.renderer.render({ scene: this.scene, camera: this.camera });
        this.scroll.last = this.scroll.current;
        this.raf = window.requestAnimationFrame(this.update.bind(this));
    }

    addEventListeners() {
        this.boundOnResize = this.onResize.bind(this);
        this.boundOnWheel = this.onWheel.bind(this);
        this.boundOnTouchDown = this.onTouchDown.bind(this);
        this.boundOnTouchMove = this.onTouchMove.bind(this);
        this.boundOnTouchUp = this.onTouchUp.bind(this);
        window.addEventListener('resize', this.boundOnResize);
        window.addEventListener('mousewheel', this.boundOnWheel);
        window.addEventListener('wheel', this.boundOnWheel);
        window.addEventListener('mousedown', this.boundOnTouchDown);
        window.addEventListener('mousemove', this.boundOnTouchMove);
        window.addEventListener('mouseup', this.boundOnTouchUp);
        window.addEventListener('touchstart', this.boundOnTouchDown);
        window.addEventListener('touchmove', this.boundOnTouchMove);
        window.addEventListener('touchend', this.boundOnTouchUp);
    }

    destroy() {
        window.cancelAnimationFrame(this.raf);
        window.removeEventListener('resize', this.boundOnResize);
        window.removeEventListener('mousewheel', this.boundOnWheel);
        window.removeEventListener('wheel', this.boundOnWheel);
        window.removeEventListener('mousedown', this.boundOnTouchDown);
        window.removeEventListener('mousemove', this.boundOnTouchMove);
        window.removeEventListener('mouseup', this.boundOnTouchUp);
        window.removeEventListener('touchstart', this.boundOnTouchDown);
        window.removeEventListener('touchmove', this.boundOnTouchMove);
        window.removeEventListener('touchend', this.boundOnTouchUp);
        if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
            this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas as HTMLCanvasElement);
        }
    }
}

interface CircularGalleryProps {
    items?: { image: string; text: string; designation?: string; details?: string }[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    fontUrl?: string;
    scrollSpeed?: number;
    scrollEase?: number;
    onHover: (index: number | null) => void;
}

function CircularGallery({
    items,
    bend = 3,
    textColor = '#ffffff',
    borderRadius = 0.05,
    font = 'bold 30px Figtree',
    fontUrl,
    scrollSpeed = 2,
    scrollEase = 0.05,
    onHover
}: CircularGalleryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        let app: App | undefined;
        let isMounted = true;
        resolveFont(font, fontUrl).then(resolvedFont => {
            if (!isMounted || !containerRef.current) return;
            app = new App(containerRef.current, {
                items,
                bend,
                textColor,
                borderRadius,
                font: resolvedFont,
                scrollSpeed,
                scrollEase,
                onHover
            });
        });
        return () => {
            isMounted = false;
            if (app) app.destroy();
        };
    }, [items, bend, textColor, borderRadius, font, fontUrl, scrollSpeed, scrollEase, onHover]);
    return <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />;
}


const ALUMNI_DATA = [
    {
        image: '/images/notablealmuni/alumni1.webp',
        text: 'Sadiya Tabassum',
        designation: 'Specialist, Customer Experience Strategy & Analytics, Therap BD',
    },
    {
        image: '/images/notablealmuni/alumni12(1).webp',
        text: 'Arif-Uz-Zaman',
        designation: 'Head of Technology, Transcom LTD',
        
    },
    {
        image: '/images/notablealmuni/image9.webp',
        text: 'Kazi Emran Mahaboob',
        designation: 'Deputy Director, Head of Service Strategy & Analytics, Grameenphone LTD',
    },
    {
        image: '/images/notablealmuni/akhteruddin-mahmood.jpg',
        text: 'Mr.Akhteruddin Mahmood',
        designation: 'DMD & Cheif HR officer, Bank Asia LTD'
    },
    {
        image: '/images/notablealmuni/notablealumni3.webp',
        text: 'MS M Zia-ul-Azim',
        designation: 'Chairman of BREB',
    },
    {
        image: '/images/notablealmuni/notablealumni6.webp',
        text: 'Moon Sadia Dipthee',
        designation: 'Director of Analog Layout Design, Ulkasemi',
    }
];

export default function NotableAlumni() {

    return (
        <div className="relative w-full bg-[#faf6f6ff] border-t border-zinc-200 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
                <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
                    <TypingText
                        text="Notable"
                        className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a] opacity-75 leading-none tracking-normal"
                    />
                    <TypingText
                        text="Alumni"
                        className="text-[#0f4a8a] font-black tracking-[0.25em] text-sm md:text-base uppercase ml-3 relative z-10"
                    />
                </div>
            </div>

            {/* WebGL circular gallery canvas container */}
            <div className="w-full h-[400px] md:h-[450px] relative z-10 rounded-2xl overflow-hidden bg-gradient-to-r from-slate-100/50 via-white to-slate-100/50 shadow-inner">
                <CircularGallery
                    items={ALUMNI_DATA.map(item => ({ image: item.image, text: item.text, designation: item.designation }))}
                    bend={1.8}
                    textColor="#0f4a8a"
                    borderRadius={0.06}
                    font="bold 80px 'Geist Sans', sans-serif"
                    scrollSpeed={2.5}
                    scrollEase={0.06}
                    onHover={() => { }}
                />
            </div>
        </div>
    );
}