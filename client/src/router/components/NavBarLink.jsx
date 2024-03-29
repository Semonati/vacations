import React from "react";
import { string, node } from "prop-types";
import { Link } from "react-router-dom";

const NavBarLink = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecorationLine: "none" }}>
      {children}
    </Link>
  );
};

NavBarLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
};


export default NavBarLink;
