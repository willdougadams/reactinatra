import '../landing/assets/common.scss'

import * as React from 'react'
import { Form, FormTextInput } from '../common/Form'

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
