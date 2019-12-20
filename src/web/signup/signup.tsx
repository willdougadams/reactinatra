import '../assets/common.scss'
import '../common/components/Form.scss'

import * as React from 'react'
import Button from '@material-ui/core/Button'

// import logo from '../assets/react.svg'
// import * as sinatra from './sinatra.png'
// import SVG from 'react-inlinesvg'

export interface FormProps {
}

export const Form: React.FC<any> = (props: any) => {
  return (
    <div className='Form'> { ...props.children } </div>
  )
}

export interface FormItemProps {
  name: string
  type: string
  label: string
  onClick?: (event: any) => any
}

export const FormInput: React.FC<FormItemProps> = (props: FormItemProps) => {
  return (
    <label className='FormInput'>
      <input type={props.type} name={props.name} />
      { props.label }
    </label>
  )
}

export const Signup: React.FC = () => {
  return (
    <div className="App App-header">
      <h3>Welcome!  Create your user below</h3>
      <Form className='Form'>
        <FormInput name={'name'} type={'text'} label={'Name'} />
        <FormInput name={'username'} type={'text'} label={'Username'} />
        <FormInput name={'email'} type={'text'} label={'Email'} />
        <FormInput name={'password'} type={'text'} label={'Name'} />
        <FormInput name={'password'} type={'text'} label={'Confirm Password'} />
        <Button classes={{ label: 'Button' }} size='small' variant="contained" color='primary' >
          Hello World
        </Button>
      </Form>
      {/* }
      <SVG
        src={logo}
        width='33%'
      />
      <img
        src={sinatra}
        width='33%'
      />
      */}
    </div>
  )
}
