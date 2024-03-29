import { shape, string, number } from "prop-types";

const addressType = shape({
  state: string,
  country: string.isRequired,
  city: string.isRequired,
  street: string.isRequired,
  houseNumber: number,
  zip: number,
});

export default addressType;
