import React from 'react'
import styled from 'styled-components'

const CharacterStatusStyled = styled.div`

`

function CharacterStatus({status}) {

    return(
        <CharacterStatusStyled>
           {status}
        </CharacterStatusStyled>
    )
}

export default CharacterStatus