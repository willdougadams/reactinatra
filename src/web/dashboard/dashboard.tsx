import * as React from 'react'
import { darkTheme } from '../assets/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

export interface DashboardProps {
  userId: string
}

export const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">Dashboard for User #{ props.userId } </div>
    </MuiThemeProvider>
  )
}
