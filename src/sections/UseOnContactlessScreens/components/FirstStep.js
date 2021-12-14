/**
 *
 * FirstStep
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import StepName from 'shared/components/StepName/StepName'
import TargetField from '../UI/figures/TargetField'
import Computer from '../UI/figures/Computer'
import Camera from '../UI/figures/Camera'
import Screen from '../UI/figures/Screen'
import Line from 'shared/components/Line/Line'

const useStyles = createUseStyles({
  firstStep: {
    paddingTop: 99,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',

    '@media (max-width: 790px)': {
      alignItems: 'center',
      paddingTop: 40,
    },
  },

  wrapper: {
    position: 'relative',
    width: 270,
    height: 153,
  },

  target: {
    fontSize: 11,
    position: 'absolute',
    top: 9,
  },

  comp: {
    extend: 'target',
    top: 77,
  },

  cam: {
    extend: 'target',
    top: 137,
  },

  screenName: {
    fontSize: 11,
    textAlign: 'center',
    paddingTop: 52,
  },

  stepWrap: {
    maxWidth: 132,
    paddingTop: 0,
  },
})

const targetLineStyles = {
  top: 43,
  left: 123,
  width: 35,
  height: 1,
  tiltAngle: '24deg',
}

const computerLineStyles = {
  top: 82,
  left: 120,
  width: 35,
  height: 1,
  tiltAngle: '0deg',
}

const cameraLineStyles = {
  top: 121,
  left: 117,
  width: 42,
  height: 1,
  tiltAngle: '144deg',
}

const stepNameStyles = {
  flexDirection: 'column-reverse',
  margin: '16',
  color: 'dark',
}

const FirstStep = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.firstStep}>
      <div className={classes.wrapper}>
        <span className={classes.target}>
          {t('useOnContactlessScreens.target')}
        </span>

        <TargetField top="0" left="40" />

        <Line stylization={targetLineStyles} />

        <span className={classes.comp}>
          {t('useOnContactlessScreens.computer')}
        </span>

        <Computer top="60" left="85" />

        <Line stylization={computerLineStyles} />

        <span className={classes.cam}>
          {t('useOnContactlessScreens.camera')}
        </span>

        <Line stylization={cameraLineStyles} />

        <Camera top="141" left="85" />

        <Screen top="16" left="162">
          <p className={classes.screenName}>
            {t('useOnContactlessScreens.screen')}
          </p>
        </Screen>
      </div>

      <div className={classes.stepWrap}>
        <StepName
          options={{
            name: t('useOnContactlessScreens.instruction1'),
            num: '1',
          }}
          stylization={stepNameStyles}
        />
      </div>
    </div>
  )
}

export default FirstStep
