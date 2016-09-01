
import React, { Component } from 'react'
import { Router, Route, browserHistory, } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../store/configure-store'
import ClassificationExplorer from './classification-explorer'
import ClassificationDetails from './classification-details'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={ClassificationExplorer} />
          <Route path="/classification/:classification/:conceptScheme"
                 component={ClassificationDetails} />
        </Router>
      </Provider>
    )
  }
}
