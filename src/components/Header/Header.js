/**
 *
 * Header
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Logo from 'shared/components/Logo/Logo'
import Navbar from 'shared/components/Navbar/Navbar'
import Lang from 'shared/components/Lang/Lang'

import LineMenuIcon from 'shared/components/LineMenuIcon/LineMenuIcon'

import colors from 'styles/colors'

const { menuBgColor } = colors

const useStyles = createUseStyles({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 60,
    backgroundColor: menuBgColor,
  },

  container: {
    maxWidth: 930,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: [0, 15],
    margin: [0, 'auto'],
  },

  lineMenuIcon: {
    display: 'none',

    '@media (max-width: 790px)': {
      display: 'block',
    },
  },
})

const Header = (props) => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />

        <Navbar />

        <Lang />

        <LineMenuIcon />
      </div>
    </header>
  )
}

export default Header
