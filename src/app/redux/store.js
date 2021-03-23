/**
 *
 * redux store
 *
 */

import { createStore } from 'redux'
import themeReducer from './themeReducer'

const store = createStore(
  themeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
