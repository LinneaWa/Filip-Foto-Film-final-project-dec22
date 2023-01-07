import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { PhotoGallery } from 'components/PhotoGallery';
import { PhotoFeatured } from 'components/PhotoFeatured';
import { TEST2lightbox } from 'components/TEST2lightbox';
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';

export const Foretag = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerForetag'} />
    <InnerWrapper>
        <Headline><span>Företag</span></Headline>
        {/*<ForetagPhotoGallery /> */}
        <PhotoFeatured tag={'featuredForetag'}/>
        <TEST2lightbox />
        <ButtonLink to="/"><Buttons type="button">Back Home</Buttons></ButtonLink>
    </InnerWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;