/**
 *
 * RegistrationForm
 *
 */

import React, { useState, useEffect } from 'react'
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

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break

        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break

        case 'isEmail':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true)
          break

        default:
      }
    }
  }, [value, validations])

  useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, minLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    emailError,
    inputValid,
  }
}

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)

  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    setIsDirty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  }
}

const RegistrationForm = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })

  const name = useInput('', { isEmpty: 'true', minLength: 3 })
  const email = useInput('', { isEmpty: 'true', minLength: 5, isEmail: true })
  const phone = useInput('', { isEmpty: 'true', minLength: 7 })

  return (
    <form name="RegistrationForm" className={classes.registrationForm}>
      <div className={classes.formGroup}>
        <input
          type="text"
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          placeholder={t('contacts.name')}
          className={classes.entryField}
        />

        {name.isDirty && name.isEmpty ? (
          <div>Поле не может быть пустым</div>
        ) : (
          false
        )}

        {name.isDirty && name.minLengthError ? (
          <div>Слишком короткое имя!</div>
        ) : (
          false
        )}
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

        {email.isDirty && email.isEmpty ? (
          <div>Поле не может быть пустым</div>
        ) : (
          false
        )}

        {email.isDirty && email.emailError ? (
          <div>Некорректный эмейл</div>
        ) : (
          false
        )}
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

        {phone.isDirty && phone.isEmpty ? (
          <div>Поле не может быть пустым</div>
        ) : (
          false
        )}

        {phone.isDirty && phone.minLengthError ? (
          <div>Не менее 7 символов</div>
        ) : (
          false
        )}
      </div>

      <button
        type="submit"
        disabled={!name.inputValid || !email.inputValid || phone.inputValid}
        className={classes.submitBtn}
      >
        {t('contacts.postButton')}
      </button>
    </form>
  )
}

export default RegistrationForm
