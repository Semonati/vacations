import React from "react";
import { arrayOf, object } from "prop-types";
import { Box, Grid } from "@mui/material";
import Vacation from "./vacation/Vacation";

const Vacations = ({ vacations }) => {
  return (
    <Box>
      <Grid container columns={13}>
        {vacations.map((vacation) => (
          <Grid
            item
            key={vacation._id}
            sx={{ backgroundColor: "red", m: "0 2% 2% 0" }}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Vacation vacation={vacation} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Vacations.propTypes = {
  vacations: arrayOf(object),
};

export default Vacations;
