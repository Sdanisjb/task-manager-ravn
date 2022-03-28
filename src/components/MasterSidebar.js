import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import { RiFunctionLine, RiMenuLine } from "react-icons/ri";

const MasterSidebar = () => {
  const [selected, setSelected] = useState("");
  return (
    <nav>
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
