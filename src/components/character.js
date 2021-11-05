import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import API from './api'

const api = new API()

const CharacterStyled = styled.div`


`

const Character = () => {

    const [characters, setCharacters] = useState([])
    const [serach, setSearch] = useState("")
    useEffect( () => {

        fetch(`https://rickandmortyapi.com/api/character/`)
        .then(response => response.json())
        .then(data=> setCharacters(data.results))
    }, [])


const handleSearch = (event) =>{
    setSearch(event.target.value)
}
return(
    <div className="Characters">


        {characters.map(character=>(
            <h2>{character.name}</h2>
        ))}
    </div>

)
}

export default Character