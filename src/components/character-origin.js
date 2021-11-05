import React from 'react'
import styled from 'styled-components'

const CharacterOriginStyled = styled.div`

`

function CharacterOrigin({origin}) {

    return(
        <CharacterOriginStyled>
           {origin}
        </CharacterOriginStyled>
    )
}

export default CharacterOrigin