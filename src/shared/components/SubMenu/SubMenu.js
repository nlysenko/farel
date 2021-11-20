/**
 *
 * SubMenu
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { useTranslation } from 'react-i18next'

import ThemeSwitcher from 'shared/components/ThemeSwitcher/ThemeSwitcher'

const useStyles = createUseStyles({
  submenu: {
    display: 'flex',
    justifyContent: 'space-around',
  },

  radioGroup: {
    display: 'flex',
  },

  lang: {
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: ({ theme }) => theme.brRadius,

    '&:last-child': {
      marginLeft: 14,
    },
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
})

const SubMenu = (props) => {
  const { i18n } = useTranslation()
  const theme = useTheme()

  const changeLanguage = (event) => {
    const language = event.target.value

    i18n.changeLanguage(language)
  }

  const classes = useStyles({ theme })
  return (
    <div className={classes.submenu}>
      <div className={classes.radioGroup}>
        <label
          className={`${classes.lang} ${
            i18n.language === 'en' ? classes.active : ''
          }`}
          htmlFor="en"
        >
          <span className={classes.name}>EN</span>

          <input
            className={classes.hiden}
            type="radio"
            name="lang"
            id="en"
            value="en"
            checked={i18n.language === 'en'}
            onChange={changeLanguage}
          />
        </label>

        <label
          className={`${classes.lang} ${
            i18n.language === 'ru' ? classes.active : ''
          }`}
          htmlFor="ru"
        >
          <span className={classes.name}>RU</span>

          <input
            className={classes.hiden}
            type="radio"
            name="lang"
            id="ru"
            value="ru"
            checked={i18n.language === 'ru'}
            onChange={changeLanguage}
          />
        </label>
      </div>

      <div className={classes.themeSwitcher}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default SubMenu
