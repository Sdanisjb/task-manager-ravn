import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import { RiFunctionLine, RiMenuLine } from "react-icons/ri";
import "./MasterSidebar.css";
import RavnLogo from "../assets/ravn-logo.svg";

const MasterSidebar = () => {
  const [selected, setSelected] = useState("");
  return (
    <nav className="sidebar">
      <img src={RavnLogo} alt="ravn-logo" className="logo" />
      <SideBarItem
        icon={<RiFunctionLine />}
        labelText="dashboard"
        selected={selected}
        setSelected={setSelected}
      />
      <SideBarItem
        icon={<RiMenuLine />}
        labelText="my tasks"
        selected={selected}
        setSelected={setSelected}
      />
    </nav>
  );
};

export default MasterSidebar;
