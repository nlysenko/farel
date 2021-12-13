/**
 *
 * FirstStep
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import TargetField from '../UI/figures/TargetField'
import Computer from '../UI/figures/Computer'
import Camera from '../UI/figures/Camera'
import Line from 'shared/components/Line/Line'

const useStyles = createUseStyles({
  firstStep: {
    marginTop: 99,
    position: 'relative',
    width: 270,
    height: 165,
  },

  target: {
    fontSize: 11,
    position: 'absolute',
    top: 8,
  },

  comp: {
    extend: 'target',
    top: 77,
  },

  cam: {
    extend: 'target',
    top: 137,
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
      <Line stylization={targetLineStyles} />

      <span className={classes.comp}>
        {t('useOnContactlessScreens.computer')}
      </span>
      <Computer top="60" left="85" />
      <Line stylization={computerLineStyles} />

      <span className={classes.cam}>{t('useOnContactlessScreens.camera')}</span>
      <Line stylization={cameraLineStyles} />
      <Camera top="141" left="85" />
    </div>
  )
}

export default FirstStep
