import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { arrayOf, bool, func, string } from "prop-types";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import AllUsersList from "./usersCRM/AllUsersList";
import usersListType from "../models/types/usersListsType";

const UsersCRMFeedback = ({
  isPending,
  error,
  users,
  onDelete,
  onBusiness,
}) => {
  if (isPending) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  if (users && !users.length)
    return (
      <Typography>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  if (users && !!users.length)
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User Email</TableCell>
              <TableCell align="center">Business</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <AllUsersList
            users={users}
            onDelete={onDelete}
            onBusiness={onBusiness}
          />
        </Table>
      </TableContainer>
    );
};

UsersCRMFeedback.propTypes = {
  isPending: bool.isRequired,
  error: string,
  users: arrayOf(usersListType),
  onDelete: func.isRequired,
};

export default UsersCRMFeedback;
