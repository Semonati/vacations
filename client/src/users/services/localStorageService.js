import jwtDecode from "jwt-decode";

const USERTOKEN = "token";
const PASSWORD = "passwordToken";
const OPENMENU = "openMenu";

/******** USER TOKEN ********/

export const setTokenInLocalStorage = (encryptedToken) => {
  localStorage.setItem(USERTOKEN, encryptedToken);
};

export const getUser = () => {
  try {
    const user = localStorage.getItem(USERTOKEN);
    return jwtDecode(user);
  } catch (error) {
    return null;
  }
};

export const removeToken = () => localStorage.removeItem(USERTOKEN);

export const getToken = () => localStorage.getItem(USERTOKEN);

/******** PASSWORD TOKEN ********/

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

/******** HIDDEN MENU ********/

export const setHiddenMenuInLocalStorage = (open) => {
  localStorage.setItem(OPENMENU, open);
};

export const getMenu = (test) => {
  try {
    return localStorage.getItem(OPENMENU);
  } catch (error) {
    return null;
  }
};

export const removeMenu = () => localStorage.removeItem(OPENMENU);
