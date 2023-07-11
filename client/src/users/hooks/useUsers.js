import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import useAxios from "../../hooks/useAxios";
import { useSnackBar } from "../../providers/SnackBarProvifer";
import ROUTES from "../../router/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useUser } from "../../providers/UserProviders";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import {
  contactUs,
  deleteUser,
  editUser,
  getUserFromDB,
  getUsers,
  login,
  signup,
} from "../services/usersApiService";
import normalizeMessage from "../helpers/normalization/normalizeMessage";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const snack = useSnackBar();

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (pending, errorMessage, users, user = null) => {
      setIsPending(pending);
      setError(errorMessage);
      setUsers(users);
      setUser(user);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, null, userFromLocalStorage);
      snack("success", "The user has successfully logged in");
      navigate(ROUTES.ROOT);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    snack("success", "The user has successfully logged out of");
    navigate(ROUTES.ROOT);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
        snack("success", "The user has successfully registered");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleGetUsers = useCallback(async () => {
    try {
      setIsPending(true);
      const users = await getUsers();
      requestStatus(false, null, users, user);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetUser = useCallback(async (userId) => {
    try {
      setIsPending(true);
      const user = await getUserFromDB(userId);
      requestStatus(false, null, null, user);
      return user;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleEditUser = useCallback(async (userId, userFromClient) => {
    try {
      setIsPending(true);
      const user = await editUser(userId, userFromClient);
      snack("success", "The user was seccessfully updated");
      navigate(ROUTES.ROOT);
      return requestStatus(false, null, null, user);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleDeleteUser = useCallback(async (userId) => {
    try {
      setIsPending(true);
      const userDeleted = await deleteUser(userId);
      removeToken();
      setUser(null);
      snack("success", "The user has successfully deleted");
      requestStatus(false, null, userDeleted);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleContactUs = useCallback(
    async (message) => {
      try {
        let data = normalizeMessage(message);
        await contactUs(data);
        snack("success", "The message was send successfully");
        requestStatus(false, null, null, null);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus]
  );

  const userValue = useMemo(() => {
    return { isPending, error, user, users };
  }, [isPending, error, user, users]);

  return {
    userValue,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUsers,
    handleGetUser,
    handleEditUser,
    handleDeleteUser,
    handleContactUs,
  };
};

export default useUsers;
