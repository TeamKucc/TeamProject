import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

class Header extends Component {
  render() {
    return (
      <Nav>
        {/* <Logo>
          <img
            width="50%"
            height="100%"
            src="https://pbs.twimg.com/profile_images/646868921916592128/YaNX1Jnk_400x400.jpg"
            alt="logo"
          />
        </Logo> */}
        <NavList>
          <NavItem>
            <h2>소개</h2>
          </NavItem>
          <NavItem>
            <h2>게시판</h2>
          </NavItem>
          <NavItem>
            <h2>Etc</h2>
          </NavItem>
          <Button type="primary" shape="round">
            로그인
          </Button>
        </NavList>
      </Nav>
    );
  }
}

export default Header;
// const Logo = styled.div`
//   position: fixed;
//   width: 200px;
//   height: 80px;
// `;

const Nav = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px;
  padding: 20px 20px;
  border-bottom: 1px solid #d1d8e4;
`;

const NavList = styled.ul`
  width: 1080px;
  height: 100px;
  display: flex;
  margin: 0 auto;
`;

const NavItem = styled.li`
  width: 100px;
  margin: 0 auto;
  display: flex;
`;
