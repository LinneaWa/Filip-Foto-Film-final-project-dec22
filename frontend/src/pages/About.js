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

    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;