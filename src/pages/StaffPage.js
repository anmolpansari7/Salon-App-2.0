import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/container/Card";
import SummaryBox from "./../components/container/SummaryBox";
import StaffFilters from "../components/staff/StaffFilters";
import StaffTable from "../components/staff/StaffTable";
import FloatingButton from "../components/custom_ui/FloatingButton";
import AddStaffModal from "../components/staff/AddStaffModal";
import { useDispatch, useSelector } from "react-redux";
import { getStaffList } from "../store/staff-actions";
import moment from "moment";
import AadharPreviewModal from "../components/staff/AadharPreviewModal";
import EditStaffModal from "../components/staff/EditStaffModal";

const StaffPage = () => {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff.staff);
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

  const [genderFilter, setGenderFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const [imageId, setImageId] = useState("");
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [showAadharPreviewModal, setShowAadharPreviewModal] = useState(false);
  const [showEditStaffModal, setShowEditStaffModal] = useState(false);
  const [staffMember, setStaffMember] = useState();

  const onShowAddStaffModal = () => {
    setShowAddStaffModal(true);
  };

  const onHideStaffModal = () => {
    setShowAddStaffModal(false);
  };
  const onHideAadharPreviewModal = () => {
    setShowAadharPreviewModal(false);
  };
  const onHideEditStaffModal = () => {
    setShowEditStaffModal(false);
  };

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

  const isOwner = localStorage.getItem("ownerToken");

  const data = useMemo(
    () =>
      staff.map((member) => {
        const age = getAge(member.dob);
        const contactNo = member.contact ? `+91 ${member.contact}` : "--";
        return {
          col1: `${member.name}`,
          col2: `${age} ${member.gender}`,
          col3: contactNo,
          // col4: `${member.due}`,
          col5: `${member.address}`,
          col6: `${moment(member.createdAt).format("ll")}`,
          col7: (
            <button
              type="button"
              id={member.aadhar}
              onClick={() => {
                setImageId(member.aadhar);
                setShowAadharPreviewModal(true);
              }}
            >
              click to see
            </button>
          ),
          col8: (
            <button
              type="button"
              disabled={!isOwner}
              onClick={() => {
                setStaffMember(member);
                setShowEditStaffModal(true);
              }}
            >
              Edit
            </button>
          ),
        };
      }),
    [staff]
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
      // {
      //   Header: "Due",
      //   accessor: "col4",
      // },
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
      {
        Header: "Edit",
        accessor: "col8",
      },
    ],
    []
  );

  let totalMaleStaff = 0;
  let totalFemaleStaff = 0;
  let totalDues = 0;

  staff.forEach((member) => {
    member.gender === "M" ? totalMaleStaff++ : totalFemaleStaff++;
    totalDues += member.due;
  });

  const summary = [
    {
      content: "Total Female Staff",
      content2: totalFemaleStaff,
    },
    {
      content: "Total Male Staff",
      content2: totalMaleStaff,
    },
    {
      content: "Total Total Staff",
      content2: `${totalMaleStaff + totalFemaleStaff}`,
    },
    // {
    //   content: "Total Staff's Due",
    //   content2: totalDues,
    // },
  ];

  useEffect(() => {
    dispatch(
      getStaffList(genderFilter, startDateFilter, endDateFilter, nameFilter)
    );
  }, [dispatch, genderFilter, startDateFilter, endDateFilter, nameFilter]);

  return (
    <div className=" bg-app-bg flex-1 py-5 flex font-body">
      <div className="h-full w-10/12">
        <StaffFilters
          genderFilter={genderFilter}
          nameFilter={nameFilter}
          startDateFilter={startDateFilter}
          endDateFilter={endDateFilter}
          setGenderFilter={setGenderFilter}
          setNameFilter={setNameFilter}
          setStartDateFilter={setStartDateFilter}
          setEndDateFilter={setEndDateFilter}
        />
        <Card className=" h-[36rem] overflow-auto">
          <StaffTable data={data} columns={columns} className={" w-full"} />
        </Card>
      </div>
      <div className="ml-3 w-[15rem] flex flex-col max-h-[40.5rem] justify-between ">
        <SummaryBox heading={"Summary"} data={summary} className={" pb-10"} />
      </div>
      {isAuthOwner && (
        <FloatingButton
          content={"Add Staff"}
          className={""}
          onClick={onShowAddStaffModal}
        />
      )}
      {showAddStaffModal && <AddStaffModal onHideModal={onHideStaffModal} />}
      {showAadharPreviewModal && (
        <AadharPreviewModal
          onHideModal={onHideAadharPreviewModal}
          imageId={imageId}
        />
      )}
      {showEditStaffModal && (
        <EditStaffModal
          staffMember={staffMember}
          onHideModal={onHideEditStaffModal}
        />
      )}
    </div>
  );
};

export default StaffPage;
