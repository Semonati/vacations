import {
  Box,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React from "react";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import { tokens } from "../../theme";
import { Facebook, Linkedin, TikTokIcon } from "./icons";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      square
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: colors.primary[400],
        width: "100%",
      }}
    >
      {isMatch ? (
        <Box align="center" width="100%">

          <Box display="flex" justifyContent="center">

            <IconButton size="small" height="55%">
              <Box>
                <Facebook />
              </Box>
            </IconButton>

            <IconButton size="small" height="55%">
              <Box>
                <TikTokIcon />
              </Box>
            </IconButton>

            <IconButton
              size="small"
              height="55%"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/jobs/search/?alertAction=viewjobs&currentJobId=3253660188&f_TPR=a1662206687-&keywords=full-stack%20developer&savedSearchId=1723178717&searchAlertRefId=d54d9c4f-b8c7-4b60-a735-79e0d4cb0f9a"
                );
              }}
            >
              <Box>
                <Linkedin color="#0A66C2" />
              </Box>
            </IconButton>
            
          </Box>
          <Box display="flex" justifyContent="center">
            <Box>
              <Typography
                color={colors.green[400]}
                fontSize="15px"
                align="center"
              >
                Created By Natan Semo
              </Typography>
            </Box>
            <Box>
              <CopyrightOutlinedIcon />
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box></Box>
          <Box>
            <Typography
              color={colors.green[400]}
              fontWeight="bold"
              sx={{ md: { fontSize: 5 } }}
            >
              Created By Natan Semo
            </Typography>
          </Box>

          {/* ICONS */}
          <Box display="flex" alignItems="center" height="6vh">
            <IconButton size="small" height="55%">
              <Box>
                <Facebook />
              </Box>
            </IconButton>

            <IconButton size="small" height="55%">
              <Box>
                <TikTokIcon />
              </Box>
            </IconButton>

            <IconButton
              size="small"
              height="55%"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/jobs/search/?alertAction=viewjobs&currentJobId=3253660188&f_TPR=a1662206687-&keywords=full-stack%20developer&savedSearchId=1723178717&searchAlertRefId=d54d9c4f-b8c7-4b60-a735-79e0d4cb0f9a"
                );
              }}
            >
              <Box>
                <Linkedin color="#0A66C2" />
              </Box>
            </IconButton>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default Footer;
