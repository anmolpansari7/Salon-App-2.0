import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateRequest } from "../store/auth-actions";
import keyImage from "./../assets/key.svg";
import { Button, Select, useToast } from "@chakra-ui/react";
import { getBranches } from "../store/branch-actions";
import { authSliceAction } from "../store/auth-slice";

const AuthPage = () => {
  const toast = useToast();
  const branches = useSelector((state) => state.branch.branchList);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  const onAuthSubmit = (e) => {
    e.preventDefault();
    dispatch(
      authenticateRequest(selectedBranch, enteredPassword, navigate, toast)
    );
  };

  useEffect(() => {
    dispatch(getBranches());
  }, [dispatch]);

  useEffect(() => {
    const ownerToken = localStorage.getItem("ownerToken");
    const branchToken = localStorage.getItem("branchToken");
    const branchId = localStorage.getItem("branchId");

    if (ownerToken) {
      dispatch(authSliceAction.setIsAuthOwnerTrue());
      navigate("/price");
    } else if (branchToken) {
      dispatch(authSliceAction.setIsAuthBranchTrue());
      dispatch(authSliceAction.setBranchId(branchId));
      navigate("/price");
    }
  }, []);
  return (
    <div className="h-screen bg-cover bg-center bg-auth-bg">
      <div className="h-full w-full bg-black bg-opacity-60 flex justify-center items-center">
        <form className="bg-white h-78 w-[22rem] py-8 rounded-3xl flex flex-col justify-between space-y-3">
          <h1 className=" text-center font-medium text-2xl">
            Style Zone Unisex Salon
          </h1>
          <img src={keyImage} alt="key" className="h-10" />
          <h2 className="text-lg text-center font-normal -mt-1">
            Enter Security Key
          </h2>
          <Select
            placeholder={"Login For"}
            fontSize={"0.875rem"}
            size={"sm"}
            width={"10rem"}
            alignSelf={"center"}
            onChange={(e) => {
              setSelectedBranch(e.target.value);
            }}
          >
            <option key={"owner"} value={"owner"}>
              Owner
            </option>
            {branches.map((branch) => (
              <option key={branch._id} value={branch._id}>
                {branch.name}
              </option>
            ))}
          </Select>
          <input
            type="password"
            className="h-8 w-32 self-center text-center border-2 rounded-lg"
            value={enteredPassword}
            placeholder={"***"}
            onChange={(e) => {
              setEnteredPassword(e.target.value);
            }}
          />
          <Button
            width={"7rem"}
            size={"md"}
            type="submit"
            onClick={onAuthSubmit}
            alignSelf={"center"}
            backgroundColor={"#31353D"}
            color={"white"}
          >
            Proceed
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
