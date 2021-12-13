/**
 *
 * SecondStep
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'
import useWindowWidth from 'app/useWindowWidth'

import Line from 'shared/components/Line/Line'
import Arrow from '../UI/figures/Arrow'
import Phone from '../UI/figures/Phone'
import StepItem from './StepItem'
import SmallSquares from '../UI/figures/SmallSquares'
import BigSquares from '../UI/figures/BigSquares'

const useStyles = createUseStyles({
  secondStep: {
    display: 'flex',
    marginLeft: -54,

    '@media (max-width: 680px)': {
      marginLeft: 0,
      paddingTop: 40,
    },
  },

  arrowWrap: {
    width: 30,
    position: 'relative',

    '@media (max-width: 680px)': {
      display: 'none',
    },
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

    '@media (max-width: 680px)': {
      flexDirection: 'column-reverse',
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

const horizontalMobileLine = {
  top: 39,
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

const verticalMobileLine = {
  top: 19,
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

const obliqueMobileLine = {
  top: 35,
  left: 166,
  width: 30,
  height: 1,
  tiltAngle: '339deg',
}

const stepItemStyles = { flexDirection: 'column-reverse', margin: 9 }
const stepItemMobileStyles = {
  flexDirection: 'column',
  margin: 16,
}

const SecondStep = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const width = useWindowWidth()

  return (
    <div className={classes.secondStep}>
      <div className={classes.arrowWrap}>
        <Arrow stylization={arrowStyles} />
      </div>

      <div className={classes.phoneWrap}>
        <StepItem
          options={{ name: t('useOnMobile.instruction2'), num: '2' }}
          stylization={width <= 680 ? stepItemMobileStyles : stepItemStyles}
        />

        <div className={classes.lines}>
          <Line
            stylization={width <= 680 ? horizontalMobileLine : horizontalLine}
          />

          <Line
            stylization={width <= 680 ? verticalMobileLine : verticalLine}
          />
        </div>

        <Line stylization={width <= 680 ? obliqueMobileLine : obliqueLine} />

        <BigSquares top={width <= 680 ? 6 : 121} />

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
