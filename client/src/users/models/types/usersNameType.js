import { shape, string } from "prop-types";

const usersNameType = shape({
  first: string.isRequired,
  last: string.isRequired,
});

export default usersNameType;
