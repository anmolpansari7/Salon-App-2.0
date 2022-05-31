import React from "react";

const PageContainer = (props) => {
  return (
    <div className="flex-1 relative bg-app-bg font-body py-5 flex space-x-5">
      {props.children}
    </div>
  );
};

export default PageContainer;
