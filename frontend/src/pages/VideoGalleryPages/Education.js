import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';

export const Education = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerEducation'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Educationvideos Filip Foto Film</span></Headline>
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