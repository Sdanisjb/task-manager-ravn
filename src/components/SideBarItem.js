import React, { useState } from "react";
import { RiFunctionLine, RiMenuFill } from "react-icons/ri";

const SideBarItem = ({ icon, labelText }) => {
  return (
    <div role="sidebar-container">
      {icon === "dashboard" && (
        <RiFunctionLine role="icon" aria-label="sidebar-icon" />
      )}
      {icon === "tasks" && <RiMenuFill role="icon" aria-label="sidebar-icon" />}

      <label role="label" aria-label="sidebar-label">
        {labelText}
      </label>
    </div>
  );
};

export default SideBarItem;
