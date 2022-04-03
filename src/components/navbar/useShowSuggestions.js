import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { customerListActions } from "../../store/customer-slice";
import axios from "axios";

const useShowSuggestions = (query) => {
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
            dispatch(customerListActions.addSuggestions(res.data));
          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) return;
          else console.log(error);
        });
    } else {
      dispatch(customerListActions.clearSuggestions());
    }

    return () => source.cancel();
  }, [query, dispatch]);

  return null;
};

export default useShowSuggestions;
