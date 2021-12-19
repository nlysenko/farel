/**
 *
 * Registration
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import RegistrationForm from '../forms/RegistrationForm'

const useStyles = createUseStyles({
  registration: {
    padding: [0, 6],
    marginLeft: 'auto',

    '@media(max-width: 790px)': {
      marginLeft: 0,
    },
  },

  caption: {
    color: ({ theme }) => theme.togglerLangBgColor,
    fontSize: 15,
    paddingLeft: 56,
  },
})

const Registration = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <div className={classes.registration}>
      <h3 className={classes.caption}>{t('contacts.feedback')}</h3>

      <RegistrationForm />
    </div>
  )
}

export default Registration
