// import { InnerWrapper, OuterWrapper } from 'GlobalStyles';
import styled from 'styled-components/macro'
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import { VIDEO_URL } from 'utils/utils';

export const Header = ({ tag }) => {

  const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  const fetchVideos = () => {
    // setLoading(true);
    fetch(`${VIDEO_URL}/tag/${tag}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.body))
      .catch((error) => console.error(error))
      // .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    fetchVideos();
  }, []);




  return (
    <HeroWrapper>
      {videos.map((video) => {
        return (
          <HeroContainer key={video._id}>
            {isTabletOrMobile && <Hero autoPlay muted loop playsinline poster={video['poster']} className="hero-video">
              <source src={video['videoLowRes']} type="video/mp4"/>
            </Hero>}
            {isDesktop && <Hero autoPlay muted loop playsinline poster={video['poster']} className="hero-video">
              <source src={video['video']} type="video/mp4"/>
            </Hero>}
            <Headline><h1>{video['text']}</h1></Headline>
          </HeroContainer>
        );
      })}
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
display: flex;
`

const HeroContainer = styled.div`
display: flex;
position: relative;
height: 40vh;
width: 100%;

@media (min-width: 668px) {
  height: 50vh;
  width: 100%;
}

@media (min-width: 1024px) {
  height: 50vh;
  width: 100%;    
}
`

const Hero = styled.video`
  min-width: 100vw;
  min-height: 40vh; 
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: -5;

  @media (min-width: 668px) {
    min-width: 100vw;
    min-height: 50vh;
  }

  @media (min-width: 1024px) {
    min-width: 100vw;
    min-height: 60vh;
  }
`;

const Headline = styled.div`
  box-sizing: border-box;
  font-family: 'Fjalla One', sans-serif;
  font-size: 16px;
  color: antiquewhite;
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);

  @media (min-width: 668px) {
    font-size: 28px;
    padding: 60px;
  }

  @media (min-width: 1024px) {
    font-size: 33px;
    padding: 80px;
  }

`
