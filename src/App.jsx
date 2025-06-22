import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

// function App() {
//   const [count, setCount] = useState(0)



//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


const App =() =>{
 
  return(
    <div className='card-container'>
    <h2>Healthy Foods</h2>
    <Card a="Carret" y="vitamine C"/>
    <Card a="Mango" y="Vitamine B"/>
    <Card a="Apple" y="Vitamine A"/>
    <Card a="Onion" y="Vitamine D"/>

    </div>
    
  )
}
export default App
