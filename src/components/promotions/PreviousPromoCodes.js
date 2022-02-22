import React, { useMemo } from "react";
import Card from "../container/Card";
import RadioButton from "../custom_ui/RadioButton";
import { Input } from "@chakra-ui/react";
import PreviousPromoTable from "./PreviousPromoTable";
import infoIcon from "./../../assets/info_icon.svg";

const PreviousPromoCodes = () => {
  const data = useMemo(
    () => [
      {
        col1: "BVJKDL",
        col2: "active",
        col3: "03-03-2022",
        col4: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "BVJKDL",
        col2: "active",
        col3: "03-03-2022",
        col4: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "BVJKDL",
        col2: "active",
        col3: "03-03-2022",
        col4: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "BVJKDL",
        col2: "active",
        col3: "03-03-2022",
        col4: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "BVJKDL",
        col2: "active",
        col3: "03-03-2022",
        col4: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "BVJKDL",
        col2: "active",
        col3: "03-03-2022",
        col4: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "BVJKDL",
        col2: "active",
        col3: "03-03-2022",
        col4: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Promocode",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Status",
        accessor: "col2",
      },
      {
        Header: "Valid till",
        accessor: "col3",
      },
      {
        Header: "",
        accessor: "col4",
      },
    ],
    []
  );
  return (
    <Card className="w-full flex-col space-y-4">
      <h1 className=" text-base border-b border-dashed border-black mb-2">
        Previous Promocodes.
      </h1>
      <div className=" flex justify-between">
        <RadioButton
          name="promocode-status"
          id="promo-active"
          val="active"
          label="Active"
        />
        <RadioButton
          name="promocode-status"
          id="promo-disabled"
          val="disabled"
          label="Disabled"
        />
        <RadioButton
          name="promocode-status"
          id="promo-expired"
          val="expired"
          label="Expired"
        />
        <button className=" border border-black px-3 rounded-md">clear</button>
      </div>
      <div className="flex justify-between">
        <p className=" text-sm self-center">Created Btw</p>
        <Input type="date" placeholder="" size="sm" width={"9.5rem"} />
        <Input type="date" placeholder="" size="sm" width={"9.5rem"} />
      </div>
      <div className=" h-[29rem] overflow-auto">
        <PreviousPromoTable
          data={data}
          columns={columns}
          className={"w-full"}
        />
      </div>
    </Card>
  );
};

export default PreviousPromoCodes;
