import React from "react";

const NavTab = ({ title, isactive }) => {
  const Bgcolor = isactive
    ? "bg-nav-active-tab-bg text-white font-medium"
    : "bg-nav-inactive-tab-bg";

  return (
    <div
      className={
        Bgcolor +
        " h-10 w-[90px] flex self-center rounded-lg border-2 border-nav-bar-search shadow-sm hover:border-2 hover:border-nav-active-tab-bg"
      }
    >
      <p className="w-full self-center text-center">{title}</p>
    </div>
  );
};

export default NavTab;
