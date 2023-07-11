import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const FilteringByPrice = ({ setPrice, price }) => {
  const handleChange = (value, option) => {
    if (option === "min") {
      setPrice((price = [value, price[1]]));
      return null;
    }
    if (option === "max") {
      setPrice((price = [price[0], value]));
      return null;
    }
  };
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        <Typography>Minimum Price</Typography>
        <TextField
          variant="filled"
          placeholder="0"
          name="MinimumPrice"
          color="info"
          autoComplete="off"
          type="number"
          size="small"
          onChange={(e) => handleChange(e.target.value, "min")}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Maximum Price</Typography>
        <TextField
          variant="filled"
          placeholder="0"
          name="MaximumPrice"
          color="info"
          autoComplete="off"
          type="number"
          size="small"
          onChange={(e) => handleChange(e.target.value, "max")}
        />
      </Grid>
    </Grid>
  );
};

export default FilteringByPrice;
