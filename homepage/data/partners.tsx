import React from "react";
import { LogoItem } from "../types";

export const strategicPartners: LogoItem[] = [
  {
    node: (
      <div className="flex items-center gap-2 font-semibold text-slate-800 text-lg select-none">
        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 23 23" fill="none">
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
        <span className="tracking-tight text-slate-800 lowercase">redhat</span>
      </div>
    ),
  },
];

export const educationalPartners: LogoItem[] = [
  {
    node: (
      <div className="flex items-center gap-2 font-semibold text-slate-800 text-lg select-none">
        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 23 23" fill="none">
          <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
          <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
          <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00A1F1" />
          <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#FFB900" />
        </svg>
        <span className="tracking-tight">Harvard</span>
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
        <span className="font-bold tracking-tight">MIT</span>
      </div>
    ),
  },
  {
    node: (
      <div className="flex items-center gap-2 font-bold text-[#F80000] text-xl tracking-tighter select-none">
        <span className="font-serif italic font-black">Stanford</span>
      </div>
    ),
  },
  {
    node: (
      <div className="flex items-center gap-1 font-bold text-slate-900 text-lg select-none">
        <span className="font-sans lowercase tracking-tighter">Oxford</span>
      </div>
    ),
  },
];
