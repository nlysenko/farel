/**
 *
 * Contacts
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

import Mail from 'assets/img/mail.webp'
import Handset from 'assets/img/handset.webp'
import Location from 'assets/img/location.webp'

const useStyles = createUseStyles({
  contacts: {
    padding: [0, 5],
    fontSize: 15,

    '@media(max-width: 790px)': {
      paddingBottom: 30,
      maxWidth: 230,
    },
  },

  caption: {
    color: ({ theme }) => theme.togglerLangBgColor,
    paddingLeft: 62,
    fontSize: 15,
  },

  list: {
    color: ({ theme }) => theme.mainTextColor,
    paddingTop: 18,
  },

  listItem: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 17,
  },

  mailLink: {
    display: 'inline-block',
    width: 30,
    height: 21,
    cursor: 'pointer',
  },

  phoneLink: {
    extend: 'mailLink',
    width: 25,
    height: 24,
  },

  locationLink: {
    extend: 'mailLink',
    width: 22,
    height: 31,
  },

  icon: {
    display: 'block',
    width: '100%',
    height: '100%',
  },

  mailAddress: {
    marginLeft: 19,
    cursor: 'pointer',
  },

  phoneNumber: {
    marginLeft: 24,
  },

  address: {
    marginLeft: 26,
  },
})

const Contacts = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <div className={classes.contacts}>
      <h3 className={classes.caption}>{t('contacts.contactsName')}</h3>

      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link to="#" className={classes.mailLink}>
            <img className={classes.icon} src={Mail} alt="mail" />
          </Link>

          <Link to="#" className={classes.mailAddress}>
            {t('contacts.mailAddress')}
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="#" className={classes.phoneLink}>
            <img className={classes.icon} src={Handset} alt="phone" />
          </Link>

          <span className={classes.phoneNumber}>
            {t('contacts.phoneNumber')}
          </span>
        </li>

        <li className={classes.listItem}>
          <Link to="#" className={classes.locationLink}>
            <img className={classes.icon} src={Location} alt="location" />
          </Link>

          <span className={classes.address}>{t('contacts.address')}</span>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
