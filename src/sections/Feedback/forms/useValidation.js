/**
 *
 * useValidation
 *
 */

import { useState, useEffect } from 'react'

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break

        case 'isName':
          const nameRegEx = /^[a-zA-Zа-яА-Я]?([a-zA-Zа-яА-Я0-9]|\s(?!\s)){2,60}[^\s]$/

          nameRegEx.test(String(value).toLowerCase())
            ? setNameError(false)
            : setNameError(true)
          break

        case 'isEmail':
          const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

          emailRegEx.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true)
          break

        case 'isPhone':
          const phoneRegEx = /^[+]{0,1}380([0-9]{9})$/

          phoneRegEx.test(String(value).toLowerCase())
            ? setPhoneError(false)
            : setPhoneError(true)
          break

        default:
      }
    }
  }, [value, validations])

  useEffect(() => {
    if (isEmpty || nameError || emailError || phoneError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty, nameError, emailError, phoneError])

  return {
    isEmpty,
    nameError,
    emailError,
    phoneError,
    inputValid,
  }
}

export default useValidation
