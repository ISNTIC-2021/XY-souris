import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[x,setX]= useState(0)
  const[y,setY]= useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",handle)
  },[])
  const handle =(event)=>{
    setX(event.pageX)
    setY(event.pageY)

  }
  return (
    <>
    <h1>Les coordonnées de la souris</h1>
    <b>les coordonnées de X : {x}</b><br/>
    <b>les coordonnées de Y : {y}</b>
   
    </>
  )
}

export default App