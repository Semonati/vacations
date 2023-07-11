import React from "react";
import { Box, Grid, Input, Typography } from "@mui/material";

const FilteringByDate = ({ date, setDate }) => {
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Grid item xs={12} md={6}>
        <Input type="date"></Input>
      </Grid>
      <Grid item xs={12} md={6}>
        <Input type="date"></Input>
      </Grid>
    </Grid>
  );
};

export default FilteringByDate;
