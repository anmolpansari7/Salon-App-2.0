import React, { useMemo } from "react";
import { Input } from "@chakra-ui/react";
import Card from "../container/Card";
import RadioButton from "../custom_ui/RadioButton";
import PreviousPackageTable from "./PreviousPackageTable";
import infoIcon from "./../../assets/info_icon.svg";

const PreviousPackagesBox = () => {
  const data = useMemo(
    () => [
      {
        col1: "Package-1",
        col2: "1500 Rs.",
        col3: 10,
        col4: "06-02-2022",
        col5: "06-02-2022",
        col6: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "KGF-King",
        col2: "2000 Rs.",
        col3: 7,
        col4: "06-02-2022",
        col5: "06-02-2022",
        col6: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "Big Boss",
        col2: "2500 Rs.",
        col3: 5,
        col4: "06-02-2022",
        col5: "06-02-2022",
        col6: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "Dhamaka",
        col2: "1350 Rs.",
        col3: 15,
        col4: "06-02-2022",
        col5: "06-02-2022",
        col6: (
          <img
            src={infoIcon}
            alt="info"
            className=" cursor-pointer"
            title="Arunesh Chopra, Girish Reddy"
          />
        ),
      },
      {
        col1: "Apple Mango",
        col2: "1240 Rs.",
        col3: 20,
        col4: "06-02-2022",
        col5: "06-02-2022",
        col6: (
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
        Header: "Package Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Amount",
        accessor: "col2",
      },
      {
        Header: "Customers",
        accessor: "col3",
      },
      {
        Header: "Created At",
        accessor: "col4",
      },
      {
        Header: "Valid Till",
        accessor: "col5",
      },
      {
        Header: "",
        accessor: "col6",
      },
    ],
    []
  );

  return (
    <Card className="w-6/12">
      <h1 className=" text-lg border-b border-dashed border-black mb-5">
        Previous Packages
      </h1>
      <div className="flex justify-between">
        <Input type="text" width={"10rem"} size={"sm"} placeholder={"search"} />
        <Input type="date" width={"9.5rem"} size={"sm"} />
        <span className=" self-center text-sm">btw</span>
        <Input type="date" width={"9.5rem"} size={"sm"} />
        <RadioButton
          name="pack-status"
          id="active-packs"
          val="active"
          label="Active"
        />
        <RadioButton
          name="pack-status"
          id="expired-packs"
          val="expired"
          label="Expired"
        />
      </div>
      <div className=" h-[32rem] overflow-auto">
        <PreviousPackageTable
          className={"w-full mt-5 overflow-auto"}
          data={data}
          columns={columns}
        />
      </div>
    </Card>
  );
};

export default PreviousPackagesBox;
