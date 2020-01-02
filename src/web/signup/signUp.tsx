import * as React from 'react'
import { Form, FormTextInput } from '../common/Form'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

interface signUpPayload {
  name: string,
  username: string,
  password: string
}

const url = 'http://localhost:4567/api/signup'

const postSignUp = (body: signUpPayload) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
}

export const SignUp: React.FC = (props: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Form
          onSubmit={postSignUp}
        >
          <FormTextInput name={'name'} placeholder={'Display Name'} />
          <FormTextInput name={'email'} placeholder={'Contact Email'} />
          <FormTextInput name={'password'} placeholder={'Password'} type={'password'} />
          <FormTextInput name={'confirm'} placeholder={'Confirm Password'} type={'password'} />
        </Form>
      </MuiThemeProvider>
    </div>
  )
}
