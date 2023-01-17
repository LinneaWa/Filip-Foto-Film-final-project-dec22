import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { Infopage } from 'components/InfoPage';

export const About = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerAbout'} />
    <OuterWrapper>
    <InnerWrapper>
      <Infopage tag={'aboutPage'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}