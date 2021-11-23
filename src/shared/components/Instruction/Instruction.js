/**
 *
 * Instruction
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import AppStore from 'assets/img/app-store-icon.webp'
import GooglePlay from 'assets/img/google-play-icon.webp'
import Phone from 'assets/img/phone.webp'
import Airplane from 'assets/img/airplane.webp'
import Logo from 'assets/img/logo-farel.webp'

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

  googlePlay: {
    width: 40,
    height: 'auto',
    margin: { left: 25, right: 60 },

    '@media (max-width: 790px)': {
      margin: { left: 15, right: 0 },
    },
  },

  appStore: {
    width: 40,
    height: 'auto',
  },

  wrapper: {
    padding: { left: 19, bottom: 10 },
  },

  ellipse: {
    display: 'block',
    width: 7,
    height: 7,
    borderRadius: '100%',
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,

    '&:first-child': {
      marginTop: 14,
    },

    '&:last-child': {
      marginTop: 11,
    },
  },

  logo: {
    width: 73,
    height: 'auto',
    marginRight: 20,

    '@media (max-width: 790px)': {
      marginRight: 0,
    },
  },

  plus: {
    fontSize: 27,
    padding: { left: 14, right: 16 },
    color: ({ theme }) => theme.togglerLangBgColor,

    '@media (max-width: 790px)': {
      padding: { left: 5, right: 5 },
    },
  },

  airplane: {
    width: 106,
    height: 'auto',
    marginRight: 55,

    '@media (max-width: 790px)': {
      marginRight: 0,
    },
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
          {t('topSection.instruction1')}
          <Link to="#" className={classes.brandLink}>
            Farel
          </Link>

          {i18n.language === 'en' ? 'app' : ''}
        </p>

        <img src={AppStore} className={classes.appStore} alt="app-store" />

        <img
          src={GooglePlay}
          className={classes.googlePlay}
          alt="google-play"
        />
      </div>

      <div className={classes.wrapper}>
        <i className={classes.ellipse} />

        <i className={classes.ellipse} />
      </div>

      <div className={classes.item}>
        <i className={classes.counter}>2</i>

        <p className={classes.content}>{t('topSection.instruction2')}</p>

        <img src={Phone} className={classes.phone} alt="phone" />

        <p className={classes.plus}>+</p>

        <img src={Logo} className={classes.logo} alt="logo-farel" />
      </div>

      <div className={classes.wrapper}>
        <i className={classes.ellipse} />

        <i className={classes.ellipse} />
      </div>

      <div className={classes.item}>
        <i className={classes.counter}>3</i>

        <p className={classes.content}>{t('topSection.instruction3')}</p>

        <img src={Airplane} className={classes.airplane} alt="airplane" />
      </div>
    </div>
  )
}

export default Instruction
