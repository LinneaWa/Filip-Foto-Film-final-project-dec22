import styled from 'styled-components/macro'

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  text-align: center;
`;

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:  rgb(208, 215, 208);
`;

export const Headline = styled.h1`
    color: white; 
    width: 100%; 
    text-align: center; 
    border-bottom: 2px solid white; 
    line-height: 0.1em;
    margin: 40px 0 20px;
 span{
    background: #9fafd3;
    padding:0 10px;
    font-weight: normal;
 }
`;