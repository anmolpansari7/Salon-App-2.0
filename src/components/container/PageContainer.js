import React from "react";

const PageContainer = (props) => {
  return (
    <div className="flex-1 bg-app-bg font-body px-10 py-5 flex space-x-5">
      {props.children}
    </div>
  );
};

export default PageContainer;
