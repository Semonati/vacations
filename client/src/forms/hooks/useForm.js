import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { object, func } from "prop-types";
import Joi from "joi";
import ROUTES from "../../router/routesModel";
import { useSnackBar } from "../../providers/SnackBarProvifer";

const useForm = (initialForm, schema, handleSubmit) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const snack = useSnackBar();

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  const validateProperty = useCallback(
    ({ name, value }) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      const errorMessage = validateProperty(target);
      if (errorMessage)
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      else
        setErrors((prev) => {
          let obj = { ...prev };
          delete obj[name];
          return obj;
        });

      setData((prev) => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  const validateForm = useCallback(
    (action) => {
      const schemaForValidate = Joi.object(schema);
      const { error } = schemaForValidate.validate(data);
      if (action === "edit") {
        if (data.password || data.confirmPassword === undefined) return null;
      }
      if (error) return error;
      return null;
    },
    [schema, data]
  );

  const onSubmit = useCallback(
    (action) => {
      if (action !== "login")
        if (data.password !== data.confirmPassword)
          return snack("error", "The password you enter are not match");
      handleSubmit(data);
      navigate(ROUTES.ROOT);
    },
    [handleSubmit, data]
  );

  const onForgotPassword = useCallback(() => {
    if (data.password !== data.confirmPassword)
      return snack("error", "The password you enter are not match");
    handleSubmit(data);
    snack("success", "The link to reset your pawwsord was send your email");
    navigate(ROUTES.ROOT);
  }, [handleSubmit, data]);

  const value = useMemo(() => {
    return { data, errors };
  }, [data, errors]);

  return {
    value,
    onSubmit,
    handleChange,
    handleReset,
    validateForm,
    setData,
    onForgotPassword,
  };
};

useForm.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
};

export default useForm;
