/**
 *
 * Tekrum
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

const useStyles = createUseStyles({
  tekrum: {
    marginTop: 61,
    backgroundColor: ({ theme }) => theme.mainColor,
    padding: { top: 30, bottom: 40 },

    '@media (max-width: 790px)': {
      marginTop: 50,
      padding: { top: 20, bottom: 25 },
    },
  },

  container: {
    margin: [0, 'auto'],
    maxWidth: 810,
    padding: [0, 15],
  },

  info: {
    fontSize: 18,
    lineHeight: 1.2,
    textAlign: 'center',
    color: ({ theme }) => theme.mainTextColor,

    '@media (max-width: 790px)': {
      fontSize: 14,
    },
  },
})

const Tekrum = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <section className={classes.tekrum}>
      <div className={classes.container}>
        <p className={classes.info}>{t('tekrum.info')}</p>
      </div>
    </section>
  )
}

export default Tekrum
