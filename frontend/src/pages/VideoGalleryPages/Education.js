import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { VideoFeatured } from 'components/VideoFeatured';
import { VideoGallery } from 'components/Videogallery';

export const Education = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerEducation'} />
    <OuterWrapper>
    <InnerWrapper>
      <VideoFeatured tag={'featuredEducation'}/>
      <VideoGallery tag={'otherEducation'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;