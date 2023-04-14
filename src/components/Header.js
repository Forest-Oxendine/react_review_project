import React from "react";
import styled from "styled-components";

function Header (){
    return(
        <>
        <HeaderDiv>
            <HeaderText>Text does not change</HeaderText>
        </HeaderDiv>
        </>
    );
}

export default Header;

const HeaderDiv = styled.div`
    padding: 60px;
    background: black;
`
const HeaderText = styled.h1`
text-align: center;
`