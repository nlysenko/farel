/**
 *
 * theme switcher
 *
 */

import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'
import { createUseStyles, useTheme } from 'react-jss'

import { useTranslation } from 'react-i18next'

import { toggleTheme } from 'app/redux/actions'
import { darkTheme, lightTheme } from 'app/themes'

import useOutsideClick from 'app/useOutsideClick'

const vars = {
  togglerWidth: '70px',
  togglerHeight: '20px',
  menuStartingTop: '5px',
  menuEndingTop: '30px',
  menuWidth: '70px',
  menuMaxHeight: '60px',
  fadeFromColor: 'transparent',
  fadeToColor: 'black',
  timeout: '350ms',
}

const startTransitionStyles = {
  top: vars.menuStartingTop,
  width: vars.togglerWidth,
  maxHeight: vars.togglerHeight,
  color: vars.fadeFromColor,
}

const finishTransitionStyles = {
  top: vars.menuEndingTop,
  width: vars.menuWidth,
  maxHeight: vars.menuMaxHeight,
  color: vars.fadeToColor,
}

const useStyles = createUseStyles({
  container: {
    position: 'relative',
  },

  toggler: {
    position: 'relative',
    zIndex: '2',
    width: vars.togglerWidth,
    height: vars.togglerHeight,
    backgroundColor: ({ theme }) => theme.togglerBgColor,
    border: 'none',
    borderRadius: ({ theme }) => theme.brRadius,
    outline: 'none',
    cursor: 'pointer',
    transition: 'background-color 350ms',
  },

  togglerActive: {
    backgroundColor: ({ theme }) => theme.togglerActiveBgColor,
  },

  menu: {
    position: 'absolute',
    top: vars.menuEndingTop,
    zIndex: '1',
    boxSizing: 'border-box',
    width: vars.menuWidth,
    overflow: 'hidden',
    backgroundColor: ({ theme }) => theme.menuBgColor,
    borderRadius: ({ theme }) => theme.brRadius,
  },

  list: {
    padding: '0',
    listStyleType: 'none',
  },

  listItem: {
    textAlign: 'center',
    cursor: 'pointer',
    padding: 3,

    '&:hover': {
      backgroundColor: ({ theme }) => theme.togglerActiveBgColor,
    },
  },

  listItemActive: {
    fontWeight: 'bold',
  },

  balloonEnter: {
    ...startTransitionStyles,
    backgroundColor: ({ theme }) => theme.togglerBgColor,
  },

  balloonEnterActive: {
    ...finishTransitionStyles,
    backgroundColor: ({ theme }) => theme.menuBgColor,
    transition: `all ${vars.timeout}`,
  },

  balloonExit: {
    ...finishTransitionStyles,
    backgroundColor: ({ theme }) => theme.menuBgColor,
  },

  balloonExitActive: {
    ...startTransitionStyles,
    backgroundColor: ({ theme }) => theme.togglerBgColor,
    transition: `all ${vars.timeout}`,
  },
})

const ThemeSwitcher = (props) => {
  const { toggleTheme, currentThemeName } = props

  const [balloonIsVisible, setBalloonIsVisible] = useState(false)

  const toggleMenu = () => {
    setBalloonIsVisible(!balloonIsVisible)
  }

  const switchTheme = (theme) => {
    if (currentThemeName !== theme.name) {
      toggleTheme(theme)

      toggleMenu()
    }

    toggleMenu()
  }

  const ref = useRef()

  useOutsideClick(ref, () => {
    if (balloonIsVisible) setBalloonIsVisible(false)
  })

  const theme = useTheme()

  const nodeRef = useRef(null)

  const { t } = useTranslation()

  const classes = useStyles({ theme })
  return (
    <div className={classes.container}>
      <button
        className={cx(classes.toggler, {
          [classes.togglerActive]: balloonIsVisible,
        })}
        ref={ref}
        onClick={toggleMenu}
      >
        {t('header.theme')}
      </button>

      <CSSTransition
        in={balloonIsVisible}
        timeout={350}
        unmountOnExit
        nodeRef={nodeRef}
        classNames={{
          enter: classes.balloonEnter,
          enterActive: classes.balloonEnterActive,
          exit: classes.balloonExit,
          exitActive: classes.balloonExitActive,
        }}
      >
        {(status) => (
          <div className={classes.menu} ref={nodeRef}>
            <ul className={classes.list}>
              <li
                className={`${classes.listItem} ${
                  currentThemeName === 'Dark' ? classes.listItemActive : ''
                }`}
                onClick={() => switchTheme(darkTheme)}
              >
                {t('header.dark')}
              </li>

              <li
                className={`${classes.listItem} ${
                  currentThemeName === 'Light' ? classes.listItemActive : ''
                }`}
                onClick={() => switchTheme(lightTheme)}
              >
                {t('header.light')}
              </li>
            </ul>
          </div>
        )}
      </CSSTransition>
    </div>
  )
}

const mapDispatchToProps = {
  toggleTheme: toggleTheme,
}

const mapStateToProps = function(state) {
  return {
    currentThemeName: state.theme.name,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher)
