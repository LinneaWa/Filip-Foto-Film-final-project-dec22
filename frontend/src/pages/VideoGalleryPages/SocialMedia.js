import React from 'react';
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { VideoFeatured } from 'components/VideoFeatured';
import { VideoGallery } from 'components/Videogallery';

export const SocialMedia = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerSocialMedia'} />
    <OuterWrapper>
    <InnerWrapper>
      <VideoFeatured tag={'featuredSocialMedia'}/>
      <VideoGallery tag={'otherSocialMedia'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}