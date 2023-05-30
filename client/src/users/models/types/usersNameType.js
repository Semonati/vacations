import { shape, string } from "prop-types";

const usersNameType = shape({
  first: string.isRequired,
  middle: string,
  last: string.isRequired,
});

export default usersNameType;
