import React, { useState } from "react";
import "./SideBarItem.css";

const SideBarItem = ({ icon, labelText }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      aria-label="sidebaritem-container"
      className={`sidebaritem-container ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}
    >
      <span aria-label="sidebar-icon">{icon}</span>

      <label aria-label="sidebar-label">{labelText}</label>
    </div>
  );
};

export default SideBarItem;
