import axios from "axios";
import { useEffect } from "react";

import { useSnackBar } from "../providers/SnackBarProvifer";
import { useUser } from "../providers/UserProviders";

const useAxios = () => {
  const snack = useSnackBar();
  const { token } = useUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
    if (snack) {
      axios.interceptors.request.use((data) => {
        return Promise.resolve(data);
      }, null);
    }

    axios.interceptors.response.use(null, (error) => {
      const expectedError = error.response && error.response.status >= 400;
      if (expectedError) snack("error", error.message);
      return Promise.reject(error);
    });
  }, [token, snack]);
};

export default useAxios;
