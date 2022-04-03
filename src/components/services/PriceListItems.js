import React from "react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";
import { deleteServiceData } from "../../store/services-actions";
import { useDispatch, useSelector } from "react-redux";

const PriceListItems = ({ services, gender, category }) => {
  const dispatch = useDispatch();
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

  const onItemDelete = (id) => {
    dispatch(deleteServiceData(id));
  };

  return (
    <ul className=" flex flex-col flex-1 space-y-4 overflow-auto">
      {services.map(
        (service) =>
          service.gender === gender &&
          service.category === category &&
          service.status === "active" && (
            <ListItemDBtn
              key={service._id}
              id={service._id}
              content={service.name}
              content2={service.cost + " Rs."}
              className="text-base"
              imageSrc={deleteBtn}
              showBtn={isAuthOwner}
              buttonImgClass={"h-4"}
              onItemDelete={onItemDelete}
            />
          )
      )}
    </ul>
  );
};

export default PriceListItems;
