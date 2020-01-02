import * as React from 'react'
import useForm from 'react-hook-form'
import { Button, Input } from '@material-ui/core'

interface FormTextInputProps {
  // registerHook is nullable to avoid errors when using it to build forms, this will be added from the Form
  registerHook?: () => any
  name: string
  label?: string
  placeholder?: string
  type?: string
}

export const FormTextInput: React.FC<FormTextInputProps> = (props: FormTextInputProps) => {
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
