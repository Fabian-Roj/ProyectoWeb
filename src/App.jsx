import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ListaPokemon from './ListaPokemon'
import TarjetaPokemon from './TarjetaPokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaPokemon/>
      <TarjetaPokemon nombre = "pecharunt"/>

    </>
  )
}

export default App
