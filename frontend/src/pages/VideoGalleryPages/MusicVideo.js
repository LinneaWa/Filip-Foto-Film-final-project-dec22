import React from 'react';
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { VideoFeatured } from 'components/VideoFeatured';
import { VideoGallery } from 'components/Videogallery';

export const MusicVideo = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerMusicVideo'} />
    <OuterWrapper>
    <InnerWrapper>
      <VideoFeatured tag={'featuredMusicVideo'}/>
      <VideoGallery tag={'otherMusicVideo'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
