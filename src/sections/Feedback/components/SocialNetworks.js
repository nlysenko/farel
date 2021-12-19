/**
 *
 * SocialNetworks
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

import Facebook from 'assets/img/facebook.webp'
import Twitter from 'assets/img/twitter.webp'
import Inst from 'assets/img/inst.webp'

const useStyles = createUseStyles({
  socialNetworks: {
    padding: [0, 5],
    fontSize: 15,
    marginLeft: '6%',

    '@media(max-width: 790px)': {
      marginLeft: 0,
      paddingBottom: 30,
    },
  },

  caption: {
    color: ({ theme }) => theme.togglerLangBgColor,
    paddingLeft: 45,
    fontSize: 15,
  },

  list: {
    paddingTop: 15,
  },

  listItem: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 19,
  },

  facebookLink: {
    display: 'inline-block',
    width: 14,
    height: 25,
    marginLeft: 12,
  },

  twitterLink: {
    display: 'inline-block',
    width: 27,
    height: 22,
  },

  instLink: {
    display: 'inline-block',
    width: 27,
    height: 27,
  },

  icon: {
    display: 'block',
    width: '100%',
    height: '100%',
  },

  userName: {
    color: ({ theme }) => theme.mainTextColor,
    marginLeft: 25,
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.7,
    },
  },
})

const SocialNetworks = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <div className={classes.socialNetworks}>
      <h3 className={classes.caption}>{t('contacts.socialNetworks')}</h3>

      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link to="#" className={classes.facebookLink}>
            <img className={classes.icon} src={Facebook} alt="facebook" />
          </Link>

          <Link to="#" className={classes.userName}>
            userName
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="#" className={classes.twitterLink}>
            <img className={classes.icon} src={Twitter} alt="twitter" />
          </Link>

          <Link to="#" className={classes.userName}>
            userName
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="#" className={classes.instLink}>
            <img className={classes.icon} src={Inst} alt="inst" />
          </Link>

          <Link to="#" className={classes.userName}>
            userName
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialNetworks
