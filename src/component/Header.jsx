import React from 'react'
import cafelogo from '../img/coffee-3642712_1280.png'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RoomIcon from '@material-ui/icons/Room';
const LogoImg = styled.img`
    width:46px;
    display:block;
    margin: 15px auto;
    @media (min-width: 992px){
        width:92px;
    }

`

const NavMenu = styled.nav`
    
`

const NavList = styled.ul`
    list-style:none;
    padding:0;
    margin:0 auto 5px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    li{
        flex:10 auto;
        @media (min-width:992px){
            flex : 0 0 auto;
        }
    }
`
const NavLink = styled.a`
    color: inherit;
    font-size:16px;
    font-weight:bold;
    text-align:center;
    text-decoration:none;
    display:block;
    padding:0.5em 1em;
    transition: all 0.3s ease-in-out 0s;
    :hover{
        color:#ffffff;
        background-color:#50360d;
        opacity:0.8;
    }
    @media(min-width:992px){
        font-size:20px;
    }
`

const NavSpan = styled.span`
    margin-left:0.5em;
`

const Header = () => {
    return(
        <header>
            <LogoImg src={cafelogo} alt='cafe-logo'/>
            <NavMenu>
               <NavList>
                   <li><NavLink href='index.html'><HomeIcon/><NavSpan>HOME</NavSpan></NavLink></li>
                   <li><NavLink href='index.html'><MenuBookIcon/><NavSpan>MENU</NavSpan></NavLink></li>
                   <li><NavLink href='index.html'><RoomIcon/><NavSpan>ACCESS</NavSpan></NavLink></li>
                   <li><NavLink href='index.html'><RoomIcon/><NavSpan>MEDIA</NavSpan></NavLink></li>
                   <li><NavLink href='index.html'><RoomIcon/><NavSpan>CONTACT</NavSpan></NavLink></li>
               </NavList>
            </NavMenu>
        </header>
    )
}

export default Header