import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { VIDEO_URL } from 'utils/utils';

export const VideoGallery = ({ tag }) => {
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
    <>
        <Wrapper>
          {videos.map((video) => {
            return (
              <Card key={video._id}>
                <ThumbnailWrapper>                
                    <Video autoPlay controls muted loop poster={video['poster']} playsInline >
                        <source src={video['video']} type="video/mp4"/>
                    </Video>
                </ThumbnailWrapper>
                <Link to={video.link}>
                  <Buttons type="button">Se hela videon här!</Buttons>
                </Link>
              </Card>
            );
          })}
        </Wrapper>
        </>
  );
}


const Wrapper = styled.div`
  text-align: left;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
`;

const Video = styled.video`
width: 100%;
`;

const Card = styled.div`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  &:hover {
    transform: translateY(-1%);
    transition: transform 0.3s;
  } 
`;

const ThumbnailWrapper = styled.div`
  height: 390px;
  padding-bottom: 20px;
  font-size: 24px;
`;

const Buttons = styled.button`
cursor: pointer;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
font-size: 18px;
color: rgb(109, 123, 109);
background-color:  whitesmoke;
border: 3px solid rgb(148, 160, 148);
border-radius: 10px;
padding: 10px;
`