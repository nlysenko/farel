/**
 *
 * App
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

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
      color: 'white',
      textDecoration: 'none',
    },

    body: {
      color: 'black',
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

  return <div className={classes.app}>app</div>
}

export default App
