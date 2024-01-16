import React, { useState } from 'react'
import './App.css'
import {Card} from "./components/Card.jsx";

function App() {

  return (
    <>
        <Card movieName={"Pán Prstenů"} imgSRC={"vite.svg"} author={"Peter Jackson"}/>
    </>
  )
}

export default App
