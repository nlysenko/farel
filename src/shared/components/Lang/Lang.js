/**
 *
 * Lang
 *
 */

import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useTranslation } from 'react-i18next'

import colors from 'styles/colors'

const { colorWhite, togglerLangBgColor } = colors

const useStyles = createUseStyles({
  submenu: {
    display: 'flex',

    '@media (max-width: 790px)': {
      display: 'none',
    },
  },

  lang: {
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: 14,
  },

  active: {
    background: togglerLangBgColor,
  },

  hiden: {
    display: 'none',
  },

  title: {
    fontSize: 15,
    color: colorWhite,
  },
})

const Lang = (props) => {
  const { i18n } = useTranslation()

  const [lang, setLang] = useState(i18n.language)

  const changeLanguage = (event) => {
    const language = event.target.value

    i18n.changeLanguage(language)

    setLang(language)
  }

  const classes = useStyles()
  return (
    <div className={classes.submenu}>
      <label
        className={`${classes.lang} ${lang === 'en' ? classes.active : ''}`}
        htmlFor="en"
      >
        <span className={classes.title}>EN</span>

        <input
          className={classes.hiden}
          type="radio"
          name="lang"
          id="en"
          value="en"
          checked={lang === 'en'}
          onChange={changeLanguage}
        />
      </label>

      <label
        className={`${classes.lang} ${lang === 'ru' ? classes.active : ''}`}
        htmlFor="ru"
      >
        <span className={classes.title}>RU</span>

        <input
          className={classes.hiden}
          type="radio"
          name="lang"
          id="ru"
          value="ru"
          checked={lang === 'ru'}
          onChange={changeLanguage}
        />
      </label>
    </div>
  )
}

export default Lang
