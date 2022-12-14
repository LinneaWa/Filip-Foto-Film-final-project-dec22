import React from 'react';
import styled from 'styled-components/macro'
import { OuterWrapper, InnerWrapper, Buttons, Headline } from '../GlobalStyles';
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <OuterWrapper>
    <InnerWrapper>
        <Headline><span>About Filip Foto Film</span></Headline>

        <p>Homepage</p>
        <ButtonLink to="/">
            <Buttons type="button">Back Home</Buttons>
        </ButtonLink>
    </InnerWrapper>
    </OuterWrapper>
  );
}

const ButtonLink = styled(Link)`
width: 100%;
`;