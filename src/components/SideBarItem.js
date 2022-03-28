import React, { useState } from "react";
import "./SideBarItem.css";
import "./fonts.css";

const SideBarItem = ({ icon, labelText, selected, setSelected }) => {
  return (
    <div
      aria-label="sidebaritem-container"
      className={`sidebaritem-container ${
        selected === labelText ? "selected" : ""
      }`}
      onClick={() => setSelected(labelText)}
    >
      <span aria-label="sidebar-icon">{icon}</span>

      <label aria-label="sidebar-label" className="body-m bold">
        {labelText}
      </label>
    </div>
  );
};

export default SideBarItem;
