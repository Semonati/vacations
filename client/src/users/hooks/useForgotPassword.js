import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../router/routesModel";
import {
  getPassword,
  setPasswordTokenInLocalStorage,
  getPasswordToken,
} from "../services/localStorageService";
import { forgotPassword, resetPassword } from "../services/usersApiService";
import { useUser } from "../../providers/UserProviders";

const useForgotPassword = () => {
  const { user } = useUser();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState(getPasswordToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getPassword();
      setPassword(userFromLocalStorage);
    }
  }, [user]);

  const requestStatus = useCallback(
    (pending, errorMessage, password = null) => {
      setIsPending(pending);
      setError(errorMessage);
      setPassword(password);
    },
    [setPassword]
  );

  const handleForgotPassword = useCallback(async (user) => {
    try {
      const token = await forgotPassword(user);
      setPasswordTokenInLocalStorage(token);
      setPassword(token);
      const passwordFromLocalStorage = getPassword();
      requestStatus(false, null, passwordFromLocalStorage);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleResetPassword = useCallback(async (password) => {
    try {
      const newPassword = await resetPassword(password);
      navigate(ROUTES.LOGIN);
      requestStatus(false, null, newPassword);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return { password, isPending, error };
  }, [password, isPending, error]);

  return { value, handleForgotPassword, handleResetPassword };
};

export default useForgotPassword;
