import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { PhotoGalleryCard } from 'components/PhotoGalleryCard';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

export const Photo = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerPhoto'} />
    <OuterWrapper>
    <InnerWrapper>
        <PhotoGalleryCard tag={'thumbnailPhoto'} />
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}