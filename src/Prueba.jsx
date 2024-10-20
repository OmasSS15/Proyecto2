import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components_jsx/navbar.jsx';
import Footer from './components_jsx/footer.jsx';
import Blog from './components_jsx/blog.jsx';
import Productos from './components_jsx/productos.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <Productos/>
      
    </div>
  </>  
  )
}

export default App



/*import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './LandingPageComponent/Navbar/NavbarComponent.jsx'

function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
  </>  
  )
}
export default App*/

/*
<div>
      
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mauricio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */