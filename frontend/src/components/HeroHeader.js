// import { InnerWrapper, OuterWrapper } from 'GlobalStyles';
import styled from 'styled-components/macro'
import React from 'react';

export const HeroHeader = () => {
  return (
    <HeroContainer>
      <Hero autoPlay muted loop playsinline className="hero-video">
        <source src="./HEROvideo.mp4" type="video/mp4"/>
      </Hero>
      <Headline>
        <h1>Professionell video och bilder till din hemsida, dina sociala medier eller din presentation</h1>
      </Headline>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
border: 2px solid red;
display: flex;
position: relative;
width: 100%;
`

const Hero = styled.video`
  min-width: 100%;
  height: auto;
`;

const Headline = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #f1f1f1;
`