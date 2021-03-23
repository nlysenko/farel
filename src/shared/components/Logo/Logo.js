/**
 *
 * Logo
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { animateScroll as scroll } from 'react-scroll'

import Farel from 'assets/img/logo-farel.webp'

const useStyles = createUseStyles({
  wrapper: {
    flexGrow: 1,
  },

  logo: {
    display: 'block',
    width: 75,
    height: 56,
    cursor: 'pointer',
  },

  farel: {
    width: '100%',
  },
})

const Logo = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <i className={classes.logo} onClick={scrollToTop}>
        <img className={classes.farel} src={Farel} alt="farel" />
      </i>
    </div>
  )
}

export default Logo
