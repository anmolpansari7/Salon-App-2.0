import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";

import AuthPage from "./pages/AuthPage";
import PricePage from "./pages/PricePage";
import CustomersPage from "./pages/CustomersPage";
import ReportPage from "./pages/ReportPage";
import StaffPage from "./pages/StaffPage";
import PackagePage from "./pages/PackagePage";
import PromotionPage from "./pages/PromotionPage";
import InventoryPage from "./pages/InventoryPage";
import MessagePage from "./pages/MessagePage";
import ExpensePage from "./pages/ExpensePage";
import AddCustomerModal from "./components/customers/AddCustomerModal";
import ChangePasswordModal from "./components/owner_and_branch/ChangePasswordModal";
import BranchEditModal from "./components/owner_and_branch/BranchEditModal";
import CurrentCustomerPage from "./pages/CurrentCustomerPage";
import PointsCalculatorModal from "./components/pointscalculator/PointsCalculatorModal";
import ProtectedRoute from "./components/navbar/ProtectedRoute";

import { getPointsCalculatorData } from "./store/points-calculator-actions";

function App() {
  const dispatch = useDispatch();
  const isAuthBranch = useSelector(
    (state) => state.authentication.isAuthBranch
  );
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showBranchEditModal, setShowBranchEditModal] = useState(false);
  const [showPointsCalculatorModal, setShowPointsCalculatorModal] =
    useState(false);

  const onShowAddCustomerModal = () => {
    setShowAddCustomerModal(true);
  };

  const onShowChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };

  const onShowBranchEditModal = () => {
    setShowBranchEditModal(true);
  };

  const onShowPointCalculatorModal = () => {
    setShowPointsCalculatorModal(true);
  };

  const onHideModal = () => {
    setShowAddCustomerModal(false);
    setShowBranchEditModal(false);
    setShowChangePasswordModal(false);
    setShowPointsCalculatorModal(false);
  };

  useEffect(() => {
    dispatch(getPointsCalculatorData());
  }, [dispatch]);

  return (
    <div className="w-full h-screen bg-app-bg flex flex-col">
      {(isAuthBranch || isAuthOwner) && (
        <NavBar
          onShowAddCustomerModal={onShowAddCustomerModal}
          onShowChangePasswordModal={onShowChangePasswordModal}
          onShowBranchEditModal={onShowBranchEditModal}
          onShowPointCalculatorModal={onShowPointCalculatorModal}
        />
      )}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="price"
          element={
            <ProtectedRoute>
              <PricePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="customers"
          element={
            <ProtectedRoute>
              <CustomersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="report"
          element={
            <ProtectedRoute>
              <ReportPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="staff"
          element={
            <ProtectedRoute>
              <StaffPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="package"
          element={
            <ProtectedRoute>
              <PackagePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="promotion"
          element={
            <ProtectedRoute>
              <PromotionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="inventory"
          element={
            <ProtectedRoute>
              <InventoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="message"
          element={
            <ProtectedRoute>
              <MessagePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="expense"
          element={
            <ProtectedRoute>
              <ExpensePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="customer/:id"
          element={
            <ProtectedRoute>
              <CurrentCustomerPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      {showAddCustomerModal && <AddCustomerModal onHideModal={onHideModal} />}
      {showChangePasswordModal && (
        <ChangePasswordModal onHideModal={onHideModal} />
      )}
      {showBranchEditModal && <BranchEditModal onHideModal={onHideModal} />}
      {showPointsCalculatorModal && (
        <PointsCalculatorModal onHideModal={onHideModal} />
      )}
    </div>
  );
}

export default App;
