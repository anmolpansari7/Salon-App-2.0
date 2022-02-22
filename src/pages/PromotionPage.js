import React, { useMemo } from "react";
import PageContainers from "./../components/container/PageContainer";
import CustomerFilters from "../components/customers/CustomerFilters";
import Card from "./../components/container/Card";
import PromotionCustomerTable from "../components/promotions/PromotionCustomerTable";
import CreatePromocode from "./../components/promotions/CreatePromocode";
import PreviousPromoCodes from "../components/promotions/PreviousPromoCodes";

const PromotionPage = () => {
  const data = useMemo(
    () => [
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
        col4: "250 Rs.",
        col5: "19-02-2022",
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
        Header: "Due",
        accessor: "col4",
      },
      {
        Header: "Last Promo",
        accessor: "col5",
      },
    ],
    []
  );

  return (
    <PageContainers>
      <div className=" flex flex-col">
        <div>
          <CustomerFilters />
        </div>
        <div className=" flex h-[36rem] space-x-3">
          <Card className="w-[35rem] h-full overflow-auto">
            <PromotionCustomerTable
              columns={columns}
              data={data}
              className=" w-full"
            />
          </Card>
          <CreatePromocode />
        </div>
      </div>
      <PreviousPromoCodes />
    </PageContainers>
  );
};

export default PromotionPage;
