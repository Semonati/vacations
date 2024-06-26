import React from "react";
import { node, func, string, number, object } from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import LoopIcon from "@mui/icons-material/Loop";

const Form = ({
  onSubmit,
  onReset,
  onChange,
  to,
  color,
  spacing,
  styles,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      color={color}
      sx={{ p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
      mb="2%"
    >
      <Grid container spacing={spacing}>
        {children}
      </Grid>
      <Grid container spacing={1} my={2} direction="row" width="100">
        <Grid item xs={12} sm={6}>
          <FormButton
            node="cancel"
            color="error"
            component="div"
            onClick={() => navigate(to)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButton
            node={<LoopIcon />}
            component="div"
            color="warning"
            onClick={onReset}
          />
        </Grid>
        <Grid item xs={12}>
          <FormButton
            node="Submit"
            onClick={onSubmit}
            disabled={!!onChange()}
            color="info"
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Form.propTypes = {
  children: node.isRequired,
  onSubmit: func.isRequired,
  color: string.isRequired,
  to: string.isRequired,
  spacing: number.isRequired,
  onReset: func.isRequired,
  onChange: func.isRequired,
  title: string.isRequired,
  styles: object.isRequired,
};

Form.defaultProps = {
  color: "inherit",
  to: "/",
  spacing: 1,
  title: "",
  styles: {},
};

export default React.memo(Form);
