import React, { useState } from "react";
import { useSelector } from "react-redux";
import searchIcon from "./../../assets/searchIcon.svg";
import useShowSuggestions from "./useShowSuggestions";
import Suggestions from "./Suggestions";
import CustomeLink from "./CustomLink";

const NavSearchBar = () => {
  const suggestions = useSelector((state) => state.customers.suggestions);

  const [query, setQuery] = useState("");

  const onCustomerSearch = (e) => {
    setQuery(e.target.value);
  };

  useShowSuggestions(query);

  return (
    <div className="self-center flex flex-col">
      <div className=" w-56 h-10 flex justify-between rounded-lg bg-nav-bar-search self-center pr-4">
        <input
          type="text"
          name="nav-search"
          id="nav-search"
          placeholder="Search"
          className="w-44 bg-transparent focus:outline-none px-4"
          value={query}
          onChange={onCustomerSearch}
          autoComplete={"false"}
        />
        <img src={searchIcon} className="h-4 self-center" alt="Search Icon" />
      </div>
      <div className="absolute top-14 left-10 w-56 max-h-60 overflow-auto">
        {suggestions.map((customer) => (
          <CustomeLink
            key={customer._id}
            to={"/customer/" + customer._id}
            onClick={() => {
              setQuery("");
            }}
          >
            <Suggestions customer={customer} key={customer._id} />
          </CustomeLink>
        ))}
      </div>
    </div>
  );
};

export default NavSearchBar;
