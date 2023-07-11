import React from "react";
import {
  Box,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { Navigate } from "react-router-dom";

import HeaderPage from "../../components/HeaderPage";
import { useUser } from "../../providers/UserProviders";
import { tokens } from "../../theme";
import ROUTES from "../../router/routesModel";

const ProfilePage = () => {
  const { user } = useUser();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;

  return (
    <Box>
      <Box>
        <HeaderPage
          title="user profile"
          subtitle="please edit account to create youe own vacation story"
        />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ width: 600, backgroundColor: colors.green[700] }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell width="25%" align="center">
                    First name
                  </TableCell>
                  <TableCell width="25%" align="center">
                    Last name
                  </TableCell>
                  <TableCell width="25%" align="center">
                    Phone
                  </TableCell>
                  <TableCell width="25%" align="center">
                    Email
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    {user && user.name.first}
                  </TableCell>
                  <TableCell align="center">{user && user.name.last}</TableCell>
                  <TableCell align="center">{user && user.phone}</TableCell>
                  <TableCell align="center">{user && user.email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Box minHeight="5%">
              <Divider />
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell width="30%" align="center">
                    Address
                  </TableCell>
                  <TableCell width="70%" align="center">
                    About me
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    {user && user.address.state} {user && user.address.country}{" "}
                    {user && user.address.city} {user && user.address.street}{" "}
                    {user && user.address.houseNumber !== 0}{" "}
                    {user && user.address.zip !== 0}{" "}
                  </TableCell>
                  <TableCell align="center">{user && user.aboutMe}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default ProfilePage;
