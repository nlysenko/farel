/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Header from 'components/Header/Header'

import colors from 'styles/colors'

const { colorBalck, colorWhite } = colors

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
    },

    a: {
      color: colorWhite,
      textDecoration: 'none',
    },

    body: {
      color: colorBalck,
      fontSize: 16,
      fontFamily: 'OpenSans-Light',
    },

    ul: {
      listStyle: 'none',
    },

    input: {
      font: 'inherit',
    },
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Header />
    </div>
  )
}

export default App
