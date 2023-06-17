import { shape, string, bool } from "prop-types";
import usersNameType from "./usersNameType";
import addressType from "./usersAddressType";

const usersListType = shape({
  _id: string,
  name: usersNameType.isRequired,
  phone: string.isRequired,
  aboutMe: string.isRequired,
  email: string.isRequired, 
  address: addressType.isRequired,
  isAdmin: bool.isRequired,
});

export default usersListType;
