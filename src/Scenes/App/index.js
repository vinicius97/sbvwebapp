import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../Home'
import VideoPlayer from '../VideoPlayer'
import NotFound from '../NotFound'

import './index.scss'

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/video/:id'} exact component={VideoPlayer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App
