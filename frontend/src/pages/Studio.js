import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { StudioHome } from 'components/StudioHome';

export const Studio = ({ tag }) => {
  return (
    <>
    <Navbar />
    <Header tag={'headerStudio'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Filip Foto Film - Studio</span></Headline>
        <StudioHome tag={'studioHome'} />
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