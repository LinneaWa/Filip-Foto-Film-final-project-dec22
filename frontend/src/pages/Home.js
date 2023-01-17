import React from 'react';
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';


export const Home = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerHome'} />
    <OuterWrapper>
    <InnerWrapper>

    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}
