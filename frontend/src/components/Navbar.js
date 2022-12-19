import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src="./assets/logowhite.png" alt="company logo"></Logo>
      <div>
        <select>
          <option value="0">Photo</option>
          <option value="1">Företagsfoto</option>
          <option value="2">Modellfoto</option>
          <option value="3">Bröllopsfoto</option>
          <option value="4">Familjefoto</option>
          <option value="5">Drönarfoto</option>
          <option value="6">360°-foto</option>
        </select>
        <select>
          <option value="0">Video</option>
          <option value="1">Musikvideo</option>
          <option value="2">Event/festival</option>
          <option value="3">Utbildningsmaterial</option>
          <option value="4">Social media</option>
          <option value="5">Sport</option>
        </select>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
border: 2px solid red;
box-sizing: border-box;
width: 100%;
padding: 10px;
display: flex;
justify-content: space-between;
position: absolute;
z-index: 1;
`

const Logo = styled.img`
height: 60px;
`