/**
 *
 * Instruction
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import AppStoreIcon from 'assets/img/app-store-icon.webp'
import GooglePlayIcon from 'assets/img/google-play-icon.webp'

const useStyles = createUseStyles({
  instruction: {
    display: 'flex',
    margin: [0, 'auto'],
    flexDirection: 'column',
    paddingTop: 44,
    maxWidth: 640,
  },

  item: {
    display: 'flex',
    alignItems: 'center',
  },

  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    minWidth: 45,
    borderRadius: '100%',
    fontSize: 30,
    fontStyle: 'normal',
    color: ({ theme }) => theme.togglerLangBgColor,
    border: {
      width: 1,
      style: 'solid',
      color: ({ theme }) => theme.togglerLangBgColor,
    },
  },

  content: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingLeft: 35,
    flexGrow: 1,
    color: ({ theme }) => theme.headerColor,

    '@media (max-width: 790px)': {
      fontSize: 14,
      padding: { left: 10, right: 10 },
    },
  },

  brandLink: {
    textTransform: 'uppercase',
    margin: { left: 5, right: 5 },
    cursor: 'pointer',
    color: ({ theme }) => theme.togglerLangBgColor,

    '&:hover': {
      color: ({ theme }) => theme.hoverBrandLink,
    },
  },

  icons: {
    display: 'flex',
  },

  googlePlayIcon: {
    width: 40,
    height: 'auto',
    margin: { left: 25, right: 60 },

    '@media (max-width: 790px)': {
      margin: { left: 15, right: 0 },
    },
  },

  appStoreIcon: {
    width: 40,
    height: 'auto',
  },
})

const Instruction = () => {
  const { t, i18n } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <div className={classes.instruction}>
      <div className={classes.item}>
        <i className={classes.counter}>1</i>

        <p className={classes.content}>
          {t('topSection.instruction')}
          <Link to="#" className={classes.brandLink}>
            Farel
          </Link>

          {i18n.language === 'en' ? 'app' : ''}
        </p>

        <img
          src={AppStoreIcon}
          className={classes.appStoreIcon}
          alt="app-store-icon"
        />

        <img
          src={GooglePlayIcon}
          className={classes.googlePlayIcon}
          alt="google-play-icon"
        />
      </div>
    </div>
  )
}

export default Instruction
