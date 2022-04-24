import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CharacterName from './character-name';
import CharacterImage from './caracter-image';
import CharacterStatus from './character-status';
import CharacterGender from './character-gender';
import CharacterSpecies from './character-species';
import Buttons from './Buttons';

import API from './api'
const api = new API()


const HomeStyled = styled.div`

.wrapper{

    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  
    grid-template-areas:
    "left-aside main right-aside"
    "footer footer footer";
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);  
  }
  .left-aside{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    grid-area: left-aside;
  }
  
  .left-aside h1{
    padding: 0 10px;
    font-size: 20px;
    background-color: lightcoral;
    border-right:  1px solid rgba(0, 0, 0, 0.3);
  }



.left-aside span.feature{
    margin: 10px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    box-shadow:2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  
  
  .main-area .character-image{
    margin: 20px;
    border:2px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
  
  .right-aside{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    grid-area: right-aside;
    padding-right: 15px;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
  }
  
  .right-aside h2{
    
    padding: 0 10px;
    font-size: 20px;
    background-color: lightcoral;
    border-right:  1px solid rgba(0, 0, 0, 0.3);
  }
  
  
  .right-aside .form-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    align-self: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  .right-aside input{
    width: 80%;
    margin: 10px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #D6CAB0;
    font-family: monospace;
  }
  .right-aside button{
    border-radius: 5px;
    padding: 10px;
    margin: 10px 60px;
    cursor: pointer;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #D6CAB0;
    color: dimgrey;
    font-family: monospace;
    
  }
  
  .right-aside button:hover{
    background-color: chartreuse;
    font-weight: bolder;
    color: black;
    transition: 1s;
  }
  
@media only screen and (max-width:768px){
    .wrapper{
  
      grid-template-areas:
      "header header"
      "nav nav"
      "left-aside main"
      "right-aside right-aside"
      "footer footer";
      grid-template-columns: 1fr;
    }
  
    .left-aside{
      border: none;
    }
  }
  
  @media only screen and (max-width:550px){
    .wrapper{
  
      grid-template-areas:
      "header"
      "nav"
      "main"
      "left-aside "
      "right-aside"
      "footer";
      grid-template-columns: 1fr;
    } 
  
    .left-aside{
      border: none;
    }
  }
`

const Home = () => {

  const [character, setCharacter] = useState([])

  const [number, setNumber] = useState(1)

  useEffect(() => {

    async function getCharacter() {
      setCharacter(await api.getCharacter(number))
    }
    getCharacter()
  }, [number])

  return (
    <HomeStyled>
      <div className="wrapper">

        <aside className="left-aside">
          <h1>Characters info</h1>

          <span className="feature">NAME: <CharacterName name={character.name} /></span>
          <span className="feature">STATUS: <CharacterStatus status={character.status} /></span>
          <span className="feature">GENDER:<CharacterGender gender={character.gender} /></span>
          <span className="feature">SPECIE:<CharacterSpecies species={character.species} /></span>



          <Buttons setNumber={setNumber} number={number} />


        </aside>

        <main className="main-area">
          <CharacterImage image={character.image} name={character.name} />
        </main>

        <aside className="right-aside">

          <h2>Characters Search</h2>
          <form className="form-box">
            <input type="text" id="name" name="lname" placeholder="Name" />
            <input type="text" id="id" name="lid" placeholder="ID" />
            <input type="text" id="episode" name="lepisode" placeholder="Episode" />
            <input type="text" id="gender" name="lgender" placeholder="Gender" />
            <input type="text" id="location" name="location" placeholder="Location" />
          </form>

          <button className="submit-button" type="submit" value="Submit">Search</button>
        </aside>

      </div>
    </HomeStyled>
  )
}

export default Home
