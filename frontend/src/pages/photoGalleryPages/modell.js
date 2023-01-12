import React from 'react';
import { OuterWrapper, InnerWrapper } from 'GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { PhotoFeatured } from 'components/PhotoFeatured';
import { PhotoGallery } from 'components/PhotoGallery';

export const Modell = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerModell'} />
    <OuterWrapper>
    <InnerWrapper>
        <PhotoFeatured tag={'featuredModell'}/>
        <PhotoGallery tag={'lightboxModell'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
