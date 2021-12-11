/**
 *
 * BigSquares
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  bigSquares: {
    position: 'absolute',
    top: 121,
    left: 195,
  },

  square: {
    display: 'inline-block',
    position: 'absolute',
  },

  wrapper: {
    position: 'relative',
    width: 35,
    height: 40,
  },

  square1: {
    extend: 'square',
    width: 16,
    height: 16,
    top: 0,
    left: 0,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square2: {
    extend: 'square',
    width: 22,
    height: 22,
    top: 6,
    left: 9,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square3: {
    extend: 'square',
    width: 11,
    height: 11,
    top: 3,
    left: 24,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square4: {
    extend: 'square',
    width: 9,
    height: 9,
    top: 29,
    left: 0,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },

  square5: {
    extend: 'square',
    width: 5,
    height: 5,
    top: 29,
    left: 28,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
  },
})

const BigSquares = () => {
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.bigSquares}>
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

export default BigSquares
