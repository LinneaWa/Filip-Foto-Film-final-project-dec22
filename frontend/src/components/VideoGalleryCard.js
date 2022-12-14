import React, { useState, useEffect} from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { VIDEO_URL } from 'utils/utils';

export const VideoGalleryCard = ({ tag }) => {
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
      <OuterWrapper>
      <InnerWrapper>
        <FeaturedProjectWrapper>
          {videos.map((video) => {
            return (
              <ProjectCard
                key={video._id}
                href={video.link}>
                <ThumbnailWrapper>
                  <Video autoPlay muted loop playsInline >
                    <source src={video['video']} type="video/mp4"/>
                  </Video>
                  <ThumbnailTitle>{video.title.toUpperCase()}</ThumbnailTitle>
                </ThumbnailWrapper>
                <ProjectInfoHeader>
                  {video['title']}
                </ProjectInfoHeader>
                <ProjectInfo>{video['text']}</ProjectInfo>
              </ProjectCard>
            );
          })}
        </FeaturedProjectWrapper>
        </InnerWrapper>
        </OuterWrapper>
        </>
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
  max-width: 1100px;
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
background-color: olive;
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

const ProjectCard = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  position: relative;
  &:hover {
    transform: translateY(-1%);
    transition: transform 0.3s;
  } 
`;

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  text-align: center;
  height: 300px;
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

const ThumbnailTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: white;
  position: absolute;
`;

const ProjectInfoHeader = styled.h2`
  font-family: 'Montserrat', sans-serif;
  // color: ${(props) => props.color};
  font-size: 18px;
  ${ProjectCard}:hover & {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const ProjectInfo = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: black;
  font-size: 16px;
  line-height: 1.4;
  ${ProjectCard}:hover & {
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;