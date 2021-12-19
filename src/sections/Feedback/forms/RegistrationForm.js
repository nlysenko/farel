/**
 *
 * RegistrationForm
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import InputErrorField from './InputErrorField'

import useInput from './useInput'

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
    color: ({ theme }) => theme.inputTextColor,
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

    '&:hover': {
      backgroundColor: ({ theme }) => theme.arrowActiveColor,
      color: ({ theme }) => theme.inputBgColor,
      cursor: 'pointer',
    },

    '&:disabled': {
      cursor: 'default',
      backgroundColor: ({ theme }) => theme.mobileMenuLineColor,
      color: ({ theme }) => theme.inputTextColor,
    },
  },
})

const RegistrationForm = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })

  const name = useInput('', { isEmpty: true, isName: true })

  const email = useInput('', { isEmpty: true, isEmail: true })

  const phone = useInput('', { isEmpty: true, isPhone: true })

  const hendleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      id: Date.now(),
    }

    console.log('data: ', data)
  }

  return (
    <form
      name="RegistrationForm"
      onSubmit={(e) => hendleSubmit(e)}
      className={classes.registrationForm}
    >
      <div className={classes.formGroup}>
        <input
          type="text"
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          placeholder={t('contacts.name')}
          className={classes.entryField}
        />

        <InputErrorField field="name" input={name} />
      </div>

      <div className={classes.formGroup}>
        <input
          type="email"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          placeholder={t('contacts.mail')}
          className={classes.entryField}
        />

        <InputErrorField field="email" input={email} />
      </div>

      <div className={classes.formGroup}>
        <input
          type="tel"
          value={phone.value}
          onChange={(e) => phone.onChange(e)}
          onBlur={(e) => phone.onBlur(e)}
          placeholder={t('contacts.phone')}
          className={classes.entryField}
        />

        <InputErrorField field="phone" input={phone} />
      </div>

      <button
        type="submit"
        disabled={!name.inputValid || !email.inputValid || !phone.inputValid}
        className={classes.submitBtn}
      >
        {t('contacts.postButton')}
      </button>
    </form>
  )
}

export default RegistrationForm
