import React from "react";

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

export interface PartnerLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Faculty {
  id: string;
  name: string;
  color: string;
  ring: string;
  x: number;
  y: number;
  size: number;
}

export interface Alumni {
  id: number;
  name: string;
  designation: string;
  faculty: string;
  img: string;
  x: number;
  y: number;
  size: number;
}

export interface NavLink {
  title: string;
  href: string;
}

export interface QuickLink {
  title: string;
  icon: string;
  href: string;
}
