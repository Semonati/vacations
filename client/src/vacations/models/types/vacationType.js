import { shape, string, arrayOf, oneOfType } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const vacationType = shape({
  _id: string,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  address: addressType.isRequired,
  image: imageType.isRequired,
  phone: string.isRequired,
  likes: arrayOf(string).isRequired,
  web: oneOfType([string]),
  user_id: string.isRequired,
  createdAt: string.isRequired,
});

export default vacationType;
