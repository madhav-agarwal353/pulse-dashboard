import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/PieChart";
import Sparkline from "../components/Sparkline";
import PieChart from "../components/PieChart";
import MemberCard from "../components/MemberCard";
import InterviewList from "../components/InterviewList";

import { useSelector } from "react-redux";

export default function Dashboard() {
    const members = useSelector((s) => s.members.members);
    // summary counts
    const counts = members.reduce((acc, m) => { acc[m.status] = (acc[m.status] || 0) + 1; return acc }, {});

    // fake sparkline data
    const sparkData = [10, 20, 15, 25, 30, 28, 32, 29, 34];

    const pieData = [
        { label: "Men", value: Math.max(1, Math.round(members.length * 0.6)) },
        { label: "Women", value: Math.max(1, Math.round(members.length * 0.4)) },
    ];

    return (
        <div className="app">
            <Sidebar />
            <div className="main">
                <Topbar />
                <div className="grid">
                    <div className="row">
                        <div className="card">
                            <h3 className="small">Employees Info</h3>
                            <Sparkline data={sparkData} height={80} />
                            <div className="content-grid">
                                <div className="card" style={{ padding: 12 }}>
                                    <h4>Employees Availability</h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
                                        <div className="small-card">
                                            <div className="small">Attendance</div>
                                            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>400</div>
                                        </div>
                                        <div className="small-card">
                                            <div className="small">Late Coming</div>
                                            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>17</div>
                                        </div>
                                        <div className="small-card">
                                            <div className="small">Absent</div>
                                            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>6</div>
                                        </div>
                                        <div className="small-card">
                                            <div className="small">Leave Apply</div>
                                            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>2</div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: 12 }}>
                                    <div className="small-card" style={{ marginBottom: 12 }}>
                                        <div style={{ fontSize: 28, fontWeight: 700 }}>1546</div>
                                        <div className="small">Applications</div>
                                    </div>

                                    <div className="small-card">
                                        <PieChart data={pieData} size={160} />
                                        <div style={{ textAlign: "center", marginTop: 8 }} className="small">Total Employees: {members.length}</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: 18 }}>
                                <h4>Team Members</h4>
                                <div className="members">
                                    {members.map((m) => (
                                        <MemberCard key={m.id} member={m} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rightcol">
                            <div className="app-card">
                                <div>
                                    <div className="small">Applications</div>
                                    <div style={{ fontSize: 22, fontWeight: 700 }}>1546</div>
                                </div>
                                <div style={{ width: 80, height: 80, borderRadius: 8, background: "#f0f4ff" }} />
                            </div>

                            <div style={{ marginTop: 12 }}>
                                <div className="card">
                                    <h4>Upcoming Interviews</h4>
                                    <InterviewList />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="rightcol" style={{ width: 320 }}>
                {/* duplicate right column to fill 3rd column, or use only two columns by changing grid if desired */}
                <div className="card">
                    <h4>Summary</h4>
                    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                        <StatCard title="Working" value={counts.Working || 0} />
                        <StatCard title="Meeting" value={counts.Meeting || 0} />
                        <StatCard title="Break" value={counts.Break || 0} />
                    </div>
                </div>
            </div>
        </div>
    );
}
