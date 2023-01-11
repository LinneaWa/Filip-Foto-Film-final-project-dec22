import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { PhotoFeatured } from 'components/PhotoFeatured';
import { PhotoGallery } from 'components/PhotoGallery';

export const Dronare = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerDronare'} />
    <OuterWrapper>
    <InnerWrapper>
        <PhotoFeatured tag={'featuredDronare'}/>
        <PhotoGallery tag={'lightboxDronare'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;