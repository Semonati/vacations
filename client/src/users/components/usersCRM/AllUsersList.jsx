import React, { useState } from "react";
import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routerModel";
import UserDeleteDialog from "./UserDeleteDialog";

const AllUsersList = ({ users, onDelete }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const [deleteUser, setDeleteUser] = useState("");
  const navigate = useNavigate();

  const handleDialog = (term, id) => {
    if (term === "open") {
      setDeleteUser(id);
      return setDialog(true);
    }
    setDialog(false);
  };

  const handleDeleteUser = () => {
    handleDialog();
    onDelete(deleteUser);
  };

  return (
    <>
      <TableBody>
        {users.map((user) => (
          <TableRow
            key={user._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              onClick={() => {
                navigate(`${ROUTES.USER_PROFILE}/${user._id}`);
              }}
            >
              {user.email}
            </TableCell>

            

            <TableCell align="center">
              <Tooltip
                title={
                  user.isAdmin
                    ? "You are not allowed DELETE this user"
                    : "Delete User"
                }
              >
                <span>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDialog("open", user._id)}
                    disabled={user.isAdmin}
                  >
                    <PersonRemoveIcon
                      color={user.isAdmin ? "inherit" : "error"}
                    />
                  </IconButton>
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <UserDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteUser}
      />
    </>
  );
};

export default AllUsersList;
