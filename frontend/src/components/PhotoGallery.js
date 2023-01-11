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
        <FeaturedProjectWrapper>
          {photos.map((photos) => {
            return (
              <PhotoCard key={photos._id}>
                <ThumbnailWrapper url={photos.image}></ThumbnailWrapper>
              </PhotoCard>
            );
          })}
        </FeaturedProjectWrapper>
        </>
  );
}


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
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
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
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  background-image:
    url(${(props) => props.url});
`;
