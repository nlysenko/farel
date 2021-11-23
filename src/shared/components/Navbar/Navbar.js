/**
 *
 * Navbar
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const useStyles = createUseStyles({
  navbar: {
    display: 'flex',
  },

  navbarList: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

    '@media (max-width: 790px)': {
      flexDirection: 'column',
    },
  },

  navItem: {
    height: 25,

    '&:last-child': {
      paddingLeft: 10,

      '@media (max-width: 790px)': {
        paddingLeft: '0',
      },
    },

    '@media (max-width: 790px)': {
      marginTop: 15,
    },
  },

  navLink: {
    fontSize: 15,
    paddingBottom: 5,
    color: ({ theme }) => theme.mainTextColor,

    '&:hover': {
      cursor: 'pointer',
    },
  },

  active: {
    borderBottom: ['1px', 'solid'],
    borderColor: ({ theme }) => theme.activeLinkBrColor,
  },
})

const Navbar = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbarList}>
        <li className={classes.navItem}>
          <Link
            className={classes.navLink}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="top"
          >
            {t('header.act')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link
            className={classes.navLink}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="using"
          >
            {t('header.using')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link
            className={classes.navLink}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="#"
          >
            {t('header.works')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link
            className={classes.navLink}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="#"
          >
            {t('header.blog')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link
            className={classes.navLink}
            activeClass={classes.active}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="#"
          >
            {t('header.contacts')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
