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
import VacationsPage from "../vacations/pages/VacationsPage";
import SigninPage from "../users/pages/SigninPage";
import VacationsDetailsPage from "../vacations/pages/VacationsDetailsPage";
import EditUserPage from "../users/pages/EditUserPage";
import ProfilePage from "../users/pages/ProfilePage";
import ForgotPasswordPage from "../users/pages/ForgotPasswordPage";
import EnterNewPassword from "../users/pages/EnterNewPassword";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<VacationsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.My_VACATIONS} element={<MyVacationsPage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactPage />} />
      <Route path={ROUTES.CREAT_VACATION} element={<CreateVacationPage />} />
      <Route
        path={`${ROUTES.FAV_VACATION}/:userId`}
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
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={ROUTES.ENTER_NEW_PASSWORD} element={<EnterNewPassword />} />
      <Route path={`${ROUTES.EDIT_USER}/:userId`} element={<EditUserPage />} />
      <Route
        path={`${ROUTES.USER_PROFILE}/:userId`}
        element={<ProfilePage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
