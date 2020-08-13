import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


const MobileNavMenu = ({ user, onLogout }) => {
  let UserId = null;
  if (user) {
    UserId = user.replace(/['"]+/g, '')
  }
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        {user ? (
          <>
            <li>
              <Link href={`/userInfo/${UserId}`}>
                my account
              </Link>
            </li>
            <li>
              <Link onClick={onLogout}>
                로그아웃
              </Link>
            </li>
          </>
        ) : (
            <>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  Register
        </Link>
              </li>
            </>
          )}
      </ul>
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
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>
                2
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    1
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-two"}>
                    2
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
