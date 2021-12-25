/**
 *
 * App
 *
 */

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider, createUseStyles } from 'react-jss'

import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import MobileMenu from 'shared/components/MobileMenu/MobileMenu'

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },

    a: {
      color: '#fff',
      textDecoration: 'none',
    },

    body: {
      color: '#000',
      backgroundColor: 'rgb(243, 243, 243)',
      fontSize: 16,
      fontFamily: 'OpenSans-Light',
    },

    ul: {
      listStyle: 'none',
    },

    input: {
      font: 'inherit',
    },
  },

  overlay: {
    position: 'fixed',
    zIndex: 200,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.3,
    display: 'none',

    '@media (max-width: 790px)': {
      display: 'block',
    },
  },
})

const App = (props) => {
  const { theme } = props

  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false)
  const [overlaysIsVisible, setOverlaysIsVisible] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuIsVisible(!mobileMenuIsVisible)
  }

  useEffect(() => {
    function handleResize() {
      setOverlaysIsVisible(window.innerWidth < 790)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (mobileMenuIsVisible && overlaysIsVisible) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'visible'
  }, [mobileMenuIsVisible, overlaysIsVisible])

  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      {mobileMenuIsVisible && overlaysIsVisible ? (
        <div className={classes.overlay} onClick={toggleMobileMenu} />
      ) : (
        false
      )}

      <MobileMenu mobileMenuIsVisible={mobileMenuIsVisible} />

      <div>
        <Header toggleMobileMenu={toggleMobileMenu} />

        <Main />
      </div>
    </ThemeProvider>
  )
}

const mapStateToProps = function(state) {
  return {
    theme: state.theme,
  }
}

export default connect(mapStateToProps)(App)
