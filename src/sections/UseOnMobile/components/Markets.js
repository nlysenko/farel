/**
 *
 * Markets
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-scroll'

import Line from '../UI/figures/Line'

import AppStore from 'assets/img/app-store-icon.webp'
import GooglePlay from 'assets/img/google-play-icon.webp'

const useStyles = createUseStyles({
  markets: {
    width: 84,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  appStoreLink: {
    cursor: 'pointer',
    maxWidth: 36,
    maxHeight: 36,
  },

  googlePlayLink: {
    extend: 'appStoreLink',
    marginTop: 27,
    maxHeight: 38,
  },

  appStore: {
    maxWidth: '100%',
    height: 'auto',
  },

  googlePlay: {
    extend: 'appStore',
  },
})

const firstLineStyles = {
  top: 33,
  left: 37,
  width: 43,
  height: 1,
  tiltAngle: '19deg',
}
const secondLineStyles = {
  top: 69,
  left: 37,
  width: 43,
  height: 1,
  tiltAngle: '342deg',
}

const Markets = () => {
  const classes = useStyles()

  return (
    <div className={classes.markets}>
      <Link className={classes.appStoreLink} to="#">
        <img className={classes.appStore} src={AppStore} alt="app-store" />
      </Link>

      <Link className={classes.googlePlayLink} to="#">
        <img
          className={classes.googlePlay}
          src={GooglePlay}
          alt="google-play"
        />
      </Link>

      <Line stylization={firstLineStyles} />

      <Line stylization={secondLineStyles} />
    </div>
  )
}

export default Markets
