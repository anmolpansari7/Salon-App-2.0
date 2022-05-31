import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import PreviousOrderTable from "./PreviousOrderTable";
import moment from "moment";
import { Tooltip } from "@chakra-ui/react";

const DetailBox = ({ services }) => {
  return (
    <Tooltip label={services} fontSize="md">
      <p className=" max-w-[6rem] truncate">{services}</p>
    </Tooltip>
  );
};

const PreviousVisits = () => {
  const orders = useSelector(
    (state) => state.currentCustomer.currentCustomerOrders
  );

  const data = useMemo(
    () =>
      orders.map((order) => {
        let services = "";
        if (order.type === "order") {
          order.serviceName.forEach((service) => {
            services += service;
            services += ", ";
          });

          order.inventoryItemName.forEach((item) => {
            services += item;
            services += ", ";
          });
        } else if (order.type === "package-assign") {
          services = `Package Assign - ${order.packageName}`;
        } else if (order.type === "package-usage") {
          services = `Package Usage - ${order.packageName}`;
        } else if (order.type === "clear-due") {
          services = `Due Clearance`;
        }

        return {
          col1: <DetailBox services={services} />,
          col2: `${order.totalAmount} Rs.`,
          col3: `${order.paidAmount} Rs.`,
          col4: `${order.totalAmount - order.paidAmount} Rs.`,
          col5: `${order.pointsUsed} Pts.`,
          col6: `${order.discountGiven} Rs.`,
          col7: `${order.pointsEarned} Pts.`,
          col8: `${order.promoCode === "" ? "---" : order.promoCode}`,
          col9: `${order.servedBy}`,
          col10: moment(order.createdAt).format("ll"),
        };
      }),
    [orders]
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
        Header: "Promo Used",
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

  return (
    <Card className="flex-1 mt-3 max-h-[36.5rem] overflow-auto">
      <CardHeading>Previous Visits</CardHeading>
      <PreviousOrderTable data={data} columns={columns} className={"w-full"} />
    </Card>
  );
};

export default PreviousVisits;
