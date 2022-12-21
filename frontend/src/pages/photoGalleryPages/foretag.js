import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { ForetagPhotoGallery } from 'components/ForetagPhotoGallery';
import { ForetagFeatured } from 'components/ForetagFeatured';

export const Foretag = () => {
  return (
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Företag</span></Headline>
        <ForetagFeatured />
        <ForetagPhotoGallery />
        <p>Homepage</p>
        <ButtonLink to="/">
            <Buttons type="button">Back Home</Buttons>
        </ButtonLink>
    </InnerWrapper>
    </OuterWrapper>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;