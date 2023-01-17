import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { Infopage } from 'components/InfoPage';

export const Contact = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerContact'} />
    <OuterWrapper>
    <InnerWrapper>
    <Infopage tag={'contactPage'}/>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
