import React from 'react';
import styled from "styled-components";

function AboutProjects2(){
    return(
        <>
        <WelcomeMessage>
            Welcome to the About Project Page!
        </WelcomeMessage>
        </>
    );
}

export default AboutProjects2;

const WelcomeMessage = styled.h3`
padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
`