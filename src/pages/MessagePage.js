import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/container/Card";
import PageContainer from "../components/container/PageContainer";
import CustomerFilters from "../components/customers/CustomerFilters";
import MessageCustomerTable from "../components/message/MessageCustomerTable";
import MessagePreview from "../components/message/MessagePreview";
import PreviousMessages from "../components/message/PreviousMessages";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { getCustomers } from "../store/customer-actions";
import { sendMessage } from "../store/message-action";

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

const MessagePage = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customerList);
  const child = React.createRef();

  const [typeFilter, setTypeFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const data = useMemo(() =>
    customers.map((customer) => {
      const age = getAge(customer.dob);
      return {
        id: `${customer.contact}`,
        col1: `${customer.name}`,
        col2: `${customer.gender}`,
        col3: `${age}`,
        col4: `${customer.dues} Rs.`,
        col5: `${customer.points} Pts.`,
        col6: `${moment(customer.updatedAt).format("ll")}`,
      };
    })
  );

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
        show: false,
      },
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
        Header: "Last Visited",
        accessor: "col6",
      },
    ],
    []
  );

  const onSendMessage = (message) => {
    const g = child.current.getSelectedRows();
    let recipients = [];
    g.forEach((ele) => {
      recipients.push(ele.values.id);
    });
    console.log("message : ", message);
    console.log("recipients : ", recipients);
    // dispatch(sendMessage(message, recipients));
  };

  useEffect(() => {
    dispatch(
      getCustomers(typeFilter, startDateFilter, endDateFilter, nameFilter)
    );
  }, [dispatch, typeFilter, startDateFilter, endDateFilter, nameFilter]);

  return (
    <PageContainer>
      <div className="flex flex-col">
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
          <Card className="h-full w-[38rem] overflow-auto">
            <MessageCustomerTable
              className="w-full"
              columns={columns}
              data={data}
              setRef={child}
            />
          </Card>
          <MessagePreview onSendMessage={onSendMessage} />
        </div>
      </div>
      <PreviousMessages />
    </PageContainer>
  );
};

export default MessagePage;
