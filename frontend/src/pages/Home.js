import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

export const Home = () => {
  return (
    <>
    <Navbar />
    <Header/>
    <OuterWrapper>
    <InnerWrapper>
        <ButtonLink to="/About"><Buttons type="button">About</Buttons></ButtonLink> 
        <Galleries>
        <ButtonLink to="/Photo"><Buttons type="button">Photo</Buttons></ButtonLink>
        <ButtonLink to="/Video"><Buttons type="button">Video</Buttons></ButtonLink>
        </Galleries>
        <ButtonLink to="/Studio"><Buttons type="button">Studio</Buttons></ButtonLink>        
        <ButtonLink to="/HowTo"><Buttons type="button">HowTo</Buttons></ButtonLink>        
        <ButtonLink to="/Contact"><Buttons type="button">Contact</Buttons></ButtonLink>
        <ButtonLink to="/"><Buttons type="button">Back Home</Buttons></ButtonLink>

    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;

const Galleries = styled.div`
display: flex;
flex-direction: row;
`