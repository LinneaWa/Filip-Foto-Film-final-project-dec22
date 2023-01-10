import React, { useState, useEffect} from 'react';
import styled from 'styled-components/macro'
import { PHOTO_URL } from 'utils/utils';

export const StudioHome = ({ tag }) => {
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
        <SectionWrapper>
          {photos.map((photo) => {
            return (
              <LinkWrapper
              key={photo._id}
              href={photo.link}>
                <ImageWrapper url={photo.image}>
                <ThumbnailTitle>{photo.title.toUpperCase()}</ThumbnailTitle>
                </ImageWrapper>
                <InfoWrapper>
                    <InfoHeader>{photo['title']}</InfoHeader>
                    <Info>{photo['text']}</Info>
                </InfoWrapper>
              </LinkWrapper>
            );
          })}
        </SectionWrapper>
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
  width: 100%;
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

const SectionWrapper = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media (max-width: 800px) {

  }
`;

const LinkWrapper = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  &:hover {
    transform: translateY(-1%);
    transition: transform 0.3s;
  } 
`;

// const ImageWrapper = styled.div`
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   text-align: center;
//   height: 400px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   font-size: 24px;
//   background-image: linear-gradient(180deg, #1c232580, #1c232580),
//     url(${(props) => props.url});
//   &:hover {
//     background-image: linear-gradient(#1c23255e, #1c23255e),
//       url(${(props) => props.url});
//   }
// `;

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.url});
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100%;
  width: 100%;
  z-index: 5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px; 

`;

const ThumbnailTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: white;
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
`;

const InfoWrapper = styled.div`
background-color: whitesmoke;
color: black;
width: 100%;
text-align: justify;
padding: 50px 80px;
`;

const InfoHeader = styled.p`
  font-family: 'Montserrat', sans-serif;
  // color: ${(props) => props.color};
  color: rgb(50, 50, 50);
  font-size: 16px;
  text-align: left;
  ${LinkWrapper}:hover & {
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