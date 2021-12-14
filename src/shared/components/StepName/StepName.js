/**
 *
 * StepName
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Circle from 'shared/components/Circle/Circle'

const useStyles = createUseStyles({
  step: {
    display: 'flex',
    flexDirection: ({ flexDirection }) => flexDirection || 'column',
    alignItems: 'center',
  },

  stepName: {
    fontSize: 15,
    color: ({ theme, color }) => {
      return color === 'dark' ? theme.mainColor : theme.mainTextColor
    },

    lineHeight: 1.2,
    textAlign: 'center',
  },
})

const StepName = ({ options, stylization }) => {
  const { flexDirection, margin, color } = stylization
  const { name, num } = options
  const theme = useTheme()
  const classes = useStyles({ theme, flexDirection, color })

  return (
    <div className={classes.step}>
      <p className={classes.stepName}>{name}</p>

      <Circle number={num} margin={margin} />
    </div>
  )
}

export default StepName
