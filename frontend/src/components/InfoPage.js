import React, { useState, useEffect} from 'react';
import styled from 'styled-components/macro'
import { PHOTO_URL } from 'utils/utils';

export const Infopage = ({ tag }) => {
  const [photos, setPhotos] = useState([]);


  const fetchPhotos = () => {
    fetch(`${PHOTO_URL}/tag/${tag}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data.body))
      .catch((error) => console.error(error))
  }
  
  useEffect(() => {
    fetchPhotos();
  }, []);


  return (
    <OuterWrapper>
      <InnerWrapper>
        <FeaturedWrapper>
          {photos.map((photo) => {
            return (
              <FeaturedPhotoCard
                key={photo._id}>
                <InfoWrapper>
                  <InfoHeader>{photo['title']}</InfoHeader>
                  <Info>{photo['text']}</Info>
                </InfoWrapper>
                <ThumbnailWrapper url={photo.image}></ThumbnailWrapper>
              </FeaturedPhotoCard>
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
  width: 100%;
  margin: 0;
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

const FeaturedPhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (min-width: 668px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    &:nth-child(odd) { flex-direction: row; }
  }
`;

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  height: 80vw;
  width: 80vw;
  background-image: url(${(props) => props.url});

  @media (min-width: 1024px) {
    height: 30vw;
    width: 30vw;
  }
`;

const InfoWrapper = styled.div`
  background-color: whitesmoke;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: auto;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  @media (min-width: 1024px) {
    width: 40vw;
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
  font-size: 18px;

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;