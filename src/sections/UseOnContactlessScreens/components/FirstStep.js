/**
 *
 * FirstStep
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import TargetField from '../UI/figures/TargetField'

// import StepItem from './StepItem'
// import Markets from './Markets'

// import Phone from '../UI/figures/Phone'
// import Line from '../UI/figures/Line'

const useStyles = createUseStyles({
  firstStep: {
    marginTop: 99,
    position: 'relative',
  },

  target: {
    fontSize: 11,
    position: 'absolute',
    top: 8,
  },
})

const FirstStep = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.firstStep}>
      <span className={classes.target}>
        {t('useOnContactlessScreens.target')}
      </span>

      <TargetField top="0" left="40" />
    </div>
  )
}

export default FirstStep
