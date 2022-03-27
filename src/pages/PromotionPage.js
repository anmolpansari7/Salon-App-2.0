import React, { useEffect, useMemo, useState } from "react";
import PageContainers from "./../components/container/PageContainer";
import CustomerFilters from "../components/customers/CustomerFilters";
import Card from "./../components/container/Card";
import PromotionCustomerTable from "../components/promotions/PromotionCustomerTable";
import CreatePromocode from "./../components/promotions/CreatePromocode";
import PreviousPromoCodes from "../components/promotions/PreviousPromoCodes";
import SendPromoCode from "../components/promotions/SendPromoCode";
import { useSelector, useDispatch } from "react-redux";
import { getCustomers } from "../store/customer-actions";
import moment from "moment";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const PromotionPage = () => {
  const dispatch = useDispatch();

  const customers = useSelector((state) => state.customers.customerList);
  const [typeFilter, setTypeFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  console.log(customers);

  const data = customers.map((customer) => {
    const age = getAge(customer.dob);
    return {
      col1: `${customer.name}`,
      col2: `${customer.gender}`,
      col3: `${age}`,
      col4: `${customer.dues} Rs.`,
      col5: `${moment(customer.updatedAt).format("ll")}`,
    };
  });

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
        Header: "Last Visit",
        accessor: "col5",
      },
    ],
    []
  );

  useEffect(() => {
    dispatch(
      getCustomers(typeFilter, startDateFilter, endDateFilter, nameFilter)
    );
  }, [dispatch, typeFilter, startDateFilter, endDateFilter, nameFilter]);

  return (
    <PageContainers>
      <div className=" flex flex-col">
        <div>
          <CustomerFilters
            typeFilter={typeFilter}
            nameFilter={nameFilter}
            startDateFilter={startDateFilter}
            endDateFilter={endDateFilter}
            setTypeFilter={setTypeFilter}
            setNameFilter={setNameFilter}
            setStartDateFilter={setStartDateFilter}
            setEndDateFilter={setEndDateFilter}
          />
        </div>
        <div className=" flex h-[36rem] space-x-3">
          <div className="flex-1 flex flex-col">
            <CreatePromocode />
            <SendPromoCode />
          </div>
          <Card className="w-[35rem] h-full overflow-auto">
            <PromotionCustomerTable
              columns={columns}
              data={data}
              className=" w-full"
            />
          </Card>
        </div>
      </div>
      <PreviousPromoCodes />
    </PageContainers>
  );
};

export default PromotionPage;
