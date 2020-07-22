import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
  justify-content:space-between;
`

const Register = () => {
    return (
        <Wrapper>
            <Link to="/register/buyer">일반회원</Link>
            
            <Link to="/register/deal">판매회원</Link>
        </Wrapper>
    )
}

export default Register