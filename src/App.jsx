import { Component } from 'react'
import AsyncComponent from './AsyncComponent'
import Page1 from './Page1'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      route: 'Page1',
      component: null
    }
  }

  handleRouteChange = (route) => {
    this.setState({route: route})
  }

  render(){
    if(this.state.route === 'Page1'){
      return <Page1 handleRouteChange={this.handleRouteChange}/>
    }
    else if(this.state.route === 'Page2'){
      const AsyncPage2 = AsyncComponent(() => import('./Page2.jsx'))
      return <AsyncPage2 handleRouteChange={this.handleRouteChange}/>
    }
    else if(this.state.route === 'Page3'){
      const AsyncPage3 = AsyncComponent(() => import('./Page3.jsx'))
      return <AsyncPage3 handleRouteChange={this.handleRouteChange}/>
    }
  }
}

export default App
