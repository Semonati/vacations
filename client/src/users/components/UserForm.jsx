import React from "react";
import { func, object, string } from "prop-types";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../router/routesModel";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserForm = ({
  title,
  onReset,
  onSubmit,
  onChange,
  errors,
  data,
  onInputChange,
}) => {
  const navigate = useNavigate();
  return (
    <Form
      title={title}
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onChange}
      styles={{ maxWidth: "750px" }}
      to={ROUTES.ROOT}
    >
      {title !== "login" && (
        <>
          <Input
            name="first"
            label="first name"
            error={errors.first}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            multiline={false}
            required={true}
          />
          <Input
            name="last"
            label="last name"
            error={errors.last}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            multiline={false}
            required={true}
          />
          <Input
            name="phone"
            label="phone"
            type="phone"
            error={errors.phone}
            onChange={onInputChange}
            data={data}
            variant="filled"
            multiline={false}
            sm={6}
            required={true}
          />
        </>
      )}
      <Input
        label="email"
        name="email"
        type="email"
        error={errors.email}
        onChange={onInputChange}
        data={data}
        variant="filled"
        multiline={false}
        required={true}
        sm={title === "login" ? 12 : 6}
        disabled={title === "edit" && true}
      />
      {title !== "edit" && (
        <Input
          label="password"
          name="password"
          type="password"
          error={errors.password}
          onChange={onInputChange}
          data={data}
          variant="filled"
          sm={title === "login" ? 12 : 6}
          multiline={false}
          required={true}
        />
      )}
      {title === "signup" && (
        <Input
          label="Confirm password"
          name="confirmPassword"
          type="password"
          error={errors.confirmPassword}
          onChange={onInputChange}
          data={data}
          variant="filled"
          sm={title === "logig" ? 12 : 6}
          multiline={false}
          required={true}
        />
      )}
      {title !== "login" && (
        <>
          <Input
            name="state"
            label="state"
            error={errors.state}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            multiline={false}
          />
          <Input
            label="country"
            name="country"
            error={errors.country}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            required={true}
            multiline={false}
          />
          <Input
            label="city"
            name="city"
            error={errors.city}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            required={true}
            multiline={false}
          />
          <Input
            label="street"
            name="street"
            error={errors.street}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            required={true}
            multiline={false}
          />
          <Input
            label="house number"
            name="houseNumber"
            type="number"
            error={errors.houseNumber}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            multiline={false}
          />
          <Input
            label="zip"
            name="zip"
            type="number"
            error={errors.zip}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={6}
            multiline={false}
          />
          <Input
            label="about Me"
            name="aboutMe"
            error={errors.aboutMe}
            onChange={onInputChange}
            data={data}
            variant="filled"
            sm={12}
            multiline={true}
            rows={10}
          />
        </>
      )}
      {title === "login" && (
        <Button
          color="secondary"
          onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Typography>forgot password ?</Typography>
        </Button>
      )}
    </Form>
  );
};

UserForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  onChange: func.isRequired,
  title: string.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
};

export default React.memo(UserForm);
