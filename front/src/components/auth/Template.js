import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TemplateBlock = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background:#ffffff;
    display: flex;
    flex-direction: colum;
    justify-content: center;
     align-items: center;
`

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  boder-radius: 2px;
`;

const Template =({children})=>{
    return(
        <TemplateBlock>
            <WhiteBox>
                {children}
            </WhiteBox>
        </TemplateBlock>
    )
}

export default Template