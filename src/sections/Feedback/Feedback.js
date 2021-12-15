/**
 *
 * Feedback
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import Contacts from './components/Contacts'
import SocialNetworks from './components/SocialNetworks'
import Registration from './components/Registration'

const useStyles = createUseStyles({
  feedback: {
    backgroundColor: ({ theme }) => theme.mainColor,
    paddingBottom: 48,
  },

  container: {
    margin: [0, 'auto'],
    maxWidth: 940,
    padding: [0, 15],
  },

  caption: {
    fontFamily: 'Exo2-Light',
    fontSize: 28,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: ({ theme }) => theme.mainTextColor,
    paddingTop: 21,

    '@media (max-width: 790px)': {
      fontSize: 20,
    },
  },

  content: {
    display: 'flex',
    paddingTop: 23,

    '@media(max-width: 790px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
})

const Feedback = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <section id="feeback" className={classes.feedback}>
      <div className={classes.container}>
        <h2 className={classes.caption}>{t('contacts.caption')}</h2>

        <div className={classes.content}>
          <Contacts />

          <SocialNetworks />

          <Registration />
        </div>
      </div>
    </section>
  )
}

export default Feedback
