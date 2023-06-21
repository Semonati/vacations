import jwtDecode from "jwt-decode";

const TOKEN = "token";
const PASSWORD = "passwordToken";

export const setTokenInLocalStorage = (encryptedToken) => {
  localStorage.setItem(TOKEN, encryptedToken);
};

export const getUser = () => {
  try {
    const user = localStorage.getItem(TOKEN);
    return jwtDecode(user);
  } catch (error) {
    return null;
  }
};

export const removeToker = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const setPasswordTokenInLocalStorage = (passwordToken) => {
  localStorage.setItem(PASSWORD, passwordToken);
  setTimeout(() => {
    localStorage.removeItem(PASSWORD);
  }, 300000);
};

export const getPassword = () => {
  try {
    const password = localStorage.getItem(PASSWORD);
    return jwtDecode(password);
  } catch (error) {
    return null;
  }
};

export const getPasswordToken = () => localStorage.getItem(PASSWORD);
