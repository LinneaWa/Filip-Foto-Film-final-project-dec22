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
        <SectionHeader>Featured</SectionHeader>
        <FeaturedProjectWrapper>
          {videos.map((video) => {
            return (
              <ProjectCard
                key={video._id}
                href={video.link}>
                <ThumbnailWrapper>
                  <Video autoPlay controls muted loop playsInline >
                    <source src={video['video']} type="video/mp4"/>
                  </Video>
                  <InfoWrapper>
                    <InfoHeader>{video['title']}</InfoHeader>
                    <Info>{video['text']}</Info>
                  </InfoWrapper>
                </ThumbnailWrapper>
              </ProjectCard>
            );
          })}
        </FeaturedProjectWrapper>
        </InnerWrapper>
        </OuterWrapper>
  );
}
const OuterWrapper = styled.section`
width: 100%;
background-color:  rgb(208, 215, 208);
padding-bottom: 50px;
padding-top: 30px;
// background-color: ${(props) => props.backColor};
`

const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const SectionHeader = styled.h2`
// background-color: ${(props) => props.color};
background-color: rgb(148, 160, 148);
color: white;
font-family: 'Montserrat', sans-serif;
display: inline-block;
font-size: 22px;
line-height: 1;
padding: 5px 10px;
margin: 20px 0 20px 0;
line-height: 1;
`;

const FeaturedProjectWrapper = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media (max-width: 800px) {

  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  /* background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  } */
`;

const Video = styled.video`
width: 100%;
`;

const InfoWrapper = styled.div`
background-color: whitesmoke;
position: absolute;
left: 70%;
right: -30%;
padding: 20px;
`;

const InfoHeader = styled.p`
  font-family: 'Montserrat', sans-serif;
  // color: ${(props) => props.color};
  color: rgb(50, 50, 50);
  font-size: 16px;
  text-align: left;
  ${ProjectCard}:hover & {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const Info = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgb(50, 50, 50);
  text-align: left;
  font-size: 12px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;