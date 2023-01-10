import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Link } from 'react-router-dom'
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { AboutHome } from 'components/AboutHome';
import { VideoHome } from 'components/VideoHome';
import { PhotoHome } from 'components/PhotoHome';
import { StudioHome } from 'components/StudioHome';
import { ProcessHome } from 'components/ProcessHome';
import { ContactHome } from 'components/ContactHome';

export const Home = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerHome'} />
    <OuterWrapper>
    <InnerWrapper>
        <AboutHome tag={'aboutHome'} />
        <Galleries>
        <VideoHome tag={'videoHome'} />
        <PhotoHome tag={'photoHome'} />
        </Galleries>
        <StudioHome tag={'studioHome'} />        
        <ProcessHome tag={'processHome'} />        
        <ContactHome tag={'contactHome'} />
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const Galleries = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`