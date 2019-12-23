import '../landing/assets/common.scss'
import '../common/components/Form.scss'

import * as React from 'react'
import useForm from 'react-hook-form'
import { Button, Input } from '@material-ui/core'

interface FormTextInputProps {
  // registerHook is nullable to avoid errors when using it to build forms, this will be added from the form
  registerHook?: () => any
  name: string
  label?: string
  placeholder?: string
  type?: string
}

const FormTextInput: React.FC<FormTextInputProps> = (props: FormTextInputProps) => {
  return (
    <div>
      <Input
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
      />
    </div>
  )
}

const Form: React.FC<any> = (props: any) => {
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

export const Signup: React.FC = (props: any) => {
  const submitForm = (data: any) => {
    console.log(data)
  }

  return (
    <div className="NavLinkForm">
      <Form onSubmit={submitForm}>
        <FormTextInput name={'name'} placeholder={'Display Name'} />
        <FormTextInput name={'email'} placeholder={'Contact Email'} />
        <FormTextInput name={'password'} placeholder={'Password'} type={'password'} />
        <FormTextInput name={'confirm'} placeholder={'Confirm Password'} type={'password'} />
      </Form>
    </div>
  )
}
