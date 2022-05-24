import React from "react";
import CustomLink from "./CustomLink";
import { useDispatch, useSelector } from "react-redux";

import NavSearchBar from "./NavSearchBar";
import NavTab from "./NavTab";
import NavButton from "./NavButton";
import LogoutImage from "./../../assets/Logout.svg";
import SettingsImage from "./../../assets/settings.svg";
import { authSliceAction } from "../../store/auth-slice";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const NavBar = ({
  onShowAddCustomerModal,
  onShowChangePasswordModal,
  onShowBranchEditModal,
  onShowPointCalculatorModal,
}) => {
  const dispatch = useDispatch();
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

  const onLogout = () => {
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("branchToken");
    localStorage.removeItem("branchId");

    dispatch(authSliceAction.setIsAuthOwnerFalse());
    dispatch(authSliceAction.setIsAuthBranchFalse());
  };

  return (
    <div className=" h-16 min-h-[4rem] bg-nav-bar-bg flex px-10 font-tabs text-sm justify-between">
      <NavSearchBar />
      <NavButton title={"Add Customer"} onClick={onShowAddCustomerModal} />
      <CustomLink to="/price">
        <NavTab title={"Price"} />
      </CustomLink>
      <CustomLink to="/customers">
        <NavTab title={"Customers"} />
      </CustomLink>
      <CustomLink to="/report">
        <NavTab title={"Report"} />
      </CustomLink>
      <CustomLink to="/staff">
        <NavTab title={"Staff"} />
      </CustomLink>
      <CustomLink to="/package">
        <NavTab title={"Package"} />
      </CustomLink>
      <CustomLink to="/promotion">
        <NavTab title={"Promotion"} />
      </CustomLink>
      <CustomLink to="/inventory">
        <NavTab title={"Inventory"} />
      </CustomLink>
      <CustomLink to="/message">
        <NavTab title={"Message"} />
      </CustomLink>
      {isAuthOwner && (
        <CustomLink to="/expense">
          <NavTab title={"Expense"} />
        </CustomLink>
      )}
      <Menu>
        <MenuButton
          disabled={!isAuthOwner}
          cursor={!isAuthOwner ? "not-allowed" : "pointer"}
        >
          <NavButton
            imageSource={SettingsImage}
            imageAlt={"Change Password"}
            title={"Change Password"}
          />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onShowChangePasswordModal}>
            Change Password
          </MenuItem>
          <MenuItem onClick={onShowBranchEditModal}>Branch Management</MenuItem>
          <MenuItem onClick={onShowPointCalculatorModal}>
            Points System
          </MenuItem>
        </MenuList>
      </Menu>
      <NavButton
        imageSource={LogoutImage}
        imageAlt={"Logout"}
        title={"Logout"}
        onClick={onLogout}
      />
    </div>
  );
};

export default NavBar;
