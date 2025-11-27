import React from "react";

const items = [
    { name: "Natalie Gibson", role: "UI/UX Designer", time: "1:30 - 1:50" },
    { name: "Peter Piper", role: "Front-end Dev", time: "3:00 - 3:20" },
    { name: "Alex Johnson", role: "QA Engineer", time: "4:15 - 4:30" },
];

export default function InterviewList() {
    return (
        <div className="interviews">
            {items.map((it, i) => (
                <div className="interview" key={i}>
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center" }}>{it.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700 }}>{it.name}</div>
                        <div className="small">{it.role}</div>
                    </div>
                    <div className="small">{it.time}</div>
                </div>
            ))}
        </div>
    );
}
