import { shape, string, number } from "prop-types";

const usersAddressType = shape({
  state: string,
  country: string.isRequired,
  city: string.isRequired,
  street: string.isRequired,
  houseNumber: number.isRequired,
  zip: number,
});

export default usersAddressType;
