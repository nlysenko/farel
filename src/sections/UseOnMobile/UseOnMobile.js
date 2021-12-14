/**
 *
 * UseOnMobile
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Heading from './components/Heading'
import FirstStep from './components/FirstStep'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'

const useStyles = createUseStyles({
  useOnMobile: {
    backgroundColor: ({ theme }) => theme.mainColor,
    marginTop: 42,
  },

  container: {
    maxWidth: 930,
    padding: [0, 15],
    margin: [0, 'auto'],
  },

  wrapper: {
    display: 'flex',
    maxWidth: 620,
    margin: [0, 'auto'],
    padding: {
      left: 40,
      bottom: 28,
    },

    '@media (max-width: 680px)': {
      paddingLeft: 0,
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

const UseOnMobile = () => {
  const theme = useTheme()
  const classes = useStyles({ theme })

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

export default UseOnMobile
