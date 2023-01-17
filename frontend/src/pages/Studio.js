import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Infopage } from 'components/InfoPage';

export const Studio = ({ tag }) => {
  return (
    <>
    <Navbar />
    <Header tag={'headerStudio'} />
    <OuterWrapper>
    <InnerWrapper>
    <Infopage tag={'studioPage'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
