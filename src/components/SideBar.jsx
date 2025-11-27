import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div style={{width:40,height:40,borderRadius:8,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--purple)",fontWeight:700}}>MT</div>
        <div>
          <h2 style={{margin:0}}>My-Task</h2>
          <div style={{fontSize:12,opacity:0.85}}>Admin Dashboard</div>
        </div>
      </div>

      <nav className="nav">
        <a href="#">Dashboard</a>
        <a href="#">Projects</a>
        <a href="#">Tickets</a>
        <a href="#">Our Clients</a>
        <a href="#">Employees</a>
        <a href="#">Accounts</a>
        <a href="#">Payroll</a>
        <a href="#">App</a>
      </nav>
    </aside>
  );
}
