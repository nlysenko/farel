/**
 *
 * SmallSquares
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  smallSquares: {
    position: 'absolute',
    top: 22,
    left: 7,
  },

  square: {
    display: 'inline-block',
    position: 'absolute',
  },

  wrapper: {
    position: 'relative',
    width: 35,
    height: 35,
  },

  square1: {
    extend: 'square',
    width: 14,
    height: 14,
    top: 0,
    left: 0,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square2: {
    extend: 'square',
    width: 18,
    height: 19,
    top: 6,
    left: 7,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square3: {
    extend: 'square',
    width: 10,
    height: 10,
    top: 3,
    left: 21,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square4: {
    extend: 'square',
    width: 7,
    height: 7,
    top: 26,
    left: 0,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square5: {
    extend: 'square',
    width: 4,
    height: 4,
    top: 26,
    left: 24,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },
})

const SmallSquares = () => {
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.smallSquares}>
      <div className={classes.wrapper}>
        <span className={classes.square1} />
        <span className={classes.square2} />
        <span className={classes.square3} />
        <span className={classes.square4} />
        <span className={classes.square5} />
      </div>
    </div>
  )
}

export default SmallSquares
