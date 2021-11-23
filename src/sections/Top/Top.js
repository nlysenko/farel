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
    padding: [0, 15],
    margin: [0, 'auto'],
  },

  caption: {
    padding: [43, 0, 6, 0],
    fontFamily: 'Exo2-Light',
    fontSize: 31,
    textTransform: 'uppercase',
    color: ({ theme }) => theme.headerColor,

    '@media (max-width: 790px)': {
      fontSize: 25,
    },
  },

  info: {
    paddingLeft: 45,
    fontSize: 20,
    fontFamily: 'Exo2-Light',
    color: ({ theme }) => theme.infoColor,

    '@media (max-width: 790px)': {
      fontSize: 16,
    },
  },

  eyeImg: {
    maxWidth: '100%',
    height: 'auto',
    marginTop: 51,
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 44,
  },

  scrollLink: {
    display: 'flex',
    cursor: 'pointer',
    width: 16,
    flexDirection: 'column',

    '&:hover > i': {
      borderColor: ({ theme }) => theme.arrowActiveColor,
    },
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

    '&:nth-child(2)': {
      borderColor: ({ theme }) => theme.arrowActiveColor,
    },
  },
})

const Top = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <section id="top">
      <div className={classes.container}>
        <h1 className={classes.caption}>{t('topSection.caption')}</h1>

        <p className={classes.info}>{t('topSection.info')}</p>

        <img src={Eye} className={classes.eyeImg} alt="eye" />

        <div className={classes.inner}>
          <Link
            to="using"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes.scrollLink}
          >
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
