/**
 *
 * SecondStep
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'

import Arrow from '../UI/figures/Arrow'
import Phone from '../UI/figures/Phone'
import Line from '../UI/figures/Line'
import StepItem from './StepItem'
import SmallSquares from '../UI/figures/SmallSquares'
import BigSquares from '../UI/figures/BigSquares'

const useStyles = createUseStyles({
  secondStep: {
    display: 'flex',
    marginLeft: -54,
  },

  arrowWrap: {
    width: 30,
    position: 'relative',
  },

  phoneWrap: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 270,
    position: 'relative',
    alignItems: 'center',
    margin: {
      left: -72,
      right: -72,
    },
  },

  lines: {
    position: 'relative',
    width: '100%',
    height: 53,
  },
})

const arrowStyles = { tiltAngle: '0deg', top: 193, left: 4 }
const horizontalLine = {
  top: 14,
  left: 121,
  width: 30,
  height: 1,
  tiltAngle: '0deg',
}
const verticalLine = {
  top: 35,
  left: 116,
  width: 40,
  height: 1,
  tiltAngle: '90deg',
}

const obliqueLine = {
  top: 151,
  left: 166,
  width: 30,
  height: 1,
  tiltAngle: '339deg',
}

const stepItemStyles = { flexDirection: 'column-reverse', margin: '9' }

const SecondStep = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div className={classes.secondStep}>
      <div className={classes.arrowWrap}>
        <Arrow stylization={arrowStyles} />
      </div>

      <div className={classes.phoneWrap}>
        <StepItem
          options={{ name: t('useOnMobile.instruction2'), num: '2' }}
          stylization={stepItemStyles}
        />

        <div className={classes.lines}>
          <Line stylization={horizontalLine} />

          <Line stylization={verticalLine} />
        </div>

        <Line stylization={obliqueLine} />

        <BigSquares />

        <Phone>
          <SmallSquares />
        </Phone>
      </div>

      <div className={classes.arrowWrap}>
        <Arrow stylization={arrowStyles} />
      </div>
    </div>
  )
}

export default SecondStep
