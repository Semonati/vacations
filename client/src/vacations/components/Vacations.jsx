import React from "react";
import { arrayOf, object } from "prop-types";
import { Box, Grid } from "@mui/material";
import Vacation from "./vacation/Vacation";

const Vacations = ({ vacations, onLike, socket }) => {
  return (
    <Box>
      <Grid container columns={13}>
        {vacations.map((vacation) => (
          <Grid item key={vacation._id} sx={{ m: "0 2% 5% 0", width:"100%" }} >
            <Vacation vacation={vacation} onLike={onLike} socket={socket} />
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
