import React from "react";

function polarToCartesian(cx, cy, r, angleDeg) {
  const angle = (angleDeg - 90) * Math.PI / 180.0;
  return { x: cx + (r * Math.cos(angle)), y: cy + (r * Math.sin(angle)) };
}

export default function PieChart({ data = [], size = 120 }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  let startAngle = 0;
  const cx = size / 2, cy = size / 2, r = size / 2 - 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {data.map((d, i) => {
        const angle = (d.value / total) * 360;
        const endAngle = startAngle + angle;
        const start = polarToCartesian(cx, cy, r, startAngle);
        const end = polarToCartesian(cx, cy, r, endAngle);
        const large = angle > 180 ? 1 : 0;
        const path = `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y} Z`;
        const fill = i === 0 ? "#7aa2ff" : "#ff94a6";
        startAngle += angle;
        return <path key={i} d={path} fill={fill} stroke="#fff" strokeWidth="1" />;
      })}
    </svg>
  );
}
