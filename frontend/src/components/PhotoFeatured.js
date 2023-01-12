import React, { useState, useEffect} from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { PHOTO_URL } from 'utils/utils';

export const PhotoFeatured = ({ tag }) => {
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
    <OuterWrapper>
      <InnerWrapper>
        <FeaturedWrapper>
          {photos.map((photo) => {
            return (
              <Card
                key={photo._id}>
                <ThumbnailWrapper url={photo.image}></ThumbnailWrapper>
                <InfoWrapper>
                  <InfoHeader>{photo['title']}</InfoHeader>
                  <Info>{photo['text']}</Info>
                </InfoWrapper>
              </Card>
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

const Card = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  &:nth-child(odd) { flex-direction: row; }
`;

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 40vw;
  width: 40vw;
  background-image: url(${(props) => props.url});
`;

const InfoWrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: auto;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;

const InfoHeader = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgb(109, 123, 109);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
`;

const Info = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: rgb(109, 123, 109);
  text-align: center;
  font-size: 20px;
`;