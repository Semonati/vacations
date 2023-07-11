import React, { useState } from "react";
import { arrayOf } from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Typography,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

import vacationType from "../vacations/models/types/vacationType";
import FilteringByDate from "./filteringByOptions/FilteringByDate";
import FilteringByPrice from "./filteringByOptions/FilteringByPrice";
import Vacations from "../vacations/components/Vacations";
import { getColor } from "../utils/colorModeInLocalStorage";

const FilteringDialog = ({ vacations, onLike, socket }) => {
  const colorMode = getColor();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(vacations);
  const [price, setPrice] = useState(["0", "0"]);
  const [date, setDate] = useState(0);

  const handleClickOpen = () => {
    setPrice(["0", "0"]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilterVacations = () => {
    setOpen(false);
    if (price[0] > price[1] || (price[0] && price[1] === "0"))
      return setFilter(vacations);
    let vacationFlitered = vacations.filter((item) => {
      return item.price >= price[0] && item.price <= price[1];
    });
    setFilter(vacationFlitered);
  };

  return (
    <>
      <Box mb="1%">
        <Button variant="text" color="secondary" onClick={handleClickOpen}>
          <TuneOutlinedIcon />
          filtering
        </Button>
        <Dialog open={open} fullWidth maxWidth="sm">
          <DialogTitle>Title</DialogTitle>
          <DialogContent>
            <FormControl sx={{ mt: 2, width: "100%" }}>
              <Typography align="center">Filter By Date</Typography>
              <Box>
                <FilteringByDate date={date} setDate={setDate} />
              </Box>
              <Divider />
              <Typography align="center">Filter By Price</Typography>
              <Box m="2% 0">
                <FilteringByPrice setPrice={setPrice} price={price} />
              </Box>
            </FormControl>
          </DialogContent>

          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant={colorMode === "light" ? "contained" : "text"}
              color="secondary"
              size="large"
              onClick={handleFilterVacations}
            >
              filter
            </Button>
            <Button
              variant={colorMode === "light" ? "contained" : "text"}
              color="secondary"
              size="large"
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Vacations vacations={filter} onLike={onLike} socket={socket} />
    </>
  );
};

FilteringDialog.propTypes = {
  vacations: arrayOf(vacationType),
};

export default FilteringDialog;
