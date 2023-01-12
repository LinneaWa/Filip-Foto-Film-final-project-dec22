import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

export const Process = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerHowTo'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>How To Hire Filip Foto Film</span></Headline>

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