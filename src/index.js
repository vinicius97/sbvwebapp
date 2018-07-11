import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import { BrowserRouter } from 'react-router-dom'

import * as models from './Models'
import registerServiceWorker from './registerServiceWorker'

import App from './Scenes/App'

const store = init({
  models,
})

// Use react-redux's <Provider /> and pass it the store.
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();