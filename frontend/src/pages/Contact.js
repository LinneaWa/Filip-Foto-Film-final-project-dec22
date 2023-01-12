import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';

export const Contact = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerContact'} />
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