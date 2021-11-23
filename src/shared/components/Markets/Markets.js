/**
 *
 * Markets
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Link } from 'react-scroll'

import AppStoreQr from 'assets/img/app-store-qr.webp'
import GooglePlayQr from 'assets/img/google-play-qr.webp'
import AppleIcon from 'assets/img/apple-icon.webp'
import GooglePlayIcon from 'assets/img/google-play-icon.webp'

const useStyles = createUseStyles({
  markets: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: {
      top: 60,
      left: 142,
      right: 142,
    },

    '@media (max-width: 790px)': {
      padding: {
        top: 50,
        left: 15,
        right: 15,
      },
    },

    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  appleWrapper: {
    display: 'flex',
  },

  googleWrapper: {
    display: 'flex',

    '@media (max-width: 480px)': {
      flexDirection: 'row-reverse',
      paddingTop: 25,
    },
  },

  appleStoreQr: {
    width: 48,
    height: 'auto',
    marginRight: 20,
  },

  googlePlayQr: {
    width: 48,
    height: 'auto',
    marginLeft: 20,

    '@media (max-width: 480px)': {
      marginLeft: 0,
      marginRight: 20,
    },
  },

  store: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 12,
    width: 135,
    height: 50,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    fontWeight: 600,
    color: ({ theme }) => theme.togglerLangBgColor,
    borderColor: ({ theme }) => theme.togglerLangBgColor,
    border: {
      width: 1,
      style: 'solid',
      radius: 5,
    },

    '&:hover': {
      cursor: 'pointer',
      color: ({ theme }) => theme.hoverBrandLink,
    },
  },

  appleIcon: {
    width: 24,
    height: 'auto',
    marginRight: 15,
  },

  googleIcon: {
    width: 24,
    height: 'auto',
    marginRight: 7,
  },
})

const Markets = () => {
  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <div className={classes.markets}>
      <div className={classes.appleWrapper}>
        <img
          src={AppStoreQr}
          className={classes.appleStoreQr}
          alt="apple-store-qr"
        />

        <Link to="#" className={classes.store}>
          <img src={AppleIcon} className={classes.appleIcon} alt="apple-icon" />

          <span>App Store</span>
        </Link>
      </div>

      <div className={classes.googleWrapper}>
        <Link to="#" className={classes.store}>
          <img
            src={GooglePlayIcon}
            className={classes.googleIcon}
            alt="google-play-icon"
          />

          <span>Google play</span>
        </Link>

        <img
          src={GooglePlayQr}
          className={classes.googlePlayQr}
          alt="google-play-qr"
        />
      </div>
    </div>
  )
}

export default Markets
