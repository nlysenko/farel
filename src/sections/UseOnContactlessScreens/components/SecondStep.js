/**
 *
 * SecondStep
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import StepName from 'shared/components/StepName/StepName'
import Screen from '../UI/figures/Screen'
import TargetField from '../UI/figures/TargetField'
import Arrow from 'shared/components/Arrow/Arrow'

import Man from 'assets/img/man.webp'

import useWindowWidth from 'app/useWindowWidth'

const stepNameStyles = {
  flexDirection: 'column-reverse',
  margin: '12',
  color: 'dark',
}

const stepNameMobileStyles = {
  flexDirection: 'column',
  margin: 12,
  color: 'dark',
}

const useStyles = createUseStyles({
  secondStep: {
    maxWidth: 253,
    display: 'flex',
    flexDirection: 'column',

    '@media(max-width: 790px)': {
      flexDirection: 'column-reverse',
      maxWidth: 184,
      paddingTop: 20,
    },
  },

  wrapper: {
    position: 'relative',
    width: '100%',
    height: 240,

    '@media(max-width: 790px)': {
      marginLeft: -37,
    },
  },

  check: {
    '&:before': {
      content: '""',
      display: 'block',
      width: 18,
      height: 2,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
      transform: 'rotate(56deg)',
      margin: {
        top: 32,
        left: 22,
      },
    },

    '&:after': {
      content: '""',
      display: 'block',
      width: 30,
      height: 2,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
      transform: 'rotate(121deg)',
      borderTopRightRadius: 1,
      margin: {
        top: -7,
        left: 28,
      },
    },
  },

  man: {
    display: 'block',
    width: 42,
    height: 132,
    position: 'absolute',
    top: 78,
    left: 112,
  },
})

const LeftArrowStyles = { tiltAngle: '0deg', top: 87, left: 12 }
const RightArrowStyles = { tiltAngle: '0deg', top: 87, left: 214 }

const SecondStep = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles({ theme })
  const width = useWindowWidth()

  return (
    <div className={classes.secondStep}>
      <StepName
        options={{
          name: t('useOnContactlessScreens.instruction2'),
          num: '2',
        }}
        stylization={stepNameStyles}
      />

      <div className={classes.wrapper}>
        <Screen top="20" left="90">
          <i className={classes.check} />
        </Screen>

        <img className={classes.man} src={Man} alt="man" />

        <TargetField top="187" left="97" />

        {width <= 790 ? false : <Arrow stylization={LeftArrowStyles} />}

        {width <= 790 ? false : <Arrow stylization={RightArrowStyles} />}
      </div>
    </div>
  )
}

export default SecondStep
