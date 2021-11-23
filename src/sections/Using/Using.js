/**
 *
 * Using
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import BrandName from 'shared/components/BrandName/BrandName'
import Instruction from 'shared/components/Instruction/Instruction'
import Markets from 'shared/components/Markets/Markets'

const useStyles = createUseStyles({
  container: {
    maxWidth: 930,
    padding: [0, 15],
    margin: [0, 'auto'],
  },
})

const Using = () => {
  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <section id="using">
      <div className={classes.container}>
        <BrandName />

        <Instruction />

        <Markets />
      </div>
    </section>
  )
}

export default Using
