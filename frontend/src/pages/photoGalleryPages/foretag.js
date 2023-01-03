import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { ForetagPhotoGallery } from 'components/ForetagPhotoGallery';
import { ForetagFeatured } from 'components/ForetagFeatured';
import { TEST2lightbox } from 'components/TEST2lightbox';
import { Navbar } from 'components/Navbar';

export const Foretag = () => {
  return (
    <>
    <Navbar />
    <InnerWrapper>
        <Headline><span>Företag</span></Headline>
        {/*<ForetagPhotoGallery /> */}
        <ForetagFeatured />
        <TEST2lightbox />
        <ButtonLink to="/"><Buttons type="button">Back Home</Buttons></ButtonLink>
    </InnerWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;