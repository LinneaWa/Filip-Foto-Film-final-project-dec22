import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

export const NotFound = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerNotFound'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Not found</span></Headline>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;