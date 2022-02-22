import React, { useMemo } from "react";
import Card from "../components/container/Card";
import ReportFilters from "../components/report/ReportFilters";
import ReportTable from "./../components/report/ReportTable";
import SummaryBox from "./../components/container/SummaryBox";

const ReportPage = () => {
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
        Header: "Age",
        accessor: "col2",
      },
      {
        Header: "Contact Number",
        accessor: "col3",
      },
      {
        Header: "Bill Amt.",
        accessor: "col4",
      },
      {
        Header: "Paid Amt",
        accessor: "col5",
      },
      {
        Header: "Due",
        accessor: "col6",
      },
      {
        Header: "Pts Used",
        accessor: "col7",
      },
      {
        Header: "Pts Earned",
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

  return (
    <div className=" bg-app-bg flex-1 px-10 py-5 flex font-body">
      <div className="h-full w-10/12">
        <ReportFilters />
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
