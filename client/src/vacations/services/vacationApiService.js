import axios from "axios";

const PORT = 8080;

const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${PORT}`;

export const getVacations = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/vacations`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getVacation = async (vacationId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/vacations/${vacationId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyVacations = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/vacations/my-vacations`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createVacation = async (vacation) => {
  try {
    const { data } = await axios.post(`${apiUrl}/vacations`, vacation);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editVacation = async (vacationId, normelizedVacation) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/vacations/${vacationId}`,
      normelizedVacation
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (vacationId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/vacations/${vacationId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteVacation = async (vacationId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/vacations/${vacationId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getNotigication = async (vacationId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/vacations/${vacationId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
