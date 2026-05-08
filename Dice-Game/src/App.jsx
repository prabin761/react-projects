import { useState } from 'react'
import styled from "styled-components"

function App() {

  return (
    <>
      <Button> styled with styled-component </Button>
    </>
  )
}

export default App

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid red;
`
