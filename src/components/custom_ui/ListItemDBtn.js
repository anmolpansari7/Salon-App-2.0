import React from "react";

const ListItemDBtn = ({
  id,
  content,
  content2,
  showBtn,
  imageSrc,
  className,
  buttonImgClass,
  onItemDelete,
}) => {
  return (
    <li
      className={
        " flex justify-between border-b border-dashed border-black " + className
      }
    >
      <div className=" flex justify-between flex-1">
        <p>{content}</p>
        <p>{content2}</p>
      </div>
      {showBtn && (
        <button
          onClick={() => {
            onItemDelete(id);
          }}
        >
          <img
            className={buttonImgClass + " self-center ml-5"}
            src={imageSrc}
            alt="delete"
          />
        </button>
      )}
    </li>
  );
};

export default ListItemDBtn;
