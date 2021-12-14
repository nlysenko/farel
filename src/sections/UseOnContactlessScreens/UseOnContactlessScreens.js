/**
 *
 * UseOnContactlessScreens
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Heading from './components/Heading'
import FirstStep from './components/FirstStep'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'

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

    '@media (max-width: 790px)': {
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

          <SecondStep />

          <ThirdStep />
        </div>
      </div>
    </section>
  )
}

export default UseOnContactlessScreens
