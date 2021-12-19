/**
 *
 * Main
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Top from 'sections/Top/Top'
import Using from 'sections/Using/Using'
import Tekrum from 'sections/Tekrum/Tekrum'
import Companies from 'sections/Companies/Companies'
import UseOnMobile from 'sections/UseOnMobile/UseOnMobile'
import UseOnContactlessScreens from 'sections/UseOnContactlessScreens/UseOnContactlessScreens'
import Feedback from 'sections/Feedback/Feedback'

const useStyles = createUseStyles({
  main: {
    paddingTop: 60,
  },
})

const Main = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Top />

      <Using />

      <Tekrum />

      <Companies />

      <div id="using">
        <UseOnMobile />

        <UseOnContactlessScreens />
      </div>

      <Feedback />
    </main>
  )
}

export default Main
