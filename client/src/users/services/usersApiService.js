import axios from "axios";
import { getPasswordToken } from "./localStorageService";

const PORT = 8080;
// const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:9191`;
const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${PORT}`;

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/users`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
export const getUserFromDB = async (userId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const forgotPassword = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/forgot-password`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const resetPassword = async (password) => {
  try {
    const token = getPasswordToken();
    const { data } = await axios.post(`${token}`, password);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editUser = async (userId, normelizedUser) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/users/${userId}`,
      normelizedUser
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteUser = async (userId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const businessUser = async (userId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
