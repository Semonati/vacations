import { useState } from "react";
import { string } from "prop-types";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const VacationBody = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography variant="h5" color={colors.gray[200]}>
        {showMore ? description : `${description.substring(0, 200)}`}
      </Typography>
      <Button onClick={() => setShowMore(!showMore)} sx={{color:colors.green[500]}}>
        {showMore ? "show Less" : "show More"}
      </Button>
    </Box>
  );
};

VacationBody.propTypes = {
  description: string.isRequired,
};

export default VacationBody;
