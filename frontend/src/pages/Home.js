import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { HeroHeader } from 'components/HeroHeader';
import { Navbar } from 'components/Navbar';

export const Home = () => {
  return (
    <>
    <Navbar />
    <HeroHeader/>
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Filip Foto Film</span></Headline>
        <p>Filips Photography</p>
        <ButtonLink to="/Photo">
            <Buttons type="button">Photo</Buttons>
        </ButtonLink>
        <p>Filip Videoproducer</p>
        <ButtonLink to="/Video">
            <Buttons type="button">Video</Buttons>
        </ButtonLink>
        <p>Filips studio</p>
        <ButtonLink to="/Studio">
            <Buttons type="button">Studio</Buttons>
        </ButtonLink>        
        <p>About Filip</p>
        <ButtonLink to="/About">
            <Buttons type="button">About</Buttons>
        </ButtonLink>        
        <p>Hire Filip - the process</p>
        <ButtonLink to="HowTo">
            <Buttons type="button">HowTo</Buttons>
        </ButtonLink>        
        <p>Filip contact</p>
        <ButtonLink to="/Contact">
            <Buttons type="button">Contact</Buttons>
        </ButtonLink>
        <p>Homepage</p>
        <ButtonLink to="/">
            <Buttons type="button">Back Home</Buttons>
        </ButtonLink>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;