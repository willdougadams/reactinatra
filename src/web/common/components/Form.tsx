import * as React from 'react'

export interface FormProps {
}

export const Form: React.FC<any> = (props: any) => {
  return (
    <div className='Form'> This is a form. </div>
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
    <label>
      <input type={props.type} name={props.name} />
      { props.label }
    </label>
  )
}
