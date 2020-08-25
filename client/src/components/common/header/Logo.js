import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo3.png"

const Logo = ({ imageUrl, logoClass }) => {
  console.log(imageUrl)
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <Link to={"/"}>
        <img alt="logo" src={logo} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
