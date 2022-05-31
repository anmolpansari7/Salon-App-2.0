import React from "react";

const NavButton = ({ imageSource, imageAlt, title, onClick }) => {
  return (
    <div
      role="button"
      className="h-10 w-14 flex self-center rounded-lg bg-nav-inactive-tab-bg
  border-2 border-nav-bar-search shadow-sm hover:border-3 hover:border-nav-active-tab-bg"
      title={title}
      onClick={onClick}
    >
      {imageSource ? (
        <img
          src={imageSource}
          alt={imageAlt}
          className="h-5 w-full self-center text-center"
        />
      ) : (
        <p className="w-full text-xl self-center text-center">+</p>
      )}
    </div>
  );
};

export default NavButton;
