/**
 *
 * themeReducer
 *
 */

import { APPLY_THEME } from './constans'

import initialState from './initialState'

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_THEME:
      return Object.assign({}, { theme: action.payload })

    default:
      return state
  }
}

export default themeReducer
