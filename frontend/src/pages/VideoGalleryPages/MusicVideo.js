import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from 'GlobalStyles';
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';

export const MusicVideo = () => {
  return (
    <>
    <Navbar />
    <Header tag={'headerMusicVideo'} />
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>Music videos Filip Foto Film</span></Headline>
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