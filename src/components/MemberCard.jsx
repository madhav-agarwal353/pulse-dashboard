import React from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../redux/slices/membersSlice";

export default function MemberCard({ member }) {
  const dispatch = useDispatch();
  if (!member) return null;

  const btn = (s, cls) => (
    <button
      onClick={() => dispatch(setStatus({ memberId: member.id, status: s }))}
      className={`badge ${cls}`}
      style={{ marginLeft: 6 }}
    >
      {s}
    </button>
  );

  return (
    <div className="member">
      <div className="avatar">{member.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
      <div style={{flex:1}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div>
            <div style={{fontWeight:700}}>{member.name}</div>
            <div className="small">Status: <strong>{member.status}</strong></div>
          </div>
          <div style={{textAlign:"right"}}>
            <div className="small">{member.tasks.filter(t=>!t.completed).length} active tasks</div>
          </div>
        </div>

        <div style={{marginTop:10, display:"flex", gap:6, alignItems:"center"}}>
          {member.status === "Working" ? btn("Working","working") : btn("Working","working")}
          {btn("Break","break")}
          {btn("Meeting","meeting")}
          {btn("Offline","offline")}
        </div>

        <div style={{marginTop:12}}>
          {member.tasks.length === 0 ? <div className="small">No tasks</div> : member.tasks.map(t => (
            <div key={t.id} style={{padding:"8px", background:"#fbfdff", borderRadius:6, marginBottom:8}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{fontWeight:600}}>{t.title}</div>
                <div className="small">{t.progress}%</div>
              </div>
              <div style={{height:8, background:"#e9eef7", borderRadius:6, marginTop:8, overflow:"hidden"}}>
                <div style={{width: `${t.progress}%`, height:"100%", background:"linear-gradient(90deg,#7aa2ff,#ff94a6)"}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
