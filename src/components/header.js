import React from 'react'
import imageLogo from '../images/oficial-logo.png';
import styled from 'styled-components'


const Header = () => {

    const HeaderStyled = styled.div`

grid-area: header;

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
                <img class="headerlogo" width={225} src={imageLogo} alt="logo-icon" />
            </div>
        </HeaderStyled>
    )
}

export default Header
