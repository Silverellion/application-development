import React, { useState } from "react";
import "./StatusBadge.css";

export const StatusBadge = () => {
  const [status, setStatus] = useState("online");
  return (
    <div className={`status-badge ${status}`}>
      {status}
      <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
        <option value="online">Online</option>
        <option value="busy">Busy</option>
        <option value="offline">Offline</option>
      </select>
    </div>
  );
};
