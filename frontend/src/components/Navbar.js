import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/" >
      <Logo src="https://filippilthammar.se/FilipFotoFilm/Icons/logowhite.png" alt="company logo"></Logo>
      </Link>
        <MenuContainer>
        <Dropdown>
            <Links to="/Photo"><span>Foto</span></Links>
            <DropdownContent>
              <Links to="/Photo/foretag" ><p>Företagsfoto</p></Links>
              <Links to="/Photo/dronare" ><p>Drönarfoto</p></Links>
              <Links to="/Photo/modell" ><p>Modellfoto</p></Links>
              <Links to="/Photo/familj" ><p>Familjefoto</p></Links>
              <Links to="/Photo/brollop" ><p>Bröllopsfoto</p></Links>
              <Links to="/Photo/360" ><p>360-foto</p></Links>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
          <Links to="/Video"><span>Video</span></Links>
            <DropdownContent>
              <Links to="/Video/Event" ><p>Event</p></Links>
              <Links to="/Video/Music" ><p>Musicvideo</p></Links>
              <Links to="/Video/SocialMedia" ><p>Sociala Medier</p></Links>
              <Links to="/Video/Education" ><p>Utbildningsmaterial</p></Links>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
          <Links to="/Studio"><span>Studio</span></Links>
          </Dropdown>
          <Dropdown>
          <Links to="/About"><span>Om mig</span></Links>
          </Dropdown>
          <Dropdown>
          <Links to="/Process"><span>Så funkar det</span></Links>
          </Dropdown>
          <Dropdown>
          <Links to="/Contact"><span>Kontakt</span></Links>
          </Dropdown>
      </MenuContainer>
      <MobileMenuContainer>
        <MobileDropdown>          
            <Hamburger>
            <span></span>
            <span></span>
            <span></span>
            </Hamburger>
            <MobileDropdownContent>
            <Links to="/Photo"><span>Foto</span></Links>
            <Links to="/Video"><span>Video</span></Links>
            <Links to="/Studio"><span>Studio</span></Links>
            <Links to="/About"><span>Om mig</span></Links>
            <Links to="/Process"><span>Så funkar det</span></Links>
            <Links to="/Contact"><span>Kontakt</span></Links>
            </MobileDropdownContent>
        </MobileDropdown>
      </MobileMenuContainer>
      </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
`

const Logo = styled.img`
  height: 60px;
`
const MenuContainer = styled.div`
  display: none;
  width: 50vw;
  padding-right: 80px;
  justify-content: space-between;

  @media (min-width: 668px) {
    display: flex;
    width: 70vw;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 50vw;
  }
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  color: antiquewhite;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.9);
  font-size: 20px;
  min-width: 150px;
  padding: 10px;
  z-index: 1;
  @media (max-width: 700px) {
    font-size: 18;
  }
`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  color: antiquewhite;
  font-size: 23px;
  font-weight: bold;

  &:hover ${DropdownContent}{
    display: block
  }

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 23px;
  }
`
const Links = styled(Link)`
  text-decoration: none;
  color: antiquewhite;
  padding-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 668px) {
    padding-bottom: 0px;
  }

`;

const MobileMenuContainer = styled.div`
 position: relative;
 display: flex;

 @media (min-width: 668px) {
    display: none
  }
`
const MobileDropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  flex-direction: column;
  align-items: flex-end;
  color: antiquewhite;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.9);
  font-size: 20px;
  min-width: 130px;
  padding: 10px;
  z-index: 1;
`

const MobileDropdown = styled.div`
  position: relative;
  display: inline-block;
  color: antiquewhite;
  font-size: 23px;
  font-weight: bold;

  &:hover ${MobileDropdownContent}{
    display: flex;
  }

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 23px;
  }
`

const Hamburger = styled.div`
  margin-right: 10px;
  cursor: pointer;


  span {
    height: 3px;
    width: 30px;
    background: antiquewhite;
    display: block;
    margin-bottom: 5px;
    position: relative;

  }
`
