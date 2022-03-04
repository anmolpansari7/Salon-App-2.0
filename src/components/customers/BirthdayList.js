import React, { useMemo } from "react";
import Card from "../container/Card";
import { useTable } from "react-table";

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

const BirthdayTable = ({ className, todaysBirthday }) => {
  const data = useMemo(() =>
    todaysBirthday.map((customer) => {
      const age = getAge(customer.dob);
      return {
        col1: `${customer.name}`,
        col2: `${customer.gender}`,
        col3: `${age}`,
      };
    })
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
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className={"font-body " + className}>
      <thead className="border-b border-dashed border-black">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className=" text-sm pt-0 font-medium text-black first:text-left last:text-right self-center"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className=" first:pt-9">
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={
                      "text-sm pt-3 border-b border-dashed border-black text-center first:text-left last:text-right text-ellipsis"
                    }
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const BirthdayList = ({ todaysBirthday }) => {
  return (
    <Card className="w-full h-1/2 mb-3 flex-1 overflow-auto">
      <h1 className=" text-base font-medium border-b border-dashed border-black mb-5">
        Today's Birthdays
      </h1>
      <BirthdayTable className=" w-full" todaysBirthday={todaysBirthday} />
    </Card>
  );
};

export default BirthdayList;
