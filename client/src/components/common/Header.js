import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavMenu from './header/NavMenu';
import IconGroup from './header/IconGroup';
import MobileMenu from './header/MobileMenu';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';

const Header = ({
  headerPaddingClass,
  headerPositionClass,
  headerBgClass,
  onLogout,
  user,
  onClick,
  onChange,
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  let UserId = null;

  if (user) {
    UserId = user.replace(/['"]+/g, '');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className={`header-area clearfix`}>
      <div
        className={`sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? 'stick' : ''
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4 logo pb-30">
              {/* header logo */}
              {/* <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" /> */}
              <Link to="/">
                <img src={logo} alt="로고" />
              </Link>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block pt-10">
              {/* Nav menu */}
              <NavMenu user={user} onLogout={onLogout} />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup
                user={user}
                onLogout={onLogout}
                onClick={onClick}
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <MobileMenu
          user={user}
          onLogout={onLogout}
          onClick={onClick}
          onChange={onChange}
        />
      </div>
    </header>
  );
};

export default Header;
