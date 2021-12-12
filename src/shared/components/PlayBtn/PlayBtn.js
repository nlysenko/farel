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
    backgroundColor: ({ backgroundColor }) => backgroundColor || 'white',
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

const PlayBtn = ({ backgroundColor }) => {
  const theme = useTheme()

  const classes = useStyles({ theme, backgroundColor })
  return (
    <button className={classes.circle}>
      <i className={classes.triangle} />
    </button>
  )
}

export default PlayBtn
