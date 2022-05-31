import React, { useEffect, useMemo, useState } from "react";
import { Input, useToast, Tooltip } from "@chakra-ui/react";
import Card from "../container/Card";
import PreviousPackageTable from "./PreviousPackageTable";
import infoIcon from "./../../assets/info_icon.svg";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePackage,
  getPreviousPackageData,
} from "../../store/package-actions";

const DetailBox = ({ services }) => {
  return (
    <Tooltip label={services} fontSize="md">
      <img src={infoIcon} alt="info" className=" cursor-pointer" />
    </Tooltip>
  );
};

const PreviousPackagesBox = ({
  startDateFilter,
  endDateFilter,
  setStartDateFilter,
  setEndDateFilter,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const previousPackages = useSelector(
    (state) => state.packages.previousPackages
  );

  const [name, setName] = useState("");

  const onDeletePacakge = (packageId) => {
    dispatch(deletePackage(packageId, toast));
  };

  const data = previousPackages.map((pack) => {
    let services = "";
    pack.services.forEach((service) => {
      services += service + ", ";
    });
    return {
      col1: `${pack.name}`,
      col2:
        pack.status !== "active" ? (
          <span className=" text-red-500 px-2 py-[0.10rem] rounded-md border border-red-500">
            {pack.status}
          </span>
        ) : (
          <button
            className=" border border-blue-400 rounded-md px-2"
            onClick={() => {
              onDeletePacakge(pack._id);
            }}
            title={"delete package"}
          >
            delete
          </button>
        ),
      col3: `${pack.packageAmount} Rs.`,
      col4: `${pack.maxUsage}`,
      col5: `${moment(pack.createdAt).format("ll")}`,
      col6: `${pack.validFor}`,
      col7: <DetailBox services={services} />,
    };
  });

  const columns = useMemo(
    () => [
      {
        Header: "Package Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "",
        accessor: "col2", // accessor is the "key" in the data
      },
      {
        Header: "Amount",
        accessor: "col3",
      },
      {
        Header: "Max-Usage",
        accessor: "col4",
      },
      {
        Header: "Created At",
        accessor: "col5",
      },
      {
        Header: "Valid For",
        accessor: "col6",
      },
      {
        Header: "",
        accessor: "col7",
      },
    ],
    []
  );

  const clearFilters = () => {
    setStartDateFilter("");
    setEndDateFilter("");
  };

  // UseSearchPackage(query);
  useEffect(() => {
    dispatch(getPreviousPackageData(startDateFilter, endDateFilter, name));
  }, [dispatch, startDateFilter, endDateFilter, name]);

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
            clearFilters();
          }}
        />
        <span className=" self-center text-sm ml-3 text-center">
          created btw
        </span>
        <Input
          type="date"
          width={"9.5rem"}
          size={"sm"}
          value={startDateFilter}
          onChange={(e) => {
            setStartDateFilter(e.target.value);
          }}
        />
        <span className=" self-center text-sm"> - </span>
        <Input
          type="date"
          width={"9.5rem"}
          size={"sm"}
          value={endDateFilter}
          onChange={(e) => {
            setEndDateFilter(e.target.value);
          }}
        />
        <button onClick={clearFilters}>clear</button>
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
