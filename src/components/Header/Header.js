/**
 *
 * Header
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Logo from 'shared/components/Logo/Logo'
import Navbar from 'shared/components/Navbar/Navbar'
import SubMenu from 'shared/components/SubMenu/SubMenu'

import LineMenuIcon from 'shared/components/LineMenuIcon/LineMenuIcon'

const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 60,
    backgroundColor: ({ theme }) => theme.mainColor,
    transition: '0.5s',
  },

  container: {
    maxWidth: 930,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: [0, 15],
    margin: [0, 'auto'],
  },

  logoWrapper: {
    flexGrow: 1,
  },

  navbarWrapper: {
    flexGrow: 5,
    padding: [0, 20],

    '@media (max-width: 790px)': {
      display: 'none',
    },
  },

  subMenuWrapper: {
    flexGrow: 1,

    '@media (max-width: 790px)': {
      display: 'none',
    },
  },
})

const Header = (props) => {
  const { toggleMobileMenu } = props

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoWrapper}>
          <Logo />
        </div>

        <div className={classes.navbarWrapper}>
          <Navbar />
        </div>

        <div className={classes.subMenuWrapper}>
          <SubMenu />
        </div>

        <LineMenuIcon toggleMobileMenu={toggleMobileMenu} />
      </div>
    </header>
  )
}

export default Header
