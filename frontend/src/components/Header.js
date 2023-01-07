// import { InnerWrapper, OuterWrapper } from 'GlobalStyles';
import styled from 'styled-components/macro'
import React, { useState, useEffect } from 'react';
import { VIDEO_URL } from 'utils/utils';

export const Header = ({ tag }) => {

  const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(false);


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
    <div>
      {videos.map((video) => {
        return (
          <HeroContainer key={video._id}>
            <Hero autoPlay muted loop playsinline className="hero-video">
              <source src={video['video']} type="video/mp4"/>
            </Hero>
            <Headline><h1>{video['text']}</h1></Headline>
          </HeroContainer>
        );
      })}
    </div>
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
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  width: 100%;
  padding: 20px;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #f1f1f1;
`
