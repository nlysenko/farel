/**
 *
 * Companies
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import Ikea from 'assets/img/ikea.webp'
import Invircasa from 'assets/img/invircasa.webp'
import Loreal from 'assets/img/loreal.webp'
import NationalGeographic from 'assets/img/national-geographic.webp'
import Volkswagen from 'assets/img/volkswagen.webp'
import Esquire from 'assets/img/esquire.webp'

const useStyles = createUseStyles({
  caption: {
    fontSize: 28,
    fontFamily: 'Exo2-Light',
    textTransform: 'uppercase',
    color: ({ theme }) => theme.headerColor,
    textAlign: 'center',
    padding: {
      top: 33,
      left: 15,
      right: 15,
    },

    '@media (max-width: 790px)': {
      fontSize: 20,
      padding: { top: 25, left: 0, right: 0 },
    },
  },

  container: {
    maxWidth: 830,
    padding: { left: 15, right: 15 },
    margin: [0, 'auto'],
  },

  companies: {
    paddingTop: 70,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '95px 40px',
    alignItems: 'center',
    justifyItems: 'center',

    '@media (max-width: 860px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '60px 40px',
    },

    '@media (max-width: 670px)': {
      gridTemplateColumns: '1fr',
      gap: '30',
    },
  },
})

const Companies = () => {
  const { t } = useTranslation()

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <section className={classes.companiesSection}>
      <div className={classes.container}>
        <h2 className={classes.caption}>{t('companies.caption')}</h2>

        <div className={classes.companies}>
          <img src={Ikea} className={classes.logo} alt="ikea" />
          <img
            src={NationalGeographic}
            className={classes.logo}
            alt="national-geographic"
          />
          <img src={Loreal} className={classes.logo} alt="loreal" />
          <img src={Volkswagen} className={classes.logo} alt="volkswagen" />
          <img src={Esquire} className={classes.logo} alt="esquire" />
          <img src={Invircasa} className={classes.logo} alt="invircasa" />
        </div>
      </div>
    </section>
  )
}

export default Companies
