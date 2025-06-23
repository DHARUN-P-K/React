import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Counter from './component/Counter'
const App = () => {
  return (
    <div className='card-container'>
      <h2>Functional Component</h2>
      <Card title="GBU" artist="AK"/>
      <Card title="AMARAN" artist="SK"/>

      <Counter/>
    </div>
  )
}

export default App