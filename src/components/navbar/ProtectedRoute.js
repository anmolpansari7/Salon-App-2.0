import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthBranch = useSelector(
    (state) => state.authentication.isAuthBranch
  );
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

  return isAuthBranch || isAuthOwner ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
