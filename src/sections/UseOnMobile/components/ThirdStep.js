/**
 *
 * ThirdStep
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import StepName from 'shared/components/StepName/StepName'

import Phone from '../UI/figures/Phone'
import TShapedLines from '../UI/figures/TShapedLines'

import Planet from 'assets/img/planet.webp'
import Airplane from 'assets/img/one-airplane.webp'

const useStyles = createUseStyles({
  thirdStep: {
    maxWidth: 256,
    paddingTop: 142,
    marginLeft: -29,

    '@media (max-width: 680px)': {
      paddingTop: 40,
      marginLeft: 0,
    },
  },

  wrapper: {
    display: 'flex',
    paddingLeft: 74,
    position: 'relative',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
  },

  stepItemWrap: {
    minWidth: 256,
    paddingRight: 52,

    '@media (max-width: 680px)': {
      paddingRight: 0,
    },
  },

  planetInMobile: {
    display: 'block',
    width: 41,
    height: 41,
    position: 'absolute',
    top: 25,
    left: -21,
  },

  planet: {
    extend: 'planetInMobile',
    top: 9,
    left: 132,
  },

  airplane: {
    position: 'absolute',
    display: 'block',
    top: 55,
    left: 172,
    width: 52,
    height: 29,
  },

  square: {
    position: 'absolute',
    display: 'block',
    width: 20,
    height: 20,
    backgroundColor: ({ theme }) => theme.mainBlueColor,
    top: 10,
    left: 192,
    transform: 'rotate(75deg)',
  },

  transparentSquare: {
    position: 'absolute',
    display: 'block',
    width: 19,
    height: 19,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: ({ theme }) => theme.mainBlueColor,
    top: 29,
    left: 227,
    transform: 'rotate(12deg)',
  },
})

const stepItemStyles = { flexDirection: 'column', margin: '16' }

const ThirdStep = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.thirdStep}>
      <div className={classes.wrapper}>
        <div className={classes.inner}>
          <Phone>
            <img
              className={classes.planetInMobile}
              src={Planet}
              alt="planet in mobile"
            />
          </Phone>

          <TShapedLines />
        </div>

        <img className={classes.planet} src={Planet} alt="planet" />
        <img className={classes.airplane} src={Airplane} alt="Airplane" />
        <i className={classes.square} />
        <i className={classes.transparentSquare} />
      </div>

      <div className={classes.stepItemWrap}>
        <StepName
          options={{ name: t('useOnMobile.instruction3'), num: '3' }}
          stylization={stepItemStyles}
        />
      </div>
    </div>
  )
}

export default ThirdStep
