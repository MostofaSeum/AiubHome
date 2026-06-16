"use client";

import React from "react";
import { gsap } from "gsap";

interface GridMotionProps {
  items?: React.ReactNode[];
  gradientColor?: string;
}

export default function GridMotion({
  items = [],
  gradientColor = "black",
}: GridMotionProps) {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const rowRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const autoXRef = React.useRef<number>(0);
  const isHoveredRef = React.useRef<boolean>(false);

  // We have a 4x7 grid (4 rows, 7 columns)
  // Let's define the slots in order of priority (middle rows first, center columns first)
  const prioritySlots = [
    // Middle Rows (Row 1 and 2), Center Columns
    { r: 1, c: 3 }, { r: 2, c: 3 },
    { r: 1, c: 2 }, { r: 1, c: 4 },
    { r: 2, c: 2 }, { r: 2, c: 4 },
    { r: 1, c: 1 }, { r: 1, c: 5 },
    { r: 2, c: 1 }, { r: 2, c: 5 },
    { r: 1, c: 0 }, { r: 1, c: 6 },
    { r: 2, c: 0 }, { r: 2, c: 6 },
    
    // Top and Bottom Rows (Row 0 and 3), Center Columns
    { r: 0, c: 3 }, { r: 3, c: 3 },
    { r: 0, c: 2 }, { r: 0, c: 4 },
    { r: 3, c: 2 }, { r: 3, c: 4 },
    { r: 0, c: 1 }, { r: 0, c: 5 },
    { r: 3, c: 1 }, { r: 3, c: 5 },
    { r: 0, c: 0 }, { r: 0, c: 6 },
    { r: 3, c: 0 }, { r: 3, c: 6 }
  ];

  // Initialize a 4x7 grid with null values
  const gridData = Array.from({ length: 4 }, () => Array(7).fill(null));

  // Place items into the grid using the priority slot coordinates
  items.forEach((item, index) => {
    if (index < prioritySlots.length) {
      const { r, c } = prioritySlots[index];
      gridData[r][c] = item;
    }
  });

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.ticker.lagSmoothing(0);

    const updateMotion = (): void => {
      // Only advance the continuous motion if the cursor is NOT hovering the grid
      if (!isHoveredRef.current) {
        autoXRef.current += 0.8;
      }

      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          // Map to a smooth sine-wave cycle for clean auto-scrolling
          const moveAmount =
            Math.sin(autoXRef.current * 0.008) *
            (maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    return () => {
      removeAnimationLoop();
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="h-full w-full overflow-hidden"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      <section
        className="w-full h-full overflow-hidden relative flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>
        <div className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[2]">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-7"
              style={{ willChange: "transform, filter" }}
              ref={(el) => {
                if (el) rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: 7 }, (_, itemIndex) => {
                const content = gridData[rowIndex][itemIndex];
                const hasImage = typeof content === "string" && (content.startsWith("http") || content.startsWith("/"));
                
                return (
                  <div key={itemIndex} className="relative">
                    <div 
                      className={`relative w-full h-full overflow-hidden rounded-[10px] flex items-center justify-center min-h-[120px] transition-colors ${
                        hasImage 
                          ? "bg-[#111]" 
                          : "bg-zinc-200/30 border border-zinc-200/50"
                      }`}
                    >
                      {hasImage ? (
                        <div
                          className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                          style={{ backgroundImage: `url("${content}")` }}
                        ></div>
                      ) : (
                        content && <div className="p-4 text-center z-[1] text-gray-700">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
}
