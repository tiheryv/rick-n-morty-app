import React, {useEffect, useState} from 'react';
import './App.css'
import imageLogo from './images/oficial-logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'; 
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'; 
import CharacterName from './js/character-name';
import CharacterImage from './js/caracter-image';
import CharacterStatus from './js/character-status';
import CharacterGender from './js/character-gender';
import CharacterSpecies from './js/character-species';
import NextItem from './js/next-item';
import API from './js/api'
import Header from './components/header';

const api = new API()



function App() {

  const [character, setCharacter] = useState({})

    useEffect( () => {

        async function getCharacter(){
            setCharacter(await api.getCharacter(1))
        }
        getCharacter()
    }, [])

  return (

    <div className= "App">
    
      <div className= "wrapper">
        {/* <header className= "header">
            <img className= "headerlogo" src={imageLogo} alt="logo-icon"/>
        </header>` */}
        <Header/>
            
        <aside className= "left-aside">
          <h1>Characters info</h1>

          <span className="feature">NAME: <CharacterName name={character.name} /></span>
          <span className="feature">STATUS: <CharacterStatus status={character.status}/></span>
          <span className="feature">GENDER:<CharacterGender gender={character.gender}/></span>
          <span className="feature">SPECIE:<CharacterSpecies species={character.species}/></span>
          
        
          <div className="button-box">
          <button><FontAwesomeIcon icon={faArrowLeft}/></button>
          <button><FontAwesomeIcon icon={faArrowRight}/><NextItem /></button>
          </div>

        </aside>     

        <main className= "main-area">
            <CharacterImage image={character.image} name={character.name}/>
        </main>

        <aside className= "right-aside">

          <h2>Characters Search</h2>
          <form className="form-box">
            <input type="text" id="name" name="lname" placeholder="Name"/>
            <input type="text" id="id" name="lid" placeholder="ID" />
            <input type="text" id="episode" name="lepisode" placeholder="Episode"/>
            <input type="text" id="gender" name="lgender" placeholder="Gender"/>
            <input type="text" id="location" name="location" placeholder="Location"/>
          </form>
       
            <button className="submit-button" type="submit" value="Submit">Search</button>
        </aside>     

      </div>
  </div>
     
  );
}

export default App;
