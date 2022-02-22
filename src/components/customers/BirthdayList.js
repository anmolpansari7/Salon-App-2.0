import React, { useMemo } from "react";
import Card from "../container/Card";
import { useTable } from "react-table";

const BirthdayTable = ({ className }) => {
  const data = useMemo(
    () => [
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
      },
      {
        col1: "Animesh Chopra",
        col2: "M",
        col3: 12,
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

const BirthdayList = () => {
  return (
    <Card className="w-full h-1/2 mb-3 flex-1 overflow-auto">
      <h1 className=" text-base font-medium border-b border-dashed border-black mb-5">
        Today's Birthdays
      </h1>
      <BirthdayTable className=" w-full" />
    </Card>
  );
};

export default BirthdayList;
