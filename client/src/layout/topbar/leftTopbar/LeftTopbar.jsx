import React from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../../theme";
import { useSearchParams } from "react-router-dom";

const LeftTopbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSearch, setIsSearch] = useSearchParams();
    const handleChange = ({ target }) => setIsSearch({ q: target.value });
  return (
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search"
        size="small"
        avlue={isSearch.get("q") ?? ""}
        onChange={handleChange}
      />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default LeftTopbar;
