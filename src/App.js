import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { useDispatch } from "react-redux";

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
import { getPointsCalculatorData } from "./store/points-calculator-actions";

function App() {
  const dispatch = useDispatch();
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
  }, []);

  return (
    <div className="w-full h-screen bg-app-bg flex flex-col">
      <NavBar
        onShowAddCustomerModal={onShowAddCustomerModal}
        onShowChangePasswordModal={onShowChangePasswordModal}
        onShowBranchEditModal={onShowBranchEditModal}
        onShowPointCalculatorModal={onShowPointCalculatorModal}
      />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="price" element={<PricePage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="package" element={<PackagePage />} />
        <Route path="promotion" element={<PromotionPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="expense" element={<ExpensePage />} />
        <Route path="customer/:id" element={<CurrentCustomerPage />} />
      </Routes>
      {/* <main className="px-10 flex-1 bg-blue-300"></main> */}
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
