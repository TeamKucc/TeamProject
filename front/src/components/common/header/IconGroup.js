import React from "react";
import { Link } from "react-router-dom";


const IconGroup = ({
  iconWhiteClass,
  user,
  onLogout,
  onClick,
  onChange,
}) => {

  let UserId = null;
  if (user) {
    UserId = user.replace(/['"]+/g, '')
  }
  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={e => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" name="word" onChange={onChange}/>
            <button className="button-search" onClick={onClick}>
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>

            {user ? (
              <>
                <li>
                  <Link to={`/userInfo/${UserId}`}>
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
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                  <Link to={"/register"}>
                      Register
                    </Link>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};




export default IconGroup;
