import axios from "axios";
import { useEffect } from "react";

import { useSnackBar } from "../providers/SnackBarProvifer";
import { useUser } from "../providers/UserProviders";
import useForgotPassword from "../users/hooks/useForgotPassword";

const useAxios = () => {
  const snack = useSnackBar();
  const { token } = useUser();
  const { value } = useForgotPassword();
  const { password } = value;

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
    if (snack) {
      axios.interceptors.request.use((data) => {
        return Promise.resolve(data);
      }, null);
    }

    axios.interceptors.response.use(null, (error) => {
      const expectedError = error.response && error.response.status >= 400;
      if (expectedError) snack("error", error.response.data);
      return Promise.reject(error);
    });
  }, [token, snack]);

  useEffect(() => {
    axios.defaults.headers.common["x-password-token"] = password;
    if (snack) {
      axios.interceptors.request.use((data) => {
        return Promise.resolve(data);
      }, null);
    }

    axios.interceptors.response.use(null, (error) => {
      const expectedError = error.response && error.response.status >= 400;
      if (expectedError) snack("error", error.error.response.data);
      return Promise.reject(error);
    });
  }, [password, snack]);
};

export default useAxios;
