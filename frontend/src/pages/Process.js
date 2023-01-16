import React from 'react';
import { OuterWrapper, InnerWrapper } from '../GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

export const Process = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerHowTo'} />
    <OuterWrapper>
    <InnerWrapper>

    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
