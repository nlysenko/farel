/**
 *
 * Heading
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import PlayBtn from '../UI/buttons/PlayBtn'

const useStyles = createUseStyles({
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 31,

    '@media (max-width: 680px)': {
      paddingTop: 25,
      flexDirection: 'column',
    },
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

    '@media (max-width: 680px)': {
      padding: {
        left: 0,
        right: 0,
        bottom: 10,
      },
    },
  },
})

const Heading = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.heading}>
      <h1 className={classes.caption}>{t('useOnMobile.caption')}</h1>

      <PlayBtn white />
    </div>
  )
}

export default Heading
