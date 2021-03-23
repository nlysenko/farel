/**
 *
 * App
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider, createUseStyles } from 'react-jss'

import Header from 'components/Header/Header'
import Main from 'components/Main/Main'

import colors from 'styles/colors'

const { colorBalck, colorWhite } = colors

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
      color: colorWhite,
      textDecoration: 'none',
    },

    body: {
      color: colorBalck,
      background: colorWhite,
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
})

const App = (props) => {
  const { theme } = props

  useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />

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
