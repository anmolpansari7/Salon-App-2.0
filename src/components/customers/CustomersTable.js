import React from "react";
import { useTable } from "react-table";

const CustomersTable = ({ className, data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className={"font-body " + className}>
      <thead className=" bg-slate-200 rounded-md">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className=" text-base pt-4 font-medium text-black first:text-left last:text-right self-center"
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
                      "pt-4 border-b border-dashed border-black text-center first:text-left last:text-right"
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

export default CustomersTable;
