import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

export const Studio = ({ tag }) => {
  return (
    <>
    <Navbar />
    <Header tag={'headerStudio'} />
    <OuterWrapper>
    <InnerWrapper>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
