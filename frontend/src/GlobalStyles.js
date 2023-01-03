import styled from 'styled-components/macro'

export const Buttons = styled.button`
  position: relative;
  border: none;
  background: #6580b0;
  cursor: pointer;
  color: #fff;
  width: 100%;
  height: 30px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // background-color: #9fafd3;
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