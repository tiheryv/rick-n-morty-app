import React from 'react'
import styled, {css} from 'styled-components'


const CharacterImageStyled = styled.div`

`

function CharacterImage({image, name}) {

    return(
        <CharacterImageStyled>
            
            <img className="character-image"  src={image} alt={name}/>

        </CharacterImageStyled>
    )
}

export default CharacterImage