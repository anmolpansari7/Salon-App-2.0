import React from "react";

const ShowSelectedInventoryItem = ({
  id,
  item,
  showBtn,
  imageSrc,
  className,
  buttonImgClass,
  onItemDelete,
  onQuantityChange,
}) => {
  return (
    <li
      className={
        " flex justify-between border-b border-dashed border-black " + className
      }
    >
      <div className=" flex justify-between flex-1">
        <p>{item.name}</p>
        <p>
          <input
            type="number"
            min="1"
            className=" mr-2 bg-white px-2 rounded-sm w-16"
            value={item.quantity}
            onChange={(e) => onQuantityChange(id, e.target.value)}
          />
          {/* <button
            type="button"
            className=" mr-2 bg-white px-2 rounded-sm"
            onClick={() => onAddItem(id)}
          >
            +
          </button>
          {content2}
          <button
            type="button"
            className=" ml-2 bg-white px-2 rounded-sm"
            onClick={() => onRemoveItem(id)}
          >
            -
          </button> */}
        </p>
      </div>
      {showBtn && (
        <button
          onClick={() => {
            onItemDelete(item.idx);
          }}
          type="button"
        >
          <img
            className={buttonImgClass + " self-center ml-2"}
            src={imageSrc}
            alt="delete"
          />
        </button>
      )}
    </li>
  );
};

export default ShowSelectedInventoryItem;
