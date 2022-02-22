import React, { useMemo } from "react";
import Card from "../components/container/Card";
import PageContainer from "../components/container/PageContainer";
import CustomerFilters from "../components/customers/CustomerFilters";
import MessageCustomerTable from "../components/message/MessageCustomerTable";
import MessagePreview from "../components/message/MessagePreview";
import PreviousMessages from "../components/message/PreviousMessages";

const MessagePage = () => {
  const data = useMemo(
    () => [
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "200 Rs.",
        col5: "150 Pts.",
        col6: "19-02-2022",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Name",
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
        Header: "Dues",
        accessor: "col4",
      },
      {
        Header: "Points",
        accessor: "col5",
      },
      {
        Header: "Last Contacted",
        accessor: "col6",
      },
    ],
    []
  );

  return (
    <PageContainer>
      <div className="flex flex-col">
        <div>
          <CustomerFilters />
        </div>
        <div className=" flex h-[36rem] space-x-3">
          <Card className="h-full w-[38rem] overflow-auto">
            <MessageCustomerTable
              className="w-full"
              data={data}
              columns={columns}
            />
          </Card>
          <MessagePreview />
        </div>
      </div>
      <PreviousMessages />
    </PageContainer>
  );
};

export default MessagePage;
