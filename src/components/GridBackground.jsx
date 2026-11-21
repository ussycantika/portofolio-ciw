import React from "react";

export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Soft Ambient Radial Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: "var(--c-accent)" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "var(--c-accent)" }}
      />
    </div>
  );
}
