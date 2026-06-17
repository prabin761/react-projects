import React from 'react'
import styled from 'styled-components'



const StartGame = () => {
    
  return (
    <Container>
      <img src="/src/pictures/dice.png" alt="dice image" />
      <div>
        <h1>DICE GAME</h1>
        <Button> play now </Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width : 1180px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
  `;

const Button = styled.button`
  color: white;
  border-radius: 5px;
  border: none;
  background-color: black;
  padding: 10px 20px;
  font-size: 40px;
  min-width: 220px;
  `;
