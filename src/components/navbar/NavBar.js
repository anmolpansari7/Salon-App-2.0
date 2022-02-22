import React from "react";
import CustomLink from "./CustomLink";

import NavSearchBar from "./NavSearchBar";
import NavTab from "./NavTab";
import NavButton from "./NavButton";
import LogoutImage from "./../../assets/Logout.svg";
import SettingsImage from "./../../assets/settings.svg";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const NavBar = ({
  onShowAddCustomerModal,
  onShowChangePasswordModal,
  onShowBranchEditModal,
}) => {
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
      <CustomLink to="/expense">
        <NavTab title={"Expense"} />
      </CustomLink>
      <Menu>
        <MenuButton>
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
          <MenuItem onClick={onShowBranchEditModal}>Branch Edit</MenuItem>
        </MenuList>
      </Menu>
      <NavButton
        imageSource={LogoutImage}
        imageAlt={"Logout"}
        title={"Logout"}
      />
    </div>
  );
};

export default NavBar;
