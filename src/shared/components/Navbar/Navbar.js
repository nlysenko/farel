/**
 *
 * Navbar
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const useStyles = createUseStyles({
  navbar: {
    '@media (max-width: 790px)': {
      display: 'none',
    },
  },

  navbarList: {
    display: 'flex',
  },

  navItem: {
    paddingLeft: 30,

    '&:last-child': {
      paddingLeft: 40,
    },
  },

  navLink: {
    fontSize: 15,

    '&:hover': {
      cursor: 'pointer',
    },
  },
})

const Navbar = () => {
  const { t } = useTranslation()

  const classes = useStyles()
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbarList}>
        <li className={classes.navItem}>
          <Link className={classes.navLink} to="#">
            {t('header.act')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link className={classes.navLink} to="#">
            {t('header.using')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link className={classes.navLink} to="#">
            {t('header.works')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link className={classes.navLink} to="#">
            {t('header.blog')}
          </Link>
        </li>

        <li className={classes.navItem}>
          <Link className={classes.navLink} to="#">
            {t('header.contacts')}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
