import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { HamburgerMenu } from './HamburgerMenu';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/" >
      <Logo src="https://filippilthammar.se/FilipFotoFilm/Icons/logowhite.png" alt="company logo"></Logo>
      </Link>
        <MenuContainer>
        <Dropdown>
            <span>Foto</span>
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
            <span>Video</span>
            <DropdownContent>
              <Links to="/Video/Event" ><p>Event</p></Links>
              <Links to="/Video/Music" ><p>Musicvideo</p></Links>
              <Links to="/Video/SocialMedia" ><p>Sociala Medier</p></Links>
              <Links to="/Video/Education" ><p>Utbildningsmaterial</p></Links>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <span>Om mig</span>
            <DropdownContent>
              <Links to="/About" ><p>Om mig</p></Links>
              <Links to="/process" ><p>Hur det funkar att jobba med mig</p></Links>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <span>Studio</span>
            <DropdownContent>
              <Links to="/Studio" ><p>Min studio</p></Links>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <span>Kontakt</span>
            <DropdownContent>
              <Links to="/Contact" ><p>Kontakta mig</p></Links>
            </DropdownContent>
          </Dropdown>
      </MenuContainer>
      
      <RelativeDiv>
      <Trigger type="checkbox" id="trigger" />
          <Hamburger>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        <SideMenuContainer>
        <SideDropdown>
            <span>Foto</span>
            <SideDropdownContent>
              <Links to="Photo/foretag" ><p>Företagsfoto</p></Links>
              <Links to="Photo/dronare" ><p>Drönarfoto</p></Links>
              <Links to="Photo/modell" ><p>Modellfoto</p></Links>
              <Links to="Photo/familj" ><p>Familjefoto</p></Links>
              <Links to="Photo/brollop" ><p>Bröllopsfoto</p></Links>
              <Links to="Photo/360" ><p>360-foto</p></Links>
            </SideDropdownContent>
          </SideDropdown>
          <SideDropdown>
            <span>Video</span>
            <SideDropdownContent>
              <Links to="Video/Event" ><p>Event</p></Links>
              <Links to="Video/Music" ><p>Musicvideo</p></Links>
              <Links to="Video/SocialMedia" ><p>Sociala Medier</p></Links>
              <Links to="Video/Education" ><p>Utbildningsmaterial</p></Links>
            </SideDropdownContent>
          </SideDropdown>
          <SideDropdown>
            <span>Om mig</span>
            <SideDropdownContent>
              <Links to="/About" ><p>Om mig</p></Links>
              <Links to="/process" ><p>Process</p></Links>
            </SideDropdownContent>
          </SideDropdown>
          <SideDropdown>
            <span>Studio</span>
            <SideDropdownContent>
              <Links to="/Studio" ><p>Min studio</p></Links>
            </SideDropdownContent>
          </SideDropdown>
          <SideDropdown>
            <span>Kontakt</span>
            <SideDropdownContent>
              <Links to="/About" ><p>Kontakta mig</p></Links>
            </SideDropdownContent>
          </SideDropdown>
      </SideMenuContainer>
      </RelativeDiv>
      {/* <HamburgerContainer>
          <Trigger type="checkbox" id="trigger" />
          <Hamburger>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>

          <HamburgerDropDown>
            <DropdownBurger>
              <span>Foto</span>
              <DropdownContentBurger>
                <Links to="Photo/foretag" ><p>Företagsfoto</p></Links>
                <Links to="Photo/dronare" ><p>Drönarfoto</p></Links>
                <Links to="Photo/modell" ><p>Modellfoto</p></Links>
                <Links to="Photo/familj" ><p>Familjefoto</p></Links>
                <Links to="Photo/brollop" ><p>Bröllopsfoto</p></Links>
                <Links to="Photo/360" ><p>360-foto</p></Links>
              </DropdownContentBurger>
            </DropdownBurger>


            <DropdownBurger>
              <span>Video</span>
              <DropdownContentBurger>
                <Links to="Video/Event" ><p>Event</p></Links>
                <Links to="Video/Music" ><p>Musicvideo</p></Links>
                <Links to="Video/SocialMedia" ><p>Sociala Medier</p></Links>
                <Links to="Video/Education" ><p>Utbildningsmaterial</p></Links>
              </DropdownContentBurger>
            </DropdownBurger>


            <DropdownBurger>
              <span>Om mig</span>
              <DropdownContentBurger>
                <Links to="/About" ><p>Om mig</p></Links>
                <Links to="/process" ><p>Hur det funkar att jobba med mig</p></Links>
              </DropdownContentBurger>
            </DropdownBurger>

            <Links to="/Studio" ><p>Min studio</p></Links>
            <Links to="/About" ><p>Kontakta mig</p></Links>
        </HamburgerDropDown>
      </HamburgerContainer> */}
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
  display: flex;
  width: 50vw;
  padding-right: 80px;
  justify-content: space-between;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  color: antiquewhite;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  min-width: 150px;
  //box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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

  span{
    @media (max-width: 700px) {
    font-size: 18;
  }
  }
`
const Links = styled(Link)`
  text-decoration: none;
  color: antiquewhite;

  &:hover {
    text-decoration: underline;
  }
`;

const RelativeDiv = styled.div`
 position: relative;
`

const SideMenuContainer = styled.div`
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  flex-direction: column;
  padding-top: 80px;
  padding-right: 80px;
  justify-content: space-between;

`

const Trigger = styled.input`
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
  top: -7px;
  right: -5px;

  cursor: pointer;

  opacity: 0;
  z-index: 2;
  &:checked ${SideMenuContainer}{
    display: block;
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
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out,
      opacity 0.3s ease-in-out;

    ${Trigger}:checked ~ &:first-child {
      transform: rotate(45deg);
      top: 8px;
    }

    ${Trigger}:checked ~ &:last-child {
      transform: rotate(-45deg);
      top: -8px;
    }

    ${Trigger}:checked ~ &:nth-child(2) {
      opacity: 0;
    }
  }
`


const SideDropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  color: antiquewhite;
  font-size: 16px;
  min-width: 150px;
  padding: 10px;
  z-index: 1;
`

const SideDropdown = styled.div`
  position: relative;
  display: inline-block;
  color: antiquewhite;
  font-size: 20px;
  font-weight: bold;
`


// const DropdownContentBurger = styled.div`
//   display: none;
//   opacity: 0;
//   visibility: hidden;
//   transition: visibility 0.5s;
//   position: absolute;
//   color: antiquewhite;
//   right: 0;
//   border-radius: 10px;
//   background: rgba(0, 0, 0, 0.5);
//   font-size: 20px;
//   min-width: 150px;
//   //box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   padding: 10px;
//   z-index: 1;
// `

// const DropdownBurger = styled.div`
//   position: relative;
//   display: inline-block;
//   color: antiquewhite;
//   font-size: 23px;
//   font-weight: bold;

//   &:focus {pointer-events: none;}

//   &:focus ${DropdownContentBurger}{
//     display: block;
//     opacity: 1;
//     visibility: visible;
//     pointer-events: auto;
//   }
// `

// const HamburgerContainer = styled.div`
// display: flex;
// flex-direction: column;
// @media (min-width: 700px) {
//     display: none;
//   }
// `

// const Trigger = styled.input`
//   display: block;
//   width: 60px;
//   height: 60px;
//   position: absolute;
//   top: -7px;
//   right: -5px;

//   cursor: pointer;

//   opacity: 0;
//   z-index: 2;
// ` 

// const Hamburger = styled.div`
//   margin-right: 10px;
//   cursor: pointer;


//   span {
//     height: 3px;
//     width: 30px;
//     background: antiquewhite;
//     display: block;
//     margin-bottom: 5px;
//     position: relative;
//     transition: transform 0.3s ease-in-out, top 0.3s ease-in-out,
//       opacity 0.3s ease-in-out;

//     ${Trigger}:checked ~ &:first-child {
//       transform: rotate(45deg);
//       top: 8px;
//     }

//     ${Trigger}:checked ~ &:last-child {
//       transform: rotate(-45deg);
//       top: -8px;
//     }

//     ${Trigger}:checked ~ &:nth-child(2) {
//       opacity: 0;
//     }
//   }
// `
// const HamburgerDropDown = styled.nav`
//             position: absolute;
//             width: 300px;
//             margin: -100px 0 0 -50px;
//             padding: 50px;
//             padding-top: 125px;
//   flex-direction: column;
//   transform-origin: 0% 0%;
//   transform: translate(0, -100%);
//   transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

//   ${Trigger}:checked ~ & {

//   }
// `