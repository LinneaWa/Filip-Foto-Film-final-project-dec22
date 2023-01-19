import React, { useState, useEffect} from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { VIDEO_URL } from 'utils/utils';

export const VideoFeatured = ({ tag }) => {
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
    <OuterWrapper>
      <InnerWrapper>
        <FeaturedWrapper>
          {videos.map((video) => {
            return (
              <FeaturedVideoCard
                key={video._id}
                href={video.link}>
                <ThumbnailWrapper>
                  <Video autoPlay controls muted loop poster={video['poster']} playsInline >
                    <source src={video['video']} type="video/mp4"/>
                  </Video>
                </ThumbnailWrapper>
                <InfoWrapper>
                    <InfoHeader>{video['title']}</InfoHeader>
                    <Info>{video['text']}</Info>
                    <Link to={video.link}>
                      <Buttons type="button">Se hela videon här!</Buttons>
                    </Link>
                  </InfoWrapper>
              </FeaturedVideoCard>
            );
          })}
        </FeaturedWrapper>
        </InnerWrapper>
        </OuterWrapper>
  );
}
const OuterWrapper = styled.section`
width: 100%;
background-color:  rgb(208, 215, 208);
`

const InnerWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeaturedWrapper = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FeaturedVideoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    &:nth-child(odd) { flex-direction: row; }
  }
`;

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
width: 100%;
`;

const InfoWrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: auto;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;


  @media (min-width: 668px) {
    
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

const InfoHeader = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgb(109, 123, 109);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 5px;
`;

const Info = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgb(109, 123, 109);
  text-align: center;
  font-size: 20px;

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