import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { VideoGalleryCard } from 'components/VideoGalleryCard';

export const Video = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerVideo'} />
    <OuterWrapper>
    <InnerWrapper>
        <VideoGalleryCard tag={'thumbnailVideo'} />
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