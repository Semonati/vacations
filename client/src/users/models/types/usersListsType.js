import { shape, string } from "prop-types";
// import imageType from "./usersImageType";
import usersNameType from "./usersNameType";

const usersListType = shape({
  _id: string,
  name: usersNameType.isRequired,
  email: string.isRequired,
  // image: imageType.isRequired,
});

export default usersListType;