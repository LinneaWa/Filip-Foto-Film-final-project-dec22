import React from 'react';
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const HamburgerMenu = () => {
    return(
        <nav role="navigation">
            <MenuToggle>
                <HiddenInput type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <Menu>
                    <li><a href="#">Home</a></li>
                    <li>
                        <OnclickMenu tabindex="0" >About
                            <OnclickMenuContent>
                                <li><a href="#">Sub-1</a></li>
                                <li><a href="#">Sub-2</a></li>
                                <li><a href="#">Sub-3</a></li>
                            </OnclickMenuContent>
                        </OnclickMenu>
                    </li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contact</a></li>
                </Menu>
            </MenuToggle>
        </nav>
    )
}

const HiddenInput = styled.input`
    display: block;
    width: 60px;
    height: 60px;
    position: absolute;
    top: -7px;
    right: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
`

const MenuToggle = styled.div ` 
    display: block;
    position: relative;
    top: 50px;
    left: 50px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
    }

    span:first-child {
    transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
    transform-origin: 0% 100%;
    }

    ${HiddenInput}:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
    }

    ${HiddenInput}:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
    }

    ${HiddenInput}:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
    }
`

const Menu = styled.ul`
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

    li {
        padding: 10px 0;
        font-size: 22px;
    }

    ${HiddenInput}:checked ~ ul {
    transform: none;
    }

`

const OnclickMenuContent = styled.ul`
    display: none;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.5s;

    li {
        list-style: none;
    }
`

const OnclickMenu = styled.div`
 &:focus {pointer-events: none;}

 &:focus ${OnclickMenuContent}{
    opacity: 1;
    visibility: visible;
    display: inherit;
    pointer-events: auto;
 }
`


