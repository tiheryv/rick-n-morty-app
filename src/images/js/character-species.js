import React from 'react'
import styled from 'styled-components'

const CharacterSpeciesStyled = styled.div`

`

function CharacterSpecies({species}) {

    return(
        <CharacterSpeciesStyled>
           {species}
        </CharacterSpeciesStyled>
    )
}

export default CharacterSpecies