import React from 'react';
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { PhotoGallery } from 'components/PhotoGallery';
import { PhotoFeatured } from 'components/PhotoFeatured';
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';

export const Foretag = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerForetag'} />
    <OuterWrapper>
    <InnerWrapper>
        <PhotoFeatured tag={'featuredForetag'}/>
        <PhotoGallery tag={'lightboxForetag'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
