import React from "react";

export default function Sparkline({ data = [], height = 60, stroke = "#ff7a66" }) {
  if (!data || data.length === 0) return null;
  const width = 520;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    // normalize y (flip)
    const y = height - ((d - min) / (max - min || 1)) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
