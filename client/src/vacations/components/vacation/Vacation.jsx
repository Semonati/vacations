import React from "react";
import { Box, Card } from "@mui/material";
import { object } from "prop-types";
import VacationImage from "./VacationImage";
import VacationHead from "./VacationHead";
import VacationBody from "./VacationBody";

const Vacation = ({ vacation, onLike }) => {
  
  return (
    <Card sx={{ minWidth: 450 }}>
      <Box>
        <VacationHead title={vacation.title} subtitle={vacation.subtitle} />
        <VacationBody
          description={vacation.description}
          vacationId={vacation._id}
          onLike={onLike}
          vacationLikes={vacation.likes}
        />
      </Box>
      <Box>
        <VacationImage image={vacation.image} />
      </Box>
    </Card>
  );
};

Vacation.propTypes = {
  vacation: object.isRequired,
};

export default Vacation;
