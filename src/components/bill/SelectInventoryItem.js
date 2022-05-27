import React from "react";
import { Select } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import ShowSelectedInventoryItem from "./ShowSelectedInventoryItem";
import crossIcon from "./../../assets/cross_icon.svg";

const SelectInventoryItem = ({
  listItems,
  placeholder,
  selectedItems,
  setSelectedItems,
  // updateCartValue,
  setPromo,
  setDiscountFromPromoCode,
  onQuantityChange,
}) => {
  const onItemSelection = (e) => {
    const selectedItemId = e.target.value;
    if (selectedItemId === "") return;
    let selectedItemIndex = selectedItems.findIndex(
      (item) => item._id === selectedItemId
    );
    if (selectedItemIndex !== -1) {
      let items = selectedItems;
      items[selectedItemIndex].quantity++;
      setSelectedItems(items);
      // updateCartValue();
    } else {
      let selectedItem = listItems.find((item) => item._id === selectedItemId);
      selectedItem = {
        ...selectedItem,
        idx: uuidv4(),
        quantity: 1,
      };
      setSelectedItems([...selectedItems, selectedItem]);
      // updateCartValue();
    }

    setPromo("");
    setDiscountFromPromoCode("");
    e.target.value = "";
  };

  // const onAddItem = (id) => {
  //   let selectedItemId = id;
  //   let selectedItemIndex = selectedItems.findIndex(
  //     (item) => item._id === selectedItemId
  //   );

  //   if (
  //     selectedItemIndex !== -1 &&
  //     selectedItems[selectedItemIndex].maxQuantity >=
  //       selectedItems[selectedItemIndex].quantity + 1
  //   ) {
  //     let items = selectedItems;
  //     items[selectedItemIndex].quantity++;
  //     setSelectedItems(items);
  //     setCartValue((state) => state + items[selectedItemIndex].cost);
  //   }
  // };

  // const onRemoveItem = (id) => {
  //   let selectedItemId = id;
  //   let selectedItemIndex = selectedItems.findIndex(
  //     (item) => item._id === selectedItemId
  //   );

  //   if (selectedItemIndex !== -1) {
  //     let items = selectedItems;
  //     items[selectedItemIndex].quantity--;
  //     if (items[selectedItemIndex].quantity <= 0) {
  //       let currList = selectedItems.filter((item) => item._id !== id);
  //       setSelectedItems(currList);
  //     } else {
  //       setSelectedItems(items);
  //     }
  //     setCartValue((state) => state - items[selectedItemIndex].cost);
  //   }
  // };

  const onItemDelete = (idx) => {
    console.log("idx", idx);
    let currList = selectedItems.filter((item) => item.idx !== idx);
    console.log("item delete", selectedItems);
    setSelectedItems(currList);
    // updateCartValue();
    setPromo("");
    setDiscountFromPromoCode("");
  };

  return (
    <div>
      <Select
        placeholder={placeholder}
        fontSize={"0.875rem"}
        size={"sm"}
        alignSelf={"center"}
        onChange={onItemSelection}
      >
        {listItems.map(
          (item) =>
            item.maxQuantity > 0 && (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            )
        )}
      </Select>
      <div className=" h-40 overflow-auto flex flex-col space-y-2 mt-3 bg-slate-200 rounded-md p-5">
        {selectedItems.length === 0 ? (
          <p className=" text-center text-sm m-auto text-gray-400">
            No Item Selected.
          </p>
        ) : (
          selectedItems.map((item) => (
            <ShowSelectedInventoryItem
              key={item._id}
              id={item._id}
              item={item}
              showBtn={true}
              imageSrc={crossIcon}
              className={"text-sm"}
              onItemDelete={onItemDelete}
              onQuantityChange={onQuantityChange}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SelectInventoryItem;
