import React from "react";
import { Routes, Route } from "react-router-dom";

import ROUTES from "./routesModel";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import CreateVacationPage from "../vacations/pages/CreateVacationPage";
import FavoriteVacationPage from "../vacations/pages/FavoriteVacationPage";
import EditVacationPage from "../vacations/pages/EditVacationPage";
import MyVacationsPage from "../vacations/pages/MyVacationsPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../users/pages/LoginPage";
import AllVacationsPage from "../vacations/pages/AllVacationsPage";
import SigninPage from "../users/pages/SigninPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<AllVacationsPage />}></Route>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.My_VACTIONS} element={<MyVacationsPage />}></Route>
      <Route path={ROUTES.CONTACTS} element={<ContactPage />}></Route>
      <Route path={ROUTES.CREAT_VACTION} element={<CreateVacationPage />}></Route>
      <Route path={ROUTES.FAV_VACTION} element={<FavoriteVacationPage />}></Route>
      <Route path={ROUTES.EDIT_VACTION} element={<EditVacationPage />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      <Route path={ROUTES.SIGNUP} element={<SigninPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Router;
