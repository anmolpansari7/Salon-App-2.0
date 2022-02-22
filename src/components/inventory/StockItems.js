import React, { useMemo } from "react";
import Card from "../container/Card";
import AddRemoveStockItems from "./AddRemoveStockItems";
import StockTable from "./StockTable";
import CardHeading from "./../custom_ui/CardHeading";

const StockItems = () => {
  const data = useMemo(
    () => [
      {
        col1: "Shaving Cream",
        col2: "250 Rs.",
        col3: "15",
        col4: <AddRemoveStockItems />,
        col5: "21-02-2022",
      },
      {
        col1: "Plastic Combs",
        col2: "50 Rs.",
        col3: 20,
        col4: <AddRemoveStockItems />,
        col5: "21-02-2022",
      },
      {
        col1: "Ear Cleaning Buds",
        col2: "250 Rs.",
        col3: 12,
        col4: <AddRemoveStockItems />,
        col5: "21-02-2022",
      },
      {
        col1: "Haircare kit",
        col2: "250 Rs.",
        col3: 12,
        col4: <AddRemoveStockItems />,
        col5: "21-02-2022",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Product Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Price",
        accessor: "col2",
      },
      {
        Header: "Quantity",
        accessor: "col3",
      },
      {
        Header: "Add/Remove",
        accessor: "col4",
      },
      {
        Header: "Last Sold on",
        accessor: "col5",
      },
    ],
    []
  );
  return (
    <Card className="w-7/12">
      <CardHeading className=" text-lg">Items in Stock -</CardHeading>
      <StockTable className={" w-full"} data={data} columns={columns} />
    </Card>
  );
};

export default StockItems;
