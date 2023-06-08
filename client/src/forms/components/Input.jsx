import React from "react";
import { string, bool, object, func } from "prop-types";
import TextField from "@mui/material/TextField";
import firstLetterUpperCase from "../../utils/firstLetterUpperCase";
import Grid from "@mui/material/Grid";

const Input = ({
  variant,
  color,
  type,
  name,
  data,
  label,
  required,
  error,
  changeBizNumber,
  onChange,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={firstLetterUpperCase(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        color={color}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        disabled={changeBizNumber}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  onChange: func.isRequired,
  variant: string,
  data: object,
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);
