import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { VideoFeatured } from 'components/VideoFeatured';

export const Event = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerEvent'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Eventvideos Filip Foto Film</span></Headline>
        <VideoFeatured tag={'featuredEvent'}/>
        <ButtonLink to="/">
            <Buttons type="button">Back Home</Buttons>
        </ButtonLink>
    </InnerWrapper>
    </OuterWrapper>
    </>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;