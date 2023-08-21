import React from "react";
import { func, object, string } from "prop-types";

import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../router/routesModel";

const PasswordForm = ({
  title,
  onReset,
  onSubmit,
  onChange,
  errors,
  data,
  onInputChange,
}) => {

  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onChange}
      styles={{ minWidth: "650px" }}
      title={title}
      to={ROUTES.ROOT}
    >
      {title === "forgot-password" && (
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
          sm={12}
          disabled={title === "edit" && true}
        />
      )}
      {title === "reset-password" && (
        <>
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={onInputChange}
            data={data}
            variant="filled"
            multiline={false}
            required={true}
          />
          <Input
            label="Confirm password"
            name="confirmPassword"
            type="password"
            error={errors.confirmPassword}
            onChange={onInputChange}
            data={data}
            variant="filled"
            multiline={false}
            required={true}
          />
        </>
      )}
    </Form>
  );
};

PasswordForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  onChange: func.isRequired,
  title: string.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
};

export default React.memo(PasswordForm);
