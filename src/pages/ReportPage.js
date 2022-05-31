import React, { useState, useMemo, useEffect } from "react";
import Card from "../components/container/Card";
import ReportFilters from "../components/report/ReportFilters";
import ReportTable from "./../components/report/ReportTable";
import SummaryBox from "./../components/container/SummaryBox";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "./../store/branch-actions";
import { getStaffList } from "./../store/staff-actions";
import {
  getReport,
  getReportSummary,
  getTodaysReportSummary,
} from "../store/report-actions";
import moment from "moment";

const ReportPage = () => {
  const dispatch = useDispatch();
  const branch = localStorage.getItem("branchId") || "";
  const [branchFilter, setBranchFilter] = useState(branch);
  const [staffFilter, setStaffFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const report = useSelector((state) => state.report.report);
  console.log("branchFilter", branchFilter);
  const todaysReportSummary = useSelector(
    (state) => state.report.todaysReportSummary
  );
  const reportSummary = useSelector((state) => state.report.reportSummary);

  const data = useMemo(
    () =>
      report.map((order) => {
        return {
          col1: `${order.customerName}`,
          col2: `${order.branchName}`,
          col3: `${order.totalAmount} Rs.`,
          col4: `${order.discountGiven} Rs.`,
          col5: `${order.promoCode === "" ? "----" : order.promoCode}`,
          col6: `${order.paidAmount} Rs.`,
          col7: `${order.pointsUsed} Rs.`,
          col8: `${order.pointsEarned} Rs.`,
          col9: `${order.staffName}`,
          col10: `${moment(order.createdAt).format("ll")}`,
        };
      }),
    [report]
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

  const todaysData = [
    {
      content: "Order Delivered -",
      content2: `${todaysReportSummary.totalCustomers}`,
    },
    {
      content: "Total Bill Amount -",
      content2: `${todaysReportSummary.totalAmount} Rs.`,
    },
    {
      content: "Amount Collected -",
      content2: `${todaysReportSummary.paidAmount} Rs.`,
    },
    {
      content: "Remaining Dues -",
      content2: `${
        todaysReportSummary.totalAmount - todaysReportSummary.paidAmount
      } Rs.`,
    },
    {
      content: "Points Used -",
      content2: `${todaysReportSummary.pointsUsed} Pts.`,
    },
    {
      content: "Points Given -",
      content2: `${todaysReportSummary.pointsEarned} Pts.`,
    },
  ];

  const summaryData = [
    {
      content: "Order Delivered -",
      content2: `${reportSummary.totalCustomers}`,
    },
    {
      content: "Total Bill Amount -",
      content2: `${reportSummary.totalAmount} Rs.`,
    },
    {
      content: "Amount Collected -",
      content2: `${reportSummary.paidAmount} Rs.`,
    },
    {
      content: "Remaining Dues -",
      content2: `${reportSummary.totalAmount - reportSummary.paidAmount} Rs.`,
    },
    {
      content: "Points Used -",
      content2: `${reportSummary.pointsUsed} Pts.`,
    },
    {
      content: "Points Given -",
      content2: `${reportSummary.pointsEarned} Pts.`,
    },
  ];

  useEffect(() => {
    dispatch(
      getReport(
        branchFilter,
        staffFilter,
        startDateFilter,
        endDateFilter,
        nameFilter
      )
    );
    dispatch(
      getReportSummary(
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

  useEffect(() => {
    dispatch(getTodaysReportSummary());
    dispatch(getStaffList("", "", "", ""));
    dispatch(getBranches());
  }, [dispatch]);

  return (
    <div className=" bg-app-bg flex-1 py-5 flex font-body">
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
          className={" flex-1"}
          data={todaysData}
        />
        <SummaryBox
          heading={"Summary"}
          className={" flex-1"}
          data={summaryData}
        />
      </div>
    </div>
  );
};

export default ReportPage;
