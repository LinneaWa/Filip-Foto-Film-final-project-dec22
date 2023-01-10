import React from 'react';
import styled from 'styled-components/macro'
import { Navbar } from 'components/Navbar';

export const TestHome = () => {
  return (
    <>
    <Navbar />
    <Header>          
        <Hero autoPlay muted loop playsinline className="hero-video">
            <source src='https://filippilthammar.se/FilipFotoFilm/Videos/Headers/HeaderFoto.mp4' type="video/mp4"/>
        </Hero>
        <HeaderHeadline><h1>Hero Headline</h1></HeaderHeadline>
    </Header>
    <OuterWrapper>
    <ExampleTextDiv><p>Placeholder text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></ExampleTextDiv>
    <ThumbnailWrapper url='https://filippilthammar.se/FilipFotoFilm/aboutTest.jpeg'>
        <InfoWrapper>
            <InfoHeader>About</InfoHeader>
            <Info>About Filip and company</Info>
        </InfoWrapper>
    </ThumbnailWrapper>
    <ExampleTextDiv><p>Placeholder text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></ExampleTextDiv>
    <Galleries>
    <RowWrapper url='https://filippilthammar.se/FilipFotoFilm/Images/Sanna.jpg'>
        <InfoWrapper>
            <InfoHeader>Video</InfoHeader>
            <Info>Välkomna att titta in i min studion och boka en tid</Info>
        </InfoWrapper>
    </RowWrapper>
    <RowWrapper url='https://filippilthammar.se/FilipFotoFilm/Images/modell/LinneaSilhuett.jpg'>
        <InfoWrapper>
            <InfoHeader>Photo</InfoHeader>
            <Info>Välkomna att titta in i min studion och boka en tid</Info>
        </InfoWrapper>
    </RowWrapper>
    </Galleries>
    <ThumbnailWrapper url='https://filippilthammar.se/FilipFotoFilm/studioTest.jpeg'>
        <InfoWrapper>
            <InfoHeader>Studio</InfoHeader>
            <Info>Välkomna att titta in i min studion och boka en tid</Info>
        </InfoWrapper>
    </ThumbnailWrapper>
    <ExampleTextDiv><p>Placeholder text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></ExampleTextDiv>
    <ThumbnailWrapper url='https://filippilthammar.se/FilipFotoFilm/contactTest.jpeg'>
        <InfoWrapper>
            <InfoHeader>Process</InfoHeader>
            <Info>Såhär går det till att jobba med mig</Info>
        </InfoWrapper>
    </ThumbnailWrapper>
    <ExampleTextDiv><p>Placeholder text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></ExampleTextDiv>
    <ThumbnailWrapper url='https://filippilthammar.se/FilipFotoFilm/contactTest.jpeg'>
        <InfoWrapper>
            <InfoHeader>Contact</InfoHeader>
            <Info>Berätta om din idé!</Info>
        </InfoWrapper>
    </ThumbnailWrapper>
    </OuterWrapper>
    </>
  );
}

const OuterWrapper = styled.section`
    background-color:  rgb(208, 215, 208);
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

const Header = styled.div`
    display: flex;
    position: relative;
    height: 70vh;
    max-width: 100vw;
`

const Hero = styled.video`
    min-width: 100vw;
    min-height: 70vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
`;

const HeaderHeadline = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #f1f1f1;
`

const Galleries = styled.div`
display: flex;
flex-direction: row;
text-align: center;
  align-items: center;
  justify-content: center;
width: 100%;
`
const RowWrapper = styled.div`
  //background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-image: url(${(props) => props.url});
  margin: 20px;
  z-index: 2;
`

const ThumbnailWrapper = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  height: 500px;
  width: auto;
  max-width: 100vw;
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
  margin: 20px;
  z-index: 2;
`;

const InfoWrapper = styled.div`
    color: antiquewhite;
    position: absolute;
    font-weight: bold;
    top: 50%;
    padding: 20px;
`;

const InfoHeader = styled.p`
  font-size: 30px;
  text-align: left;
`;

const Info = styled.p`
  text-align: left;
  font-size: 24px;
`;

const ExampleTextDiv = styled.div`
    height: 200px;
    text-align: justify;
    background-color:  rgb(208, 215, 208);
    padding: 60px;
`