import React from 'react';
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';

export const TestHome = () => {

  const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <>
    <Navbar />
    <Header>          
        {isDesktop && <Hero autoPlay muted loop playsinline poster="https://filippilthammar.se/FilipFotoFilm/Images/thumbnails/headerThumbnails/HeroVideo.jpg" className="hero-video">
            <source src='https://filippilthammar.se/FilipFotoFilm/Videos/Headers/HeroVideo.mp4' type="video/mp4"/>
        </Hero>}
        {isTabletOrMobile && <Hero autoPlay muted loop playsinline poster="https://filippilthammar.se/FilipFotoFilm/Images/thumbnails/headerThumbnails/HeaderFoto.jpg" className="hero-video">
            <source src='https://filippilthammar.se/FilipFotoFilm/Videos/Headers/HeroVideo.mp4' type="video/mp4"/>
        </Hero>}
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
            <InfoContact>Berätta om din idé!</InfoContact>
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
  height: 50vh;
  max-width: 100vw;

  @media (min-width: 668px) {
    height: 50vh;
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    height: 70vh;
    max-width: 100vw; 
  }
`

const Hero = styled.video`
  min-width: 100vw;
  min-height: 50vh;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;

  @media (min-width: 668px) {
    min-width: 100vw;
    min-height: 60vh;
  }

  @media (min-width: 1024px) {
    min-width: 100vw;
    min-height: 70vh;   
  }
`;

const HeaderHeadline = styled.div`
  box-sizing: border-box;
  font-family: 'Fjalla One', sans-serif;
  font-size: 18px;
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

  h1 {
    margin: 5px;
  }

  @media (min-width: 668px) {
    font-size: 22px;
    padding: 60px;

  }

  @media (min-width: 1024px) {
    font-size: 33px;
    padding: 80px;
  }
`

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  height: 500px;
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
  font-size: 30px;
  text-align: center;
  width: auto;

  @media (min-width: 668px) {
    font-size: 35px;
  }

  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;

const Info = styled.p`
  text-align: center;
  font-size: 24px;

  @media (min-width: 668px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 33px;
  }
`;

const ExampleTextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    background-color:  rgb(208, 215, 208);

  p {
    border-left: 5px solid white;
    border-right: 5px solid white;
    padding: 30px;
    font-weight: bold;
    text-align: center;
    color: white;
    margin-left: 5%;
    margin-right: 5%;

    @media (min-width: 668px) {
      font-size: 28px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
      padding: 50px;
      margin-left: 20%;
      margin-right: 20%;
    }
  }

`;

const Links = styled(Link)`
    text-decoration: none;
`;

const MoreInfo = styled.p`
    border: 3px solid white;
    padding: 10px;
    margin-bottom: 40px;
    font-size: 25px;

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
  width: 100%;
  font-size: 24px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
  margin-top: 20px;
  margin-bottom: 20px;
  z-index: 2;
`;

const InfoWrapperAbout = styled.div`
    width: 50%;
    color: antiquewhite;
    position: absolute;
    font-family: 'Fjalla One', sans-serif;
    top: 10%;
    right: 10%;
    padding: 20px;


  @media (min-width: 668px) {
    width: 30%;
    top: 15%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    top: 20%;
  }

`;

//Individual styling for Photo and Video section

const Galleries = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 100px;

    @media (min-width: 668px) {
      flex-direction: row;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
    }
`
const RowWrapper = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  text-align: center;
  height: 85vw;
  width: 85vw;
  background-image: url(${(props) => props.url});
  margin: 20px;
  z-index: 2;

  @media (min-width: 668px) {
    height: 45vw;
    width: 45vw;
  }

  @media (min-width: 1024px) {
      height: 45vw;
      width: 45vw;
  }
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
  font-size: 30px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 1%;

  @media (min-width: 668px) {
    font-size: 35px;
  }

    @media (min-width: 1024px) {
      font-size: 45px;
    }
`;

const InfoGall = styled.p`
  text-align: center;
  font-size: 22px;
  width: 100%;
  position: absolute;
  bottom: 2%;

  @media (min-width: 668px) {
    font-size: 23px;
  }

    @media (min-width: 1024px) {
      font-size: 35px;
    }
`;

// Individual styling for Studio section

const ExampleTextDivStudio = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color:  rgb(208, 215, 208);
    margin-bottom: 50px;

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
    margin-bottom: 50px;

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
  margin-bottom: 20px;
  font-size: 24px;
  background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});

`;

const InfoWrapperContact = styled.div`
    color: white;
    font-family: 'Fjalla One', sans-serif;
    position: absolute;
    width: 50%;
    top: 10%;
    left: 10%;
    font-weight: bold;
    padding: 20px;

    @media (min-width: 668px) {
    width: 30%;
    top: 15%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    top: 20%;
  }
`;

const InfoContact = styled.p`
  text-align: center;
  font-size: 35px;
  border: 3px solid white;
  padding: 10px;


  @media (min-width: 668px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 33px;
  }
`;