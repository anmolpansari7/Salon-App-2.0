import React, { useMemo } from "react";
import CustomersTable from "./../components/customers/CustomersTable";
import Card from "../components/container/Card";
import CustomerFilters from "../components/customers/CustomerFilters";
import BirthdayList from "../components/customers/BirthdayList";
import SummaryBox from "../components/container/SummaryBox";
import PageContainer from "../components/container/PageContainer";

const CustomersPage = () => {
  const data = useMemo(
    () => [
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "+91 2365214578",
        col5: "200 Rs.",
        col6: 10,
        col7: "Shanti Nagar, Ward no. 11, Rjn",
        col8: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "+91 2365214578",
        col5: "200 Rs.",
        col6: 10,
        col7: "Shanti Nagar, Ward no. 11, Rjn",
        col8: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "+91 2365214578",
        col5: "200 Rs.",
        col6: 10,
        col7: "Shanti Nagar, Ward no. 11, Rjn",
        col8: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "+91 2365214578",
        col5: "200 Rs.",
        col6: 10,
        col7: "Shanti Nagar, Ward no. 11, Rjn",
        col8: "06-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "+91 2365214578",
        col5: "200 Rs.",
        col6: 10,
        col7: "Shanti Nagar, Ward no. 11, Rjn",
        col8: "06-02-2022",
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
        Header: "Gender",
        accessor: "col2",
      },
      {
        Header: "Age",
        accessor: "col3",
      },
      {
        Header: "Contact Number",
        accessor: "col4",
      },
      {
        Header: "Dues",
        accessor: "col5",
      },
      {
        Header: "Points",
        accessor: "col6",
      },
      {
        Header: "Address",
        accessor: "col7",
      },
      {
        Header: "Last Visit",
        accessor: "col8",
      },
    ],
    []
  );

  const summary = [
    {
      content: "Female Customers :",
      content2: "121",
    },
    {
      content: "Male Customers :",
      content2: "121",
    },
    {
      content: "Total Customers",
      content2: "242",
    },
  ];

  return (
    <PageContainer>
      <div className="h-full w-10/12">
        <CustomerFilters />
        <Card className=" h-[36rem] overflow-auto">
          <CustomersTable className="w-full" data={data} columns={columns} />
        </Card>
      </div>
      <div className="ml-3 w-[15rem] flex flex-col max-h-[40.5rem]">
        <BirthdayList />
        <SummaryBox heading={"Summary"} data={summary} className={""} />
      </div>
    </PageContainer>
  );
};

export default CustomersPage;
