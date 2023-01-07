import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { PhotoFeatured } from 'components/PhotoFeatured';

export const Modell = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerModell'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Modellfoto Filip Foto Film</span></Headline>
        <PhotoFeatured tag={'featuredModell'}/>
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