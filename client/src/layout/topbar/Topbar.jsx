import { Box } from "@mui/material";

import { MenuProvider } from "../../providers/MenuProvider";
import RightTopbar from "./rightTopbar/RightTopbar";
import LeftTopbar from "./leftTopbar/LeftTopbar";


const Topbar = () => {
  return (
      <MenuProvider>
        <Box display="flex" justifyContent="space-between" p={2}>
          <LeftTopbar />

          <RightTopbar />
        </Box>
      </MenuProvider>
  );
};

export default Topbar;
