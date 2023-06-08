import { string } from "prop-types";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { tokens } from "../../../theme";
import ROUTES from "../../../router/routesModel";

const VacationBody = ({ description }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h5"
        color={colors.red[500]}
        fontWeight="bold"
        align="center"
      >
        {`${description.substring(0, 200)}`}
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <Button
          onClick={() => navigate(`${ROUTES.VACATION_DETAILS}`)}
          sx={{ color: colors.green[500] }}
        >
          <Typography>tell me mor</Typography>
        </Button>
        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

VacationBody.propTypes = {
  description: string.isRequired,
};

export default VacationBody;
