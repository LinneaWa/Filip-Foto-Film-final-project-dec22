import React from 'react';
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { PhotoFeatured } from 'components/PhotoFeatured';
import { PhotoGallery } from 'components/PhotoGallery';

export const Brollop = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerBrollop'} />
    <OuterWrapper>
    <InnerWrapper>
        <PhotoFeatured tag={'featuredBrollop'}/>
        <PhotoGallery tag={'lightboxBrollop'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
