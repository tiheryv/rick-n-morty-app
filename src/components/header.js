import React from 'react'
import { useState } from 'react/cjs/react.development';
import imageLogo from '../images/oficial-logo.png';
import styled, {css} from 'styled-components'


const Header = () => {
const [darkMode, setDarkMode] = useState(false) 

const handleClick = () =>{
    setDarkMode(!darkMode)
}
const  HeaderStyled = styled.div`
grid-area:header;
background-color: #fff;
.header{
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content:center;
    grid-area: header;
    background-color: dimgrey;
  }
  
  .header .headerlogo{
    width: 225px; 
  }
  `
return (
    <HeaderStyled>
        <div class="header">
            <img class= "headerlogo" width={225} src={imageLogo} alt="logo-icon"/>
            <button type="button" onClick={handleClick}> {darkMode ? 'DarkMode' : 'LightMode'}</button>
        </div>     
    </HeaderStyled>
    )
}

export default Header
