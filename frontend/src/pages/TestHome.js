import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';

export const TestHome = () => {
  return (
    <>
    <Navbar />
    <Header>          
        <Hero autoPlay muted loop playsinline className="hero-video">
            <source src='https://filippilthammar.se/FilipFotoFilm/Videos/Headers/HeaderFoto_1.mp4' type="video/mp4"/>
        </Hero>
        <HeaderHeadline>
            <h1>Skapa säljande video och bilder.</h1><h1>Jag hjälper dig från start till mål.</h1>
        </HeaderHeadline>
    </Header>
    <OuterWrapper>
    <InnerWrapper>
    <ExampleTextDiv><p>Att skapa en video eller fixa snygga bilder till sin hemsida, sina sociala medier eller en presentation på en mässa behöver inte vara en svår, dyr eller långsam uppgift. Med lång erfarenhet och ett kreativt tankesätt hjälper jag dig skapa personligt och professionellt innehåll.</p></ExampleTextDiv>

    <Links to="/About">
    <ThumbnailWrapperAbout url='https://filippilthammar.se/FilipFotoFilm/Images/startsida/startsidaAbout.jpg'>
        <InfoWrapperAbout>
            <InfoHeader>Filip Pilthammar</InfoHeader>
            <Info>Videoproducent och fotograf med över 10 års professionell erfarenhet.</Info>
            <MoreInfo>Läs mer</MoreInfo>
        </InfoWrapperAbout>
    </ThumbnailWrapperAbout>
    </Links>
    <ExampleTextDiv><p>Kika på projekt jag jobbat med tidigare.</p></ExampleTextDiv>

    <Galleries>
    <Links to="/Video">
    <RowWrapper url='https://filippilthammar.se/FilipFotoFilm/Images/thumbnails/videothumbnails/Socialamedier.jpg'>
        <InfoWrapperGalleries>
            <InfoHeaderGall>Videoexempel</InfoHeaderGall>
            <InfoGall>Många olika typer och användningsområden</InfoGall>
        </InfoWrapperGalleries>
    </RowWrapper>
    </Links>
    <Links to="/Photo">
    <RowWrapper url='https://filippilthammar.se/FilipFotoFilm/Images/modell/LinneaSilhuett.jpg'>
        <InfoWrapperGalleries>
            <InfoHeaderGall>Fotoexempel</InfoHeaderGall>
            <InfoGall>Vilken bildtyp är du intresserad av?</InfoGall>
        </InfoWrapperGalleries>
    </RowWrapper>
    </Links>
    </Galleries>

    <Links to="/Studio">
    <ExampleTextDivStudio>
        <InfoHeader>Använd min studio</InfoHeader>
        <Info>I en videostudio kan du skapa snygga och professionella videor snabbt och billigt. Min studio står redo för dina behov.</Info>
        <MoreInfo>Läs mer</MoreInfo>
    </ExampleTextDivStudio>
    </Links>
    <ThumbnailWrapper url='https://filippilthammar.se/FilipFotoFilm/Images/startsida/StartsidaStudio.jpg'></ThumbnailWrapper>

    <ExampleTextDiv><p>Du behöver inte ha en solklar plan för det innehåll du vill skapa. Jag hjälper dig tänka smart kring innehåll och form.</p></ExampleTextDiv>

    <Links to="/Process">
    <ExampleTextDivProcess>            
        <InfoHeader>Hur funkar det?</InfoHeader>
        <Info>Såhär går det till, steg för steg, när du och jag skapar en video eller en bildserie tillsammans.</Info>
        <MoreInfo>Läs mer</MoreInfo>
    </ExampleTextDivProcess>
    </Links>
    <ThumbnailWrapper url='https://filippilthammar.se/FilipFotoFilm/Images/startsida/StartsidaProcess.jpg'></ThumbnailWrapper>

    <ExampleTextDiv><p>Jag ser mycket fram emot att du kontaktar mig och att vi kan börja diskutera hur video och bilder kan hjälpa dig eller ditt företag.</p></ExampleTextDiv>
    <Links to="/Contact">
    <ThumbnailWrapperContact url='https://filippilthammar.se/FilipFotoFilm/contactTest.jpeg'>
        <InfoWrapperContact>
            <InfoHeader>Kontakta mig direkt</InfoHeader>
            <Info>Berätta om din idé!</Info>
        </InfoWrapperContact>
    </ThumbnailWrapperContact>
    </Links>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const OuterWrapper = styled.section`
    background-color:  rgb(208, 215, 208);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
const InnerWrapper = styled.section`
    width: 100%;
    max-width: 1800px;
    justify-content: center;
    align-items: center;
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
  font-family: 'Fjalla One', sans-serif;
  font-size: 33px;
  color: antiquewhite;
  position: absolute;
  display: flex;
  flex-direction: column;
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
`

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  background-image:url(${(props) => props.url});
`;

const InfoHeader = styled.p`
  font-size: 45px;
  text-align: center;
  width: auto;
`;

const Info = styled.p`
  text-align: center;
  font-size: 35px;
`;

const ExampleTextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-family: 'Montserrat', sans-serif;
    background-color:  rgb(208, 215, 208);

    p {
    border: 5px solid white;
    //margin: 80px;
    padding: 50px;
    font-weight: bold;
    text-align: center;
    color: white;
    margin-left: 20%;
    margin-right: 20%;
    }
`;

const Links = styled(Link)`
    text-decoration: none;
`;

const MoreInfo = styled.p`
    border: 3px solid white;
    padding: 10px;
    margin-bottom: 40px;
    font-size; 25px;

`

//Individual styling for about section

const ThumbnailWrapperAbout = styled.div`
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  height: 600px;
  width: 98%;
  //display: flex;
  //justify-content: center;
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

const InfoWrapperAbout = styled.div`
    width: 30%;
    color: antiquewhite;
    position: absolute;
    font-family: 'Fjalla One', sans-serif;
    top: 30%;
    right: 10%;
    padding: 20px;
`;

//Individual styling for Photo and Video section

const Galleries = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 100px;
`
const RowWrapper = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  text-align: center;
  height: 40vw;
  width: 40vw;
  font-size: 24px;
  background-image: url(${(props) => props.url});
  margin: 20px;
  z-index: 2;
`

const InfoWrapperGalleries = styled.div`
    color: antiquewhite;
    font-family: 'Fjalla One', sans-serif;
    position: relative;
    height: 100%;
    width: 100%;
    font-weight: bold;
`;

const InfoHeaderGall = styled.p`
  font-size: 45px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 1%;
`;

const InfoGall = styled.p`
  text-align: center;
  font-size: 35px;
  width: 100%;
  position: absolute;
  bottom: 2%;
`;

// Individual styling for Studio section

const ExampleTextDivStudio = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color:  rgb(208, 215, 208);

    p {
    margin: 20px;
    font-family: 'Fjalla One', sans-serif;
    font-weight: bold;
    text-align: center;
    color: white;
    }
`;

// Individual styling for Process section

const ExampleTextDivProcess = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color:  rgb(208, 215, 208);

    p {
    margin: 20px;
    font-family: 'Fjalla One', sans-serif;
    font-weight: bold;
    text-align: center;
    color: white;
    }
`;

// Individual styling for contact section

const ThumbnailWrapperContact = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  height: 700px;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  margin-bottom: 20px;
  font-size: 24px;
  background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
`;

const InfoWrapperContact = styled.div`
    color: antiquewhite;
    font-family: 'Fjalla One', sans-serif;
    position: absolute;
    top: 20%;
    left: 15%;
    font-weight: bold;
    padding: 20px;
`;