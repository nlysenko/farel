/**
 *
 * Main
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Top from 'sections/Top/Top'
import Using from 'sections/Using/Using'

const useStyles = createUseStyles({
  main: {
    paddingTop: 60,
  },
})

const Main = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Top />
    </main>
  )
}

export default Main
