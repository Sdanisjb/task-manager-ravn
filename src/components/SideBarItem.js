import React from "react";
import { RiFunctionLine, RiMenuFill } from "react-icons/ri";

const SideBarItem = ({ icon, labelText }) => {
  return (
    <div aria-label="sidebar-container">
      {icon === "dashboard" && <RiFunctionLine aria-label="sidebar-icon" />}
      {icon === "tasks" && <RiMenuFill aria-label="sidebar-icon" />}

      <label aria-label="sidebar-label">{labelText}</label>
    </div>
  );
};

export default SideBarItem;
