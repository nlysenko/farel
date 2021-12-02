/**
 *
 * UseOnMobile
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import PlayBtn from 'shared/components/PlayBtn/PlayBtn'
import StepItem from 'shared/components/StepItem/StepItem'

const useStyles = createUseStyles({
  mobile: {
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 31,
  },

  caption: {
    fontFamily: 'Exo2-Light',
    fontSize: 28,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: ({ theme }) => theme.mainTextColor,
    padding: {
      left: 80,
      right: 27,
    },

    '@media (max-width: 790px)': {
      fontSize: 20,
      paddingLeft: 27,
    },
  },

  step: {
    maxWidth: 270,
    margin: [0, 'auto'],
    paddingRight: 20,
  },
})

const UseOnMobile = () => {
  const theme = useTheme()

  const { t } = useTranslation()

  const classes = useStyles({ theme })
  return (
    <section className={classes.mobile}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1 className={classes.caption}>{t('useOnMobile.caption')}</h1>

          <PlayBtn white />
        </div>

        <div className={classes.step}>
          <StepItem
            name={t('useOnMobile.instruction2')}
            num="2"
            flexDirection="column-reverse"
          />
        </div>
      </div>
    </section>
  )
}

export default UseOnMobile
