/**
 *
 * Using
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  usingSection: {
    height: 2000,
  },
})

const Using = () => {
  const classes = useStyles()

  return <section className={classes.usingSection} id="using"></section>
}

export default Using
