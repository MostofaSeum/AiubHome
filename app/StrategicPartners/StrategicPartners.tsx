"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
      ariaLabel?: string;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");



const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  seqHeight: number,
  isHovered: boolean,
  hoverSpeed: number | undefined,
  isVertical: boolean,
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
      track.style.transform = transformValue;
    }

    if (prefersReduced) {
      track.style.transform = isVertical
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, 0, 0)";
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime =
        Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target =
        isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor =
        1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
        offsetRef.current = nextOffset;

        const transformValue = isVertical
          ? `translate3d(0, ${-offsetRef.current}px, 0)`
          : `translate3d(${-offsetRef.current}px, 0, 0)`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [seqHeight, setSeqHeight] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(
      ANIMATION_CONFIG.MIN_COPIES,
    );
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === "up" || direction === "down";

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier: number;
      if (isVertical) {
        directionMultiplier = direction === "up" ? 1 : -1;
      } else {
        directionMultiplier = direction === "left" ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;
      if (isVertical) {
        const parentHeight =
          containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== `${targetHeight}px`)
            containerRef.current.style.height = `${targetHeight}px`;
        }
        if (sequenceHeight > 0) {
          setSeqHeight(Math.ceil(sequenceHeight));
          const viewport =
            containerRef.current?.clientHeight ??
            parentHeight ??
            sequenceHeight;
          const copiesNeeded =
            Math.ceil(viewport / sequenceHeight) +
            ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded =
          Math.ceil(containerWidth / sequenceWidth) +
          ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useEffect(() => {
      const container = containerRef.current;
      const seq = seqRef.current;
      if (!container || !seq) return;

      if (!window.ResizeObserver) {
        const handleResize = () => updateDimensions();
        window.addEventListener("resize", handleResize);
        updateDimensions();
        return () => window.removeEventListener("resize", handleResize);
      }

      const observer1 = new ResizeObserver(updateDimensions);
      observer1.observe(container);

      const observer2 = new ResizeObserver(updateDimensions);
      observer2.observe(seq);

      updateDimensions();

      return () => {
        observer1.disconnect();
        observer2.disconnect();
      };
    }, [updateDimensions]);

    useEffect(() => {
      const seq = seqRef.current;
      if (!seq) return;

      const images = seq.querySelectorAll("img");
      if (images.length === 0) {
        updateDimensions();
        return;
      }

      let remainingImages = images.length;
      const handleImageLoad = () => {
        remainingImages -= 1;
        if (remainingImages === 0) {
          updateDimensions();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener("load", handleImageLoad, { once: true });
          img.addEventListener("error", handleImageLoad, { once: true });
        }
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", handleImageLoad);
          img.removeEventListener("error", handleImageLoad);
        });
      };
    }, [updateDimensions]);

    useAnimationLoop(
      trackRef,
      targetVelocity,
      seqWidth,
      seqHeight,
      isHovered,
      effectiveHoverSpeed,
      isVertical,
    );

    const cssVariables = useMemo(
      () =>
        ({
          "--logoloop-gap": `${gap}px`,
          "--logoloop-logoHeight": `${logoHeight}px`,
          ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor],
    );

    const rootClasses = useMemo(
      () =>
        cx(
          "relative group",
          isVertical
            ? "overflow-hidden h-full inline-block"
            : "overflow-x-hidden",
          "[--logoloop-gap:32px]",
          "[--logoloop-logoHeight:28px]",
          "[--logoloop-fadeColorAuto:#ffffff]",
          "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
          scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
          className,
        ),
      [isVertical, scaleOnHover, className],
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        if (renderItem) {
          return (
            <li
              className={cx(
                "flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]",
                isVertical
                  ? "mb-[var(--logoloop-gap)]"
                  : "mr-[var(--logoloop-gap)]",
                scaleOnHover && "overflow-visible group/item",
              )}
              key={key}
              role="listitem"
            >
              {renderItem(item, key)}
            </li>
          );
        }

        const isNodeItem = "node" in item;

        const content = isNodeItem ? (
          <span
            className={cx(
              "inline-flex items-center",
              "motion-reduce:transition-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120",
            )}
            aria-hidden={!!item.href && !item.ariaLabel}
          >
            {item.node}
          </span>
        ) : (
          <Image
            className={cx(
              "h-[var(--logoloop-logoHeight)] w-auto block object-contain",
              "[-webkit-user-drag:none] pointer-events-none",
              "[image-rendering:-webkit-optimize-contrast]",
              "motion-reduce:transition-none",
              scaleOnHover &&
                "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120",
            )}
            src={item.src}
            width={item.width ?? 120}
            height={item.height ?? 40}
            alt={item.alt ?? ""}
            title={item.title}
            loading="lazy"
            draggable={false}
          />
        );

        const itemAriaLabel = isNodeItem
          ? (item.ariaLabel ?? item.title)
          : (item.alt ?? item.title);

        const inner = item.href ? (
          <a
            className={cx(
              "inline-flex items-center no-underline rounded",
              "transition-opacity duration-200 ease-linear",
              "hover:opacity-80",
              "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2",
            )}
            href={item.href}
            aria-label={itemAriaLabel || "logo link"}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
              "flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]",
              isVertical
                ? "mb-[var(--logoloop-gap)]"
                : "mr-[var(--logoloop-gap)]",
              scaleOnHover && "overflow-visible group/item",
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [isVertical, scaleOnHover, renderItem],
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className={cx("flex items-center", isVertical && "flex-col")}
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) =>
              renderLogoItem(item, `${copyIndex}-${itemIndex}`),
            )}
          </ul>
        )),
      [copyCount, logos, renderLogoItem, isVertical],
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: isVertical
          ? toCssLength(width) === "100%"
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? "100%"),
        ...cssVariables,
        ...style,
      }),
      [width, cssVariables, style, isVertical],
    );

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
      >
        {fadeOut && (
          <>
            {isVertical ? (
              <>
                <div
                  aria-hidden
                  className={cx(
                    "pointer-events-none absolute inset-x-0 top-0 z-10",
                    "h-[clamp(24px,8%,120px)]",
                    "bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(255, 255, 255, 255)_100%)]",
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    "pointer-events-none absolute inset-x-0 bottom-0 z-10",
                    "h-[clamp(24px,8%,120px)]",
                    "bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(255, 250, 250, 255)_100%)]",
                  )}
                />
              </>
            ) : (
              <>
                <div
                  aria-hidden
                  className={cx(
                    "pointer-events-none absolute inset-y-0 left-0 z-10",
                    "w-[clamp(24px,8%,120px)]",
                    "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(255, 250, 250, 255)_100%)]",
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    "pointer-events-none absolute inset-y-0 right-0 z-10",
                    "w-[clamp(24px,8%,120px)]",
                    "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(255, 255, 255, 255)_100%)]",
                  )}
                />
              </>
            )}
          </>
        )}

        <div
          className={cx(
            "flex will-change-transform select-none relative z-0",
            "motion-reduce:transform-none",
            isVertical ? "flex-col h-max w-full" : "flex-row w-max",
          )}
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logoLists}
        </div>
      </div>
    );
  },
);

LogoLoop.displayName = "LogoLoop";

export default function StrategicPartners() {
  const partnerLogos: LogoItem[] = [
    {
      node: (
        <div className="flex items-center gap-2 font-semibold text-slate-800 text-lg select-none">
          <svg
            className="w-6 h-6 flex-shrink-0"
            viewBox="0 0 23 23"
            fill="none"
          >
            <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
            <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
            <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00A1F1" />
            <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#FFB900" />
          </svg>
          <span className="tracking-tight">Microsoft</span>
        </div>
      ),
    },
    {
      node: (
        <div className="flex items-center gap-2 font-semibold text-[#1d70b8] text-lg select-none">
          <svg
            className="w-8 h-6 flex-shrink-0"
            viewBox="0 0 40 24"
            fill="currentColor"
          >
            <path d="M4 14v4h2v-4H4zm4-3v7h2v-7H8zm4-4v11h2V7h-2zm4-4v15h2V3h-2zm4 0v15h2V3h-2zm4 4v11h2V7h-2zm4 4v7h2v-7h-2zm4 3v4h2v-4h-2z" />
          </svg>
          <span className="font-bold tracking-tight">Cisco</span>
        </div>
      ),
    },
    {
      node: (
        <div className="flex items-center gap-2 font-bold text-[#F80000] text-xl tracking-tighter select-none">
          <span className="font-serif italic font-black">ORACLE</span>
        </div>
      ),
    },
    {
      node: (
        <div className="flex items-center gap-1 font-bold text-slate-900 text-lg select-none">
          <span className="font-sans lowercase tracking-tighter">aws</span>
          <svg
            className="w-7 h-4 flex-shrink-0 text-[#FF9900]"
            viewBox="0 0 32 16"
            fill="currentColor"
          >
            <path d="M2 4c5 3 13 4 20 1 3-1 6-3 8-5-1 4-5 7-9 8-6 2-13 1-19-4z" />
          </svg>
        </div>
      ),
    },
    {
      node: (
        <div className="flex items-center gap-1 font-black text-[#0068B5] text-xl italic tracking-tighter select-none">
          <span>intel</span>
        </div>
      ),
    },
    {
      node: (
        <div className="flex items-center gap-2 font-bold text-red-600 text-lg select-none">
          <svg
            className="w-6 h-6 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <span className="tracking-tight text-slate-800 lowercase">
            redhat
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full border-t border-zinc-200 py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-xl mx-auto flex justify-center items-center mb-10">
        <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
          <h3 className="text-[1.5rem] md:text-[2rem] font-bold text-[#0f4a8a] uppercase ml-4 tracking-wider ">
            Strategic Partners
          </h3>
        </div>
      </div>

      <div className="w-full  py-8 px-4 flex justify-center items-center">
        <LogoLoop
          logos={partnerLogos}
          speed={40}
          direction="right"
          logoHeight={32}
          gap={70}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
        />
      </div>
    </div>
  );
}
