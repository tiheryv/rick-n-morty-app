import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ButtonsItemStyled = styled.div`

.button-box{
    display:flex;
    justify-content: space-evenly;
    margin: 10px;
  }
  
  .button-box button{
    cursor:pointer;
    padding: 10px 20%;
    border: none;
    border-radius: 50px;
    background-color: lightcoral;
  }
  
  .button-box button:hover{
    background-color: rgba(59, 241, 3, 0.877);
    transition: 1s;
  }
`

const Buttons = ({ setNumber, number }) => {

    const handleNext = () => {
        setNumber(number + 1)
        console.log(number)
    }

    const handleReturn = () => {
        if (number !== 0) {
            setNumber(number - 1)
        }
    }
    return (
        <ButtonsItemStyled>
            <div className="button-box">
                <button onClick={handleReturn}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </ButtonsItemStyled>
    )
}

export default Buttons