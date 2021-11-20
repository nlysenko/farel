/**
 *
 * MobileMenu
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Logo from 'shared/components/Logo/Logo'

const useStyles = createUseStyles({
  menu: {
    position: 'fixed',
    top: 0,
    left: -200,
    zIndex: 300,
    backgroundColor: ({ theme }) => theme.mainColor,
    width: 200,
    height: 400,
    transition: '0.5s',
    display: 'none',
    overflow: 'scroll',
    borderBottomRightRadius: ({ theme }) => theme.brRadius,

    '@media (max-width: 790px)': {
      display: 'block',
    },
  },

  menuIsActive: {
    left: 0,
    transition: '0.5s',
  },

  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderBottom: {
      style: 'solid',
      width: 1,
    },
    borderBottomColor: ({ theme }) => theme.mobileMenuLineColor,
  },
})

const MobileMenu = (props) => {
  const { mobileMenuIsVisible } = props

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <div
      className={`${classes.menu} ${
        mobileMenuIsVisible ? classes.menuIsActive : ''
      }`}
    >
      <div className={classes.logoWrapper}>
        <Logo />
      </div>
    </div>
  )
}

export default MobileMenu
