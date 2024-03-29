/**
 *
 * entry point
 *
 */

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'app/redux/store'

import App from 'app/App'

import './i18n'

ReactDOM.render(
  <React.Fragment>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.Fragment>,
  document.getElementById('root')
)
