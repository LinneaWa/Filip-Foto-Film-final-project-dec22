import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { PhotoGalleryCard } from 'components/PhotoGalleryCard';

export const Video = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerVideo'} />
    <OuterWrapper>
    <InnerWrapper>
        <PhotoGalleryCard tag={'thumbnailVideo'} />
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
