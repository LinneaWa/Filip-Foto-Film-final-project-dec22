import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { PhotoGalleryCard } from 'components/PhotoGalleryCard';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

export const Photo = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerPhoto'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Filip Foto Film - Photography</span></Headline>
        <p>Homepage</p>
        <ButtonLink to="/">
            <Buttons type="button">Back Home</Buttons>
        </ButtonLink>
        <p>Galleries</p>
        <PhotoGalleryCard tag={'thumbnailPhoto'} />
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;