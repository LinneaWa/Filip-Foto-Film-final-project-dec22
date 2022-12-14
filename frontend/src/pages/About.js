import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';

export const About = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerAbout'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>About Filip Foto Film</span></Headline>

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