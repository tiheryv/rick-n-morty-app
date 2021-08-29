import React from 'react'
import styled from 'styled-components'

const CharacterNameStyled = styled.div`

`

function CharacterName({name}) {

    return(
        <CharacterNameStyled>
            {name}
        </CharacterNameStyled>
    )
}

export default CharacterName