import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { PhotoFeatured } from 'components/PhotoFeatured';

export const Dronare = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerDronare'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Drönare Filip Foto Film</span></Headline>
        <PhotoFeatured tag={'featuredDronare'}/>
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