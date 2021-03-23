/**
 *
 * actions
 *
 */

import { APPLY_THEME } from './constans'

export const toggleTheme = (theme) => {
  return {
    type: APPLY_THEME,
    payload: theme,
  }
}
