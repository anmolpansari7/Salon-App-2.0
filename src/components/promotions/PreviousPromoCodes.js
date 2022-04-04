import React, { useEffect, useMemo, useState } from "react";
import Card from "../container/Card";
import RadioButton from "../custom_ui/RadioButton";
import { Input } from "@chakra-ui/react";
import PreviousPromoTable from "./PreviousPromoTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getPreviousPromocodes,
  updateStatus,
} from "../../store/promocode-actions";
import moment from "moment";

const PreviousPromoCodes = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const dispatch = useDispatch();

  const previousPromoCodes = useSelector(
    (state) => state.promocodes.previousPromoCodes
  );

  const changeStatus = (id, status) => {
    if (status === "disabled") {
      status = "";
    } else {
      status = "disabled";
    }
    dispatch(updateStatus(id, status));
  };

  const data = previousPromoCodes.map((promo) => {
    let status;
    const vt = new Date(promo.validTill);
    const vf = new Date(promo.validFrom);
    const currDate = new Date();

    if (promo.status === "disabled") {
      status = "disabled";
    } else if (!promo.status && vf > currDate) {
      status = "upcoming";
    } else if (!promo.status && vt >= currDate) {
      status = "active";
    } else if (!promo.status && vt < currDate) {
      status = "expired";
    }

    return {
      col1: `${promo.promoCode}`,
      col2:
        status !== "expired" ? (
          <button
            className={
              "border px-1 rounded-md " +
              (status === "active"
                ? "text-green-400"
                : status === "upcoming"
                ? "text-blue-400"
                : " text-black")
            }
            title={"change status"}
            onClick={() => {
              changeStatus(promo._id, status);
            }}
          >
            {status}
          </button>
        ) : (
          <p className=" text-red-400">{status}</p>
        ),
      col3: `${moment(promo.validFrom).format("ll")}`,
      col4: `${moment(promo.validTill).format("ll")}`,
    };
  });

  const columns = useMemo(
    () => [
      {
        Header: "Promocode",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Status",
        accessor: "col2",
      },
      {
        Header: "Valid From",
        accessor: "col3",
      },
      {
        Header: "Valid Before",
        accessor: "col4",
      },
    ],
    []
  );

  const onClearFilter = () => {
    setStatusFilter("");
    setEndDateFilter("");
    setStartDateFilter("");
  };

  useEffect(() => {
    dispatch(
      getPreviousPromocodes(statusFilter, startDateFilter, endDateFilter)
    );
    console.log(statusFilter, startDateFilter, endDateFilter);
  }, [dispatch, startDateFilter, endDateFilter, statusFilter]);

  return (
    <Card className="w-full flex-col space-y-4">
      <h1 className=" text-base border-b border-dashed border-black mb-2">
        Previous Promocodes.
      </h1>
      <div className=" flex justify-between">
        <RadioButton
          name="promocode-status"
          id="promo-active"
          val="active"
          label="Active"
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
          checked={statusFilter === "active"}
        />

        <RadioButton
          name="promocode-status"
          id="promo-disabled"
          val="disabled"
          label="Disabled"
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
          checked={statusFilter === "disabled"}
        />
        <RadioButton
          name="promocode-status"
          id="promo-upcoming"
          val="upcoming"
          label="Upcoming"
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
          checked={statusFilter === "upcoming"}
        />

        <RadioButton
          name="promocode-status"
          id="promo-expired"
          val="expired"
          label="Expired"
          onChange={(e) => {
            setStatusFilter(e.target.value);
          }}
          checked={statusFilter === "expired"}
        />
        <button
          className=" border border-black px-3 rounded-md"
          onClick={onClearFilter}
        >
          clear
        </button>
      </div>
      <div className="flex justify-between">
        <p className=" text-sm self-center">Valid Btw</p>
        <Input
          type="date"
          placeholder=""
          size="sm"
          width={"9.5rem"}
          value={startDateFilter}
          onChange={(e) => {
            setStartDateFilter(e.target.value);
          }}
        />
        <Input
          type="date"
          placeholder=""
          size="sm"
          width={"9.5rem"}
          value={endDateFilter}
          onChange={(e) => {
            setEndDateFilter(e.target.value);
          }}
        />
      </div>
      <div className=" h-[29rem] overflow-auto">
        <PreviousPromoTable
          data={data}
          columns={columns}
          className={"w-full"}
        />
      </div>
    </Card>
  );
};

export default PreviousPromoCodes;
