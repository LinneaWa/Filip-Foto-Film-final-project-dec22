import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import { PHOTO_URL } from 'utils/utils';

export const PhotoGallery = ({ tag }) => {
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
      <Wrapper>
          {photos.map((photos) => {
            return (
              <PhotoCard key={photos._id}>
                <ThumbnailWrapper url={photos.image}></ThumbnailWrapper>
              </PhotoCard>
            );
          })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const PhotoCard = styled.div`
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
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  background-image:
    url(${(props) => props.url});
`;
