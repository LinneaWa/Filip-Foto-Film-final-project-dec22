import React from 'react';
import { OuterWrapper, InnerWrapper } from 'GlobalStyles';
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { VideoFeatured } from 'components/VideoFeatured';
import { VideoGallery } from 'components/Videogallery';

export const Event = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerEvent'} />
    <OuterWrapper>
    <InnerWrapper>
        <VideoFeatured tag={'featuredEvent'}/>
        <VideoGallery tag={'otherEvent'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}