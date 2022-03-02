import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { packageActions } from "../../store/package-slice";
import axios from "axios";

// require("dotenv").config();

const useSearchSuggestions = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const source = axios.CancelToken.source();
    // const ownerToken = localStorage.getItem("ownerToken");

    if (query.length !== 0) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/customer/${query}`, {
          //   headers: { Authorization: `Bearer ${ownerToken}` },
          cancelToken: source.token,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(packageActions.addSuggestions(res.data));
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) return;
          else console.log(error);
        });
    } else {
      //   dispatch(customerListActions.clearSuggestions());
      dispatch(packageActions.clearSuggestions());
    }

    return () => source.cancel();
  }, [query, dispatch]);

  return null;
};

export default useSearchSuggestions;
