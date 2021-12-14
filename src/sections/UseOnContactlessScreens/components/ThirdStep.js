/**
 *
 * ThirdStep
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import StepName from 'shared/components/StepName/StepName'
import Screen from '../UI/figures/Screen'

import ManInSity from 'assets/img/man-in-sity.webp'

const stepNameStyles = {
  flexDirection: 'column-reverse',
  margin: '14',
  color: 'dark',
}

const useStyles = createUseStyles({
  thirdStep: {
    maxWidth: 200,
    paddingTop: 115,

    '@media (max-width: 790px)': {
      paddingTop: 40,
      maxWidth: 184,
    },
  },

  wrapper: {
    position: 'relative',
    width: '100%',
    height: 140,
  },

  inner: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.screenBorderColor,
  },

  manInSity: {
    display: 'block',
    width: 88,
    height: 90,
    position: 'absolute',
    top: 20,
    left: -17,
  },
})

const ThirdStep = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.thirdStep}>
      <div className={classes.wrapper}>
        <Screen top="0" left="53">
          <div className={classes.inner}>
            <img
              className={classes.manInSity}
              src={ManInSity}
              alt="man-in-sity"
            />
          </div>
        </Screen>
      </div>

      <StepName
        options={{
          name: t('useOnContactlessScreens.instruction3'),
          num: '3',
        }}
        stylization={stepNameStyles}
      />
    </div>
  )
}

export default ThirdStep
