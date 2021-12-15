/**
 *
 * RegistrationForm
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

const useStyles = createUseStyles({
  registrationForm: {
    paddingTop: 16,
  },

  formGroup: {
    paddingBottom: 9,
  },

  entryField: {
    border: 'none',
    outline: 'none !important',
    backgroundColor: ({ theme }) => theme.inputBgColor,
    fontFamily: 'OpenSans-Light',
    padding: [0, 11],
    fontSize: 15,
    color: ({ theme }) => theme.mainColor,
    width: 243,
    height: 31,

    '&::placeholder': {
      color: ({ theme }) => theme.inputPlaceholderColor,
    },
  },

  submitBtn: {
    display: 'inline-block',
    border: 'none',
    width: 160,
    height: 26,
    margin: {
      left: 43,
      top: 3,
    },
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: ({ theme }) => theme.mainTextColor,
    backgroundColor: ({ theme }) => theme.mainBlueColor,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: ({ theme }) => theme.arrowActiveColor,
      color: ({ theme }) => theme.inputBgColor,
    },
  },
})

const RegistrationForm = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <form name="RegistrationForm" className={classes.registrationForm}>
      <div className={classes.formGroup}>
        <input
          type="text"
          placeholder={t('contacts.name')}
          className={classes.entryField}
        />
      </div>

      <div className={classes.formGroup}>
        <input
          type="email"
          placeholder={t('contacts.mail')}
          className={classes.entryField}
        />
      </div>

      <div className={classes.formGroup}>
        <input
          type="tel"
          placeholder={t('contacts.phone')}
          className={classes.entryField}
        />
      </div>

      <button type="submit" className={classes.submitBtn}>
        {t('contacts.postButton')}
      </button>
    </form>
  )
}

export default RegistrationForm
