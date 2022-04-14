import React, { useEffect, useMemo, useState } from "react";
import CustomersTable from "./../components/customers/CustomersTable";
import Card from "../components/container/Card";
import CustomerFilters from "../components/customers/CustomerFilters";
import BirthdayList from "../components/customers/BirthdayList";
import SummaryBox from "../components/container/SummaryBox";
import PageContainer from "../components/container/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers, getTodaysBirthday } from "../store/customer-actions";
import moment from "moment";

const CustomersPage = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customerList);
  const todaysBirthday = useSelector((state) => state.customers.todaysBirthday);

  const [typeFilter, setTypeFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

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

  let tmc = 0;
  let tfc = 0;
  customers.forEach((customer) => {
    if (customer.gender === "M") {
      tmc++;
    } else {
      tfc++;
    }
  });

  const data = useMemo(() =>
    customers.map((customer) => {
      const age = getAge(customer.dob);
      return {
        col1: `${customer.name}`,
        col2: `${customer.gender}`,
        col3: `${age}`,
        col4: `+91 ${customer.contact}`,
        col5: `${customer.dues} Rs.`,
        col6: `${customer.points} Pts.`,
        col7: `${customer.address === "" ? "---" : customer.address}`,
        col8: `${moment(customer.updatedAt).format("ll")}`,
      };
    })
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
      content2: `${tfc}`,
    },
    {
      content: "Male Customers :",
      content2: `${tmc}`,
    },
    {
      content: "Total Customers",
      content2: `${tfc + tmc}`,
    },
  ];

  useEffect(() => {
    dispatch(
      getCustomers(typeFilter, startDateFilter, endDateFilter, nameFilter)
    );
    dispatch(getTodaysBirthday());
  }, [dispatch, typeFilter, nameFilter, startDateFilter, endDateFilter]);

  return (
    <PageContainer>
      <div className="h-full w-10/12">
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
        <Card className=" h-[36rem] overflow-auto">
          <CustomersTable className="w-full" data={data} columns={columns} />
        </Card>
      </div>
      <div className="ml-3 w-[15rem] flex flex-col max-h-[40.5rem]">
        <BirthdayList todaysBirthday={todaysBirthday} />
        <SummaryBox heading={"Summary"} data={summary} className={""} />
      </div>
    </PageContainer>
  );
};

export default CustomersPage;
