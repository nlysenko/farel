/**
 *
 * Logo
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-scroll'

import Farel from 'assets/img/logo-farel.webp'

const useStyles = createUseStyles({
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
  const classes = useStyles()

  return (
    <Link to="#" className={classes.logo}>
      <img className={classes.farel} src={Farel} alt="farel" />
    </Link>
  )
}

export default Logo
