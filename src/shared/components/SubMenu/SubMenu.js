/**
 *
 * SubMenu
 *
 */

import React, { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import { toggleTheme } from 'app/redux/actions'
import { darkTheme, lightTheme } from 'app/themes'

const useStyles = createUseStyles({
  submenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },

  radioGroup: {
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
    borderRadius: ({ theme }) => theme.togglerLangBrRadius,
  },

  active: {
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
    transition: '.5s',
  },

  hiden: {
    display: 'none',
  },

  name: {
    fontSize: 15,
    color: ({ theme }) => theme.mainTextColor,
    transition: '.5s',
  },

  title: {
    fontSize: 12,
  },

  themeSwitcher: {
    marginLeft: 14,
  },

  themeSwitcherInner: {
    display: 'flex',
    flexDirection: 'column',
  },

  customSelect: {
    width: 50,
    height: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    cursor: 'pointer',

    '&:hover': {
      height: 32,
    },
  },

  option: {
    paddingLeft: 3,
    fontSize: 12,

    '&:hover': {
      backgroundColor: '#555',
    },
  },
})

const SubMenu = (props) => {
  const { toggleTheme } = props

  const { i18n } = useTranslation()
  const theme = useTheme()

  const [lang, setLang] = useState(i18n.language)
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true)

  const changeLanguage = (event) => {
    const language = event.target.value

    i18n.changeLanguage(language)

    setLang(language)
  }

  const switchTheme = () => {
    const theme = darkThemeEnabled ? lightTheme : darkTheme

    toggleTheme(theme)

    setDarkThemeEnabled(!darkThemeEnabled)
  }

  const classes = useStyles({ theme })
  return (
    <div className={classes.submenu}>
      <div className={classes.radioGroup}>
        <label
          className={`${classes.lang} ${lang === 'en' ? classes.active : ''}`}
          htmlFor="en"
        >
          <span className={classes.name}>EN</span>

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
          <span className={classes.name}>RU</span>

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

      <div className={classes.themeSwitcher} />
    </div>
  )
}

const mapDispatchToProps = {
  toggleTheme: toggleTheme,
}

export default connect(null, mapDispatchToProps)(SubMenu)
