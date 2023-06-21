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
  onChange,
  rows,
  disabled,
  multiline,
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
        fullWidth
        autoComplete="off"
        rows={rows}
        multiline={multiline}
        disabled={disabled}
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
  required: false,
  type: "text",
  variant: "outlined",
  rows: 1,
  disabled: false,
};

export default React.memo(Input);
