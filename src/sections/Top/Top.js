/**
 *
 * Top
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    height: 2000,
    maxWidth: 930,
    padding: [0, 15],
    margin: [0, 'auto'],
  },
})

const Top = () => {
  const classes = useStyles()

  return (
    <section className={classes.topSection} id="top">
      <div className={classes.container}></div>
    </section>
  )
}

export default Top
