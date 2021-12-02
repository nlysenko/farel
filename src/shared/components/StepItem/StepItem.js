/**
 *
 * StepItem
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Circle from 'shared/components/Circle/Circle'

const useStyles = createUseStyles({
  step: {
    display: 'flex',
    flexDirection: ({ flexDirection }) => flexDirection,
    alignItems: 'center',
  },

  stepName: {
    fontSize: 15,
    color: ({ theme }) => theme.mainTextColor,
    textAlign: 'center',
    lineHeight: 1.2,
  },
})

const StepItem = ({ name, num, flexDirection }) => {
  const theme = useTheme()

  const classes = useStyles({ theme, flexDirection })
  return (
    <div className={classes.step}>
      <p className={classes.stepName}>{name}</p>

      <Circle number={num} />
    </div>
  )
}

export default StepItem
