/**
 *
 * UseOnContactlessScreens
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Heading from './components/Heading'
import FirstStep from './components/FirstStep'

const useStyles = createUseStyles({
  container: {
    maxWidth: 930,
    padding: [0, 15],
    margin: [0, 'auto'],
  },

  wrapper: {
    display: 'flex',
    maxWidth: 800,
    margin: [0, 'auto'],
    padding: {
      bottom: 28,
    },

    '@media (max-width: 680px)': {
      paddingLeft: 0,
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

const UseOnContactlessScreens = () => {
  const classes = useStyles()

  return (
    <section className={classes.useOnMobile}>
      <div className={classes.container}>
        <Heading />

        <div className={classes.wrapper}>
          <FirstStep />
        </div>
      </div>
    </section>
  )
}

export default UseOnContactlessScreens
