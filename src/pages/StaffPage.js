import React, { useMemo, useState } from "react";
import Card from "../components/container/Card";
import SummaryBox from "./../components/container/SummaryBox";
import StaffFilters from "../components/staff/StaffFilters";
import StaffTable from "../components/staff/StaffTable";
import FloatingButton from "../components/custom_ui/FloatingButton";
import AddStaffModal from "../components/staff/AddStaffModal";

const StaffPage = () => {
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const onShowAddStaffModal = () => {
    setShowAddStaffModal(true);
  };

  const onHideStaffModal = () => {
    setShowAddStaffModal(false);
  };

  const data = useMemo(
    () => [
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "Gali No.7 Shanti Nagar Rjn",
        col6: "02-03-2022",
        col7: "click to see",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "Gali No.7 Shanti Nagar Rjn",
        col6: "02-03-2022",
        col7: "click to see",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "Gali No.7 Shanti Nagar Rjn",
        col6: "02-03-2022",
        col7: "click to see",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "Gali No.7 Shanti Nagar Rjn",
        col6: "02-03-2022",
        col7: "click to see",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "Gali No.7 Shanti Nagar Rjn",
        col6: "02-03-2022",
        col7: "click to see",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "Gali No.7 Shanti Nagar Rjn",
        col6: "02-03-2022",
        col7: "click to see",
      },
      {
        col1: "Animesh Chopra",
        col2: "12 (M)",
        col3: "+91 2365214578",
        col4: "350 Rs.",
        col5: "Gali No.7 Shanti Nagar Rjn",
        col6: "02-03-2022",
        col7: "click to see",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Staff's Name",
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
        Header: "Due",
        accessor: "col4",
      },
      {
        Header: "Address",
        accessor: "col5",
      },
      {
        Header: "Joining Date",
        accessor: "col6",
      },
      {
        Header: "Aadhar Details",
        accessor: "col7",
      },
    ],
    []
  );

  const summary = [
    {
      content: "Total Female Staff",
      content2: "25",
    },
    {
      content: "Total Male Staff",
      content2: "36",
    },
    {
      content: "Total Total Staff",
      content2: "61",
    },
    {
      content: "Total Staff's Due",
      content2: "2500",
    },
  ];
  return (
    <div className=" bg-app-bg flex-1 px-10 py-5 flex font-body">
      <div className="h-full w-10/12">
        <StaffFilters />
        <Card className=" h-[36rem] overflow-auto">
          <StaffTable data={data} columns={columns} className={" w-full"} />
        </Card>
      </div>
      <div className="ml-3 w-[15rem] flex flex-col max-h-[40.5rem] justify-between ">
        <SummaryBox heading={"Summary"} data={summary} className={" pb-10"} />
      </div>
      <FloatingButton
        content={"Add Staff"}
        className={""}
        onClick={onShowAddStaffModal}
      />
      {showAddStaffModal && <AddStaffModal onHideModal={onHideStaffModal} />}
    </div>
  );
};

export default StaffPage;
