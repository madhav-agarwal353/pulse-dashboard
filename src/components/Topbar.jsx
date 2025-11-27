import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../redux/slices/roleSlice";

export default function Topbar() {
  const dispatch = useDispatch();
  const role = useSelector((s) => s.role.currentRole);

  return (
    <div className="topbar">
      <div className="search">
        <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#9aa3a9" d="M21 20l-4.35-4.35A7.5 7.5 0 1 0 19.5 19.5L21 21z"/></svg>
        <input placeholder="Search" />
      </div>

      <div className="topbar-right">
        <div style={{fontSize:12, color:"var(--muted)"}}>Role: <strong style={{color:"#111"}}>{role}</strong></div>
        <button className="btn" onClick={()=> dispatch(setRole(role === "lead" ? "member" : "lead"))} style={{padding:"8px 12px", borderRadius:8}}>Switch Role</button>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{fontSize:12, textAlign:"right"}}>
            <div style={{fontWeight:700}}>Madhav Agarwal</div>
            <div className="small">Admin Profile</div>
          </div>
          <div style={{width:42,height:42,borderRadius:"50%",background:"#e9eef7",display:"flex",alignItems:"center",justifyContent:"center"}}>DH</div>
        </div>
      </div>
    </div>
  );
}
