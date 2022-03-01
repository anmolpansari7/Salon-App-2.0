import React, { useMemo } from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import PreviousOrderTable from "./PreviousOrderTable";

const PreviousVisits = () => {
  const data = useMemo(
    () => [
      {
        col1: "Regular Haircut",
        col2: "350 Rs.",
        col3: "200 Rs.",
        col4: "150 Rs.",
        col5: "20",
        col6: "150 Rs.",
        col7: "10",
        col8: "Rupesh Sahu",
        col9: "06-02-2022",
      },
      {
        col1: "Regular Haircut",
        col2: "350 Rs.",
        col3: "200 Rs.",
        col4: "150 Rs.",
        col5: "20",
        col6: "150 Rs.",
        col7: "10",
        col8: "Rupesh Sahu",
        col9: "06-02-2022",
      },
      {
        col1: "Regular Haircut",
        col2: "350 Rs.",
        col3: "200 Rs.",
        col4: "150 Rs.",
        col5: "20",
        col6: "150 Rs.",
        col7: "10",
        col8: "Rupesh Sahu",
        col9: "06-02-2022",
      },
      {
        col1: "Regular Haircut",
        col2: "350 Rs.",
        col3: "200 Rs.",
        col4: "150 Rs.",
        col5: "20",
        col6: "150 Rs.",
        col7: "10",
        col8: "Rupesh Sahu",
        col9: "06-02-2022",
      },
      {
        col1: "Regular Haircut",
        col2: "350 Rs.",
        col3: "200 Rs.",
        col4: "150 Rs.",
        col5: "20",
        col6: "150 Rs.",
        col7: "10",
        col8: "Rupesh Sahu",
        col9: "06-02-2022",
      },
      {
        col1: "Regular Haircut",
        col2: "350 Rs.",
        col3: "200 Rs.",
        col4: "150 Rs.",
        col5: "20",
        col6: "150 Rs.",
        col7: "10",
        col8: "Rupesh Sahu",
        col9: "06-02-2022",
      },
      {
        col1: "Regular Haircut",
        col2: "350 Rs.",
        col3: "200 Rs.",
        col4: "150 Rs.",
        col5: "20",
        col6: "150 Rs.",
        col7: "10",
        col8: "Rupesh Sahu",
        col9: "06-02-2022",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Services",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Bill Amt.",
        accessor: "col2",
      },
      {
        Header: "Paid Amt.",
        accessor: "col3",
      },
      {
        Header: "Dues",
        accessor: "col4",
      },
      {
        Header: "Pts. Used",
        accessor: "col5",
      },
      {
        Header: "Discount Given",
        accessor: "col6",
      },
      {
        Header: "Pts Earned",
        accessor: "col7",
      },
      {
        Header: "Served By",
        accessor: "col8",
      },
      {
        Header: "Date",
        accessor: "col9",
      },
    ],
    []
  );

  return (
    <Card className="flex-1 mt-3 max-h-[36.5rem] overflow-auto">
      <CardHeading>Previous Visits</CardHeading>
      <PreviousOrderTable data={data} columns={columns} className={"w-full"} />
    </Card>
  );
};

export default PreviousVisits;
