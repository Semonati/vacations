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
import VacationsDetailsPage from "../vacations/pages/VacationsDetailsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<AllVacationsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.My_VACATIONS} element={<MyVacationsPage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactPage />} />
      <Route path={ROUTES.CREAT_VACATION} element={<CreateVacationPage />} />
      <Route
        // path={`${ROUTES.FAV_VACATION}/:userId`}
        path={`${ROUTES.FAV_VACATION}`}
        element={<FavoriteVacationPage />}
      />
      <Route
        path={`${ROUTES.EDIT_VACATION}/:vacationId`}
        element={<EditVacationPage />}
      />
      <Route
        path={`${ROUTES.VACATION_DETAILS}/:vacationId`}
        element={<VacationsDetailsPage />}
      />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SigninPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
