import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { PhotoGallery } from 'components/PhotoGallery';
import { PhotoFeatured } from 'components/PhotoFeatured';
import { TEST2lightbox } from 'components/TEST2lightbox';
import { Navbar } from 'components/Navbar';

export const Foretag = () => {
  return (
    <>
    <Navbar />
    <InnerWrapper>
        <Headline><span>Företag</span></Headline>
        {/*<ForetagPhotoGallery /> */}
        <PhotoFeatured />
        <TEST2lightbox />
        <ButtonLink to="/"><Buttons type="button">Back Home</Buttons></ButtonLink>
    </InnerWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;