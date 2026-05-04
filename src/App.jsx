import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import nyfront from './assets/nyfront.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='top bg-amber-600 bg-cover flex-col'>
        <h1 className='fornu absolute left-0 italic'  >sup dude jkljkljlk</h1>
      <img src={nyfront} className="base" width="170" height="179" alt="" />
      </section>
      <section className='bund bg-pink-900 bg-cover'>
        <p>en masse tekst</p>
        <h1 className='overskrift text-blue-500'>sfilejfoisejfo</h1>

      </section>
    </>
  )
}

export default App
