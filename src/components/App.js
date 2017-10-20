import React, { Component } from 'react'
import ListMovie from './ListMovie'
import CreateMovie from './CreateMovie'
import Callback from './Callback'
import { Route } from 'react-router-dom'
import { requireAuth } from '../utils/AuthService'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={ListMovie} />
        <Route path='/create' component={CreateMovie} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </div>
    )
  }
}

export default App;
