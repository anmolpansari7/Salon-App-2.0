import React from "react";
import PreviousPackageTable from "../package/PreviousPackageTable";

const PreviousPromoTable = ({ data, columns, className }) => {
  return (
    <PreviousPackageTable data={data} columns={columns} className={className} />
  );
};

export default PreviousPromoTable;
