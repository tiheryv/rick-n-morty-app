import React from 'react'
import styled from 'styled-components'

const CharacterGenderStyled = styled.div`

`

function CharacterGender({gender}) {

    return(
        <CharacterGenderStyled>
           {gender}
        </CharacterGenderStyled>
    )
}

export default CharacterGender