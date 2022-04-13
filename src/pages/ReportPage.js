import React, { useState, useMemo, useEffect } from "react";
import Card from "../components/container/Card";
import ReportFilters from "../components/report/ReportFilters";
import ReportTable from "./../components/report/ReportTable";
import SummaryBox from "./../components/container/SummaryBox";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "./../store/branch-actions";
import { getStaffList } from "./../store/staff-actions";
import { getReport } from "../store/report-actions";

const ReportPage = () => {
  const dispatch = useDispatch();
  const [branchFilter, setBranchFilter] = useState("");
  const [staffFilter, setStaffFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const report = useSelector((state) => state.report.report);

  const data = useMemo(
    () => [
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "200 Rs.",
        col6: "150 Rs.",
        col7: "10",
        col8: "10",
        col9: "Shailendra Sahu",
        col10: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "200 Rs.",
        col6: "150 Rs.",
        col7: "10",
        col8: "10",
        col9: "Shailendra Sahu",
        col10: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "200 Rs.",
        col6: "150 Rs.",
        col7: "10",
        col8: "10",
        col9: "Shailendra Sahu",
        col10: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "200 Rs.",
        col6: "150 Rs.",
        col7: "10",
        col8: "10",
        col9: "Shailendra Sahu",
        col10: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "200 Rs.",
        col6: "150 Rs.",
        col7: "10",
        col8: "10",
        col9: "Shailendra Sahu",
        col10: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "200 Rs.",
        col6: "150 Rs.",
        col7: "10",
        col8: "10",
        col9: "Shailendra Sahu",
        col10: "06-02-2022",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Customer's Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Branch",
        accessor: "col2",
      },
      {
        Header: "Bill Amt.",
        accessor: "col3",
      },
      {
        Header: "Discount",
        accessor: "col4",
      },
      {
        Header: "PromoCode",
        accessor: "col5",
      },
      {
        Header: "Paid Amt.",
        accessor: "col6",
      },
      {
        Header: "Pts. Used",
        accessor: "col7",
      },
      {
        Header: "Pts Given",
        accessor: "col8",
      },
      {
        Header: "Served By",
        accessor: "col9",
      },
      {
        Header: "Date",
        accessor: "col10",
      },
    ],
    []
  );

  const todaysSummary = [
    {
      content: "Order Delivered -",
      content2: "25",
    },
    {
      content: "Total Bill Amount -",
      content2: "7000 Rs.",
    },
    {
      content: "Amount Collected -",
      content2: "6500 Rs.",
    },
    {
      content: "Remaining Dues -",
      content2: "1000 Rs.",
    },
    {
      content: "Points Used -",
      content2: "80 Pts",
    },
    {
      content: "Points Given -",
      content2: "120 Pts",
    },
  ];

  const summary = [
    {
      content: "Order Delivered -",
      content2: "25",
    },
    {
      content: "Total Bill Amount -",
      content2: "7000 Rs.",
    },
    {
      content: "Amount Collected -",
      content2: "6500 Rs.",
    },
    {
      content: "Remaining Dues -",
      content2: "1000 Rs.",
    },
    {
      content: "Points Used -",
      content2: "80 Pts",
    },
    {
      content: "Points Given -",
      content2: "120 Pts",
    },
  ];

  useEffect(() => {
    dispatch(getStaffList("", "", "", ""));
    dispatch(getBranches());
    dispatch(
      getReport(
        branchFilter,
        staffFilter,
        startDateFilter,
        endDateFilter,
        nameFilter
      )
    );
  }, [
    dispatch,
    branchFilter,
    staffFilter,
    startDateFilter,
    endDateFilter,
    nameFilter,
  ]);

  return (
    <div className=" bg-app-bg flex-1 px-10 py-5 flex font-body">
      <div className="h-full w-10/12">
        <ReportFilters
          branchFilter={branchFilter}
          setBranchFilter={setBranchFilter}
          staffFilter={staffFilter}
          setStaffFilter={setStaffFilter}
          startDateFilter={startDateFilter}
          setStartDateFilter={setStartDateFilter}
          endDateFilter={endDateFilter}
          setEndDateFilter={setEndDateFilter}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
        />
        <Card className=" h-[36rem] overflow-auto">
          <ReportTable data={data} columns={columns} className={" w-full"} />
        </Card>
      </div>
      <div className="ml-3 w-[15rem] flex flex-col max-h-[40.5rem] justify-between ">
        <SummaryBox
          heading={"Today's Report"}
          data={todaysSummary}
          className={" flex-1"}
        />
        <SummaryBox heading={"Summary"} data={summary} className={" flex-1"} />
      </div>
    </div>
  );
};

export default ReportPage;
