import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";

const MasterNavbar = ({ src }) => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <RiSearchLine aria-label="bell icon" />
      <form aria-label="searchbox">
        <input type="text" placeholder="Search" />
      </form>

      <button>
        <BiBell aria-label="magnifying icon" />
      </button>
      <img src={src} alt="profile picture" />
    </div>
  );
};

export default MasterNavbar;
