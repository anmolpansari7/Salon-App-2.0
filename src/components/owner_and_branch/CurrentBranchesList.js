import React, { useEffect } from "react";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteBranch, getBranches } from "../../store/branch-actions";

const CurrentBranchesList = () => {
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branch.branchList);

  useEffect(() => {
    dispatch(getBranches());
  }, [dispatch]);

  return (
    <ul className=" flex flex-col space-y-3 max-h-44 overflow-auto last: mb-7">
      {branches.map(
        (branch) =>
          branch.status === "active" && (
            <ListItemDBtn
              content={branch.name}
              imageSrc={deleteBtn}
              showBtn={true}
              buttonImgClass={"h-4"}
              onItemDelete={() => {
                dispatch(deleteBranch(branch._id));
              }}
            />
          )
      )}
    </ul>
  );
};

export default CurrentBranchesList;
