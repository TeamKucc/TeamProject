import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <Footers>
        <hr />
        프로젝트용 | 대표 최민준 | 사업자 등록 번호 000-00-00000 | 문의메일
        1020alswns@gmail.com
        <br />
        통신 판매번호 2020-서울강남-00000 | 주소 서울특별시 서초구 서초동
        서초대로74길 33
        <br />
        {/* <Logo>
                    <img
                        width ="50%"
                        height="50%"
                        src="https://pbs.twimg.com/profile_images/646868921916592128/YaNX1Jnk_400x400.jpg"
                        alt="logo"
                    />
                </Logo> */}
      </Footers>
    );
  }
}
const Footers = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  text-align: left;
`;
export default Footer;
