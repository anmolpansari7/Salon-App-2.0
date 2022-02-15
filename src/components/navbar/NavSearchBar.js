import React from "react";
import searchIcon from "./../../assets/searchIcon.svg";

const NavSearchBar = () => {
  return (
    <div className=" w-56 h-10 flex justify-between rounded-lg bg-nav-bar-search self-center pr-4">
      <input
        type="text"
        name="nav-search"
        id="nav-search"
        placeholder="Search"
        className="w-44 bg-transparent focus:outline-none px-4"
      />
      <img src={searchIcon} className="h-4 self-center" alt="Search Icon" />
    </div>
  );
};

export default NavSearchBar;
