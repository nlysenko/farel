/**
 *
 * FirstStep
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import StepItem from './StepItem'
import Markets from './Markets'

import Phone from '../UI/figures/Phone'
import Line from 'shared/components/Line/Line'
import Arrow from '../UI/figures/Arrow'
import TShapedLines from '../UI/figures/TShapedLines'

const useStyles = createUseStyles({
  firstStep: {
    maxWidth: 220,
    padding: {
      top: 142,
      left: 5,
    },

    '@media (max-width: 680px)': {
      padding: {
        top: 40,
        left: 0,
      },
    },
  },

  wrapper: {
    display: 'flex',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const arrowStyles = { tiltAngle: '90deg', top: 38, left: 8 }
const lineStyles = { top: 59, left: 14, width: 18, height: 2 }
const stepItemStyles = { flexDirection: 'column', margin: '16' }

const FirstStep = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.firstStep}>
      <div className={classes.wrapper}>
        <Markets />

        <div className={classes.inner}>
          <Phone>
            <Arrow stylization={arrowStyles} />

            <Line stylization={lineStyles} />
          </Phone>

          <TShapedLines />
        </div>
      </div>

      <StepItem
        options={{ name: t('useOnMobile.instruction1'), num: '1' }}
        stylization={stepItemStyles}
      />
    </div>
  )
}

export default FirstStep
