/**
 *
 * InputErrorField
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

const useStyles = createUseStyles({
  errorWrap: {
    maxWidth: 243,
    color: ({ theme }) => theme.validationErrorColor,
    fontSize: 12,
    padding: [5, 0],
  },
})

const InputErrorField = ({ field, input }) => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })

  if (field === 'name')
    return (
      <div className={classes.errorWrap}>
        {input.isDirty && input.isEmpty ? <p>{t('contacts.error')}</p> : false}

        {input.isDirty && !input.isEmpty && input.nameError ? (
          <p>{t('contacts.nameError')}</p>
        ) : (
          false
        )}
      </div>
    )

  if (field === 'email')
    return (
      <div className={classes.errorWrap}>
        {input.isDirty && input.isEmpty ? <p>{t('contacts.error')}</p> : false}

        {input.isDirty && !input.isEmpty && input.emailError ? (
          <p>{t('contacts.emailError')}</p>
        ) : (
          false
        )}
      </div>
    )

  if (field === 'phone')
    return (
      <div className={classes.errorWrap}>
        {input.isDirty && input.isEmpty ? <p>{t('contacts.error')}</p> : false}

        {input.isDirty && !input.isEmpty && input.phoneError ? (
          <p>{t('contacts.phoneError')}</p>
        ) : (
          false
        )}
      </div>
    )
}

export default InputErrorField
