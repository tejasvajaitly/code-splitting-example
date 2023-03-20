import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class Page1 extends Component {
  render(){
    const {handleRouteChange} = this.props
    return (
        <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React 2</h1>
        <div className="card">
        <button  onClick={() => handleRouteChange('Page1')}>
            Page 1
          </button>
          <button disabled >
            Page 2
          </button>
          <button  onClick={() => handleRouteChange('Page3')}>
            Page 3
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    )
  }
  
}

export default Page1
