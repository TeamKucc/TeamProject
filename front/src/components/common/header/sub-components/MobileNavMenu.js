import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>home</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>
                1
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                  2
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-two"}>
                    3
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-three"}>
                   4
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-four"}>
                   5
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-five"}>
                  6
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-six"}>
                   7
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-seven"}>
                   8
                  </Link>
                </li>
              
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};


export default MobileNavMenu;
