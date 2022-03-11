import React, { useEffect, useMemo, useState } from "react";
import { Input } from "@chakra-ui/react";
import Card from "../container/Card";
import RadioButton from "../custom_ui/RadioButton";
import PreviousPackageTable from "./PreviousPackageTable";
import infoIcon from "./../../assets/info_icon.svg";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPreviousPackageData } from "../../store/package-actions";

const PreviousPackagesBox = ({
  statusFilter,
  startDateFilter,
  endDateFilter,
  setStatusFilter,
  setStartDateFilter,
  setEndDateFilter,
}) => {
  const dispatch = useDispatch();

  const previousPackages = useSelector(
    (state) => state.packages.previousPackages
  );

  const [name, setName] = useState("");

  const data = previousPackages.map((pack) => {
    let services = "";
    pack.services.forEach((service) => {
      services += service + ", ";
    });

    return {
      col1: `${pack.name}`,
      col2: `${pack.packageAmount} Rs.`,
      col3: `${pack.customers.length}`,
      col4: `${moment(pack.validFrom).format("ll")}`,
      col5: `${moment(pack.validTill).format("ll")}`,
      col6: (
        <img
          src={infoIcon}
          alt="info"
          className=" cursor-pointer"
          title={services}
        />
      ),
    };
  });

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
        Header: "Valid From",
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

  // UseSearchPackage(query);
  useEffect(() => {
    dispatch(
      getPreviousPackageData(statusFilter, startDateFilter, endDateFilter, name)
    );
  }, [dispatch, statusFilter, startDateFilter, endDateFilter, name]);

  return (
    <Card className="w-6/12">
      <h1 className=" text-lg border-b border-dashed border-black mb-5">
        Previous Packages
      </h1>
      <div className="flex justify-between">
        <Input
          type="text"
          width={"10rem"}
          size={"sm"}
          placeholder={"search"}
          onChange={(e) => {
            setName(e.target.value);
            setStatusFilter("");
            setEndDateFilter("");
            setStartDateFilter("");
          }}
        />
        <Input
          type="date"
          width={"9.5rem"}
          size={"sm"}
          value={startDateFilter}
          onChange={(e) => {
            setStartDateFilter(e.target.value);
          }}
        />
        <span className=" self-center text-sm">btw</span>
        <Input
          type="date"
          width={"9.5rem"}
          size={"sm"}
          value={endDateFilter}
          onChange={(e) => {
            setEndDateFilter(e.target.value);
          }}
        />
        <RadioButton
          name="pack-status"
          id="active-packs"
          val="active"
          label="Active"
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
        />
        <RadioButton
          name="pack-status"
          id="expired-packs"
          val="expired"
          label="Expired"
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
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
