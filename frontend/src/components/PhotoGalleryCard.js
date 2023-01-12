import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import { PHOTO_URL } from 'utils/utils';
import { Link } from 'react-router-dom'

// https://filip-foto-film-final-project-dec22-gqk64wdp4q-lz.a.run.app/photos

export const PhotoGalleryCard = ({ tag }) => {
  const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(false);


  const fetchPhotos = () => {
    // setLoading(true);
    fetch(`${PHOTO_URL}/tag/${tag}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data.body))
      .catch((error) => console.error(error))
      // .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
    <OuterWrapper>
        <FeaturedProjectWrapper>
          {photos.map((photo) => {
            return (
              <ProjectCard
                key={photo._id}
                href={photo.link}>
                <ThumbnailWrapper url={photo.image}>
                  <ThumbnailTitle>{photo.title.toUpperCase()}</ThumbnailTitle>
                </ThumbnailWrapper>
                <ProjectInfoHeader>
                  {photo['title']}
                </ProjectInfoHeader>
                <ProjectInfo>{photo['text']}</ProjectInfo>
              </ProjectCard>
            );
          })}
        </FeaturedProjectWrapper>
      </OuterWrapper>
        </>
  );
}
const OuterWrapper = styled.section`
width: 100%;
padding: 80px;
background-color:  rgb(208, 215, 208);
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
  border-radius: 20px;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
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