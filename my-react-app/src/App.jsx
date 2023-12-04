import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Card from './Card'

function App() {
  return (
    <>
      <HelloWorld />

      <Card name="John" age="30" />
      <Card name="Jane" age="24" />

    </>
  )
}

export default App
