/**
 *
 * PlayBtn
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  circle: {
    width: 45,
    minWidth: 45,
    height: 45,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
  },

  triangle: {
    border: '12px solid transparent',
    borderLeft: '21px solid',
    borderLeftColor: ({ theme }) => theme.togglerLangBgColor,
    display: 'block',
    width: 0,
    height: 0,
    marginLeft: 15,
  },
})

const PlayBtn = ({ white }) => {
  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <button
      className={classes.circle}
      style={
        white ? { backgroundColor: 'white' } : { backgroundColor: 'black' }
      }
    >
      <i className={classes.triangle} />
    </button>
  )
}

export default PlayBtn
