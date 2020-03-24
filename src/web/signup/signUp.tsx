import * as React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import useForm from 'react-hook-form'
import { Button } from '@material-ui/core'
import { darkTheme } from '../assets/theme'

interface FormTextInputProps {
  // registerHook is nullable to avoid errors when using it to build forms, this will be added from the Form
  registerHook?: () => any
  name: string
  label?: string
  placeholder?: string
  type?: string
  error: string
}

export const FormTextInput: React.FC<FormTextInputProps> = (props: FormTextInputProps) => {
  return (
    <div>
      <TextField
        style={{
          marginBottom: '20px'
        }}
        name={props.name}
        inputRef={props.registerHook}
        placeholder={props.placeholder || ''}
        inputProps={{
          'aria-label': 'Description'
        }}
        type={props.type || 'text'}
        error={!!props.error}
        helperText={props.error || ''}
        defaultValue='default'
      />
    </div>
  )
}
export const Form: React.FC<any> = (props: any) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    props.onSubmit(data)
  }

  const children = React.Children.map(props.children, (child: any) => {
    const reg = { registerHook: register }
    return React.cloneElement(child, reg as React.HTMLAttributes<HTMLElement>)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children}
      <Button type="submit">Submit</Button>
    </form>
  )
}

interface signUpPayload {
  name: string
  username: string
  email: string
  password: string
  confirm: string
}

const url = 'http://localhost:4567/api/signup'

export const SignUp: React.FC = (props: any) => {
  const [usernameError, setUsernameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')

  const clearErrors = () => {
    setUsernameError('')
    setEmailError('')
    setPasswordError('')
  }

  const postSignUp = async (body: signUpPayload) => {
    clearErrors()
    if (body.password !== body.confirm) {
      setPasswordError('Passwords do not match')
    } else {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name: body.name,
          username: body.username,
          email: body.email,
          password: body.password
        })
      })
      if (!response.ok) {
        const message = await response.text()
        if (message.includes('UNIQUE constraint failed: users.email')) {
          setEmailError('Email already in use')
        } else if (message.includes('UNIQUE constraint failed: users.username')) {
          setUsernameError('Username already in use')
        }
      } else {
        window.location.href = response.url
      }
    }
  }

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
          <FormTextInput name={'name'} placeholder={'Display Name'} error={''}/>
          <FormTextInput name={'username'} placeholder={'Username'} error={usernameError}/>
          <FormTextInput name={'email'} placeholder={'Contact Email'} error={emailError}/>
          <FormTextInput name={'password'} placeholder={'Password'} type={'password'} error={passwordError}/>
          <FormTextInput name={'confirm'} placeholder={'Confirm Password'} type={'password'} error={passwordError}/>
        </Form>
      </MuiThemeProvider>
    </div>
  )
}
