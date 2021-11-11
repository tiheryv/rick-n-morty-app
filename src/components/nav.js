import React from 'react'
import styled, {css} from 'styled-components'
import About from '../About'
import AllCharacters from '../AllCharacters'
import App from '../App'

const NavStyled = styled.div`

.nav{
    grid-area:nav;
    border: 1px solid #000;
    width:100%
}
.nav ul{
    display:flex;
    justify-content: space-between;
  
}
.nav ul li{
    font-size:16px;
    list-style:none;
    border-left: 1px solid #000;
    padding: 8px;
    margin: 0px 8px;
}
`
function Nav() {
    return (
        <NavStyled>
            <div class="nav">
                <ul>
                    <li>About</li>
                    <li>Info Character</li>
                    <li>All Characters</li>

                </ul>
            </div>
        </NavStyled>
    )
}

export default Nav
