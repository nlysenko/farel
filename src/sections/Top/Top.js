/**
 *
 * Top
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import Eye from 'assets/img/eye.webp'

const useStyles = createUseStyles({
  container: {
    maxWidth: 930,
    textAlign: 'center',
    padding: {
      top: 50,
      left: 15,
      right: 15,
    },
    margin: [0, 'auto'],
  },

  caption: {
    fontFamily: 'Exo2-Light',
    fontSize: 31,
    color: ({ theme }) => theme.headerColor,

    '@media (max-width: 790px)': {
      fontSize: 25,
    },
  },

  info: {
    paddingTop: 15,
    fontSize: 20,
    fontFamily: 'Exo2-Light',
    color: ({ theme }) => theme.infoColor,

    '@media (max-width: 790px)': {
      fontSize: 16,
    },
  },

  eye: {
    maxWidth: '100%',
    height: 'auto',
    marginTop: 50,
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
  },

  scrollLink: {
    display: 'flex',
    cursor: 'pointer',
    width: 20,
    flexDirection: 'column',
  },

  scrollIcon: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.arrowColor,
    marginBottom: -3,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    transform: 'rotate(45deg)',

    '&:hover': {
      borderColor: ({ theme }) => theme.arrowActiveColor,
    },
  },
})

const Top = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <section className={classes.topSection} id="top">
      <div className={classes.container}>
        <h1 className={classes.caption}>{t('topSection.caption')}</h1>

        <p className={classes.info}>{t('topSection.info')}</p>

        <img src={Eye} className={classes.eye} alt="eye" />

        <div className={classes.inner}>
          <Link to="#" className={classes.scrollLink}>
            <i className={classes.scrollIcon} />

            <i className={classes.scrollIcon} />

            <i className={classes.scrollIcon} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Top
