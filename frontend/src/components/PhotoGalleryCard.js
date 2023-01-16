import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import { PHOTO_URL } from 'utils/utils';

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
    <Wrapper>
      {photos.map((photo) => {
        return (
          <PhotoCard
            key={photo._id}
                href={photo.link}>
            <ThumbnailWrapper url={photo.image}>
              <ThumbnailTitle>{photo.title.toUpperCase()}</ThumbnailTitle>
            </ThumbnailWrapper>
          </PhotoCard>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 50px;
  margin-top: 50px;

  @media (min-width: 668px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
  }
`;

const PhotoCard = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
`;

const ThumbnailTitle = styled.h2`
  font-family: 'Fjalla One', sans-serif;
  color: antiquewhite;
  position: absolute;
`;
