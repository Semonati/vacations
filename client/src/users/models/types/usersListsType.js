import { shape, string, bool } from "prop-types";
import addressType from "./usersAddressType";
import imageType from "./usersImageType";
import usersNameType from "./usersNameType";

const usersListType = shape({
  _id: string,
  name: usersNameType.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  address: addressType.isRequired,
  isBusiness: bool.isRequired,
  image: imageType.isRequired,
});

export default usersListType;