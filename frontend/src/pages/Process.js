import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Infopage } from 'components/InfoPage';

export const Process = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerHowTo'} />
    <OuterWrapper>
    <InnerWrapper>
    <Infopage tag={'processPage'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
