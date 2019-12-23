import '../landing/assets/common.scss'
import '../common/components/Form.scss'

import * as React from 'react'
import useForm from 'react-hook-form'
import {Button, Input, TextField} from '@material-ui/core'

export const Signup: React.FC = (props: any) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className="NavLinkForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            style={{
              marginBottom: "20px"
            }}
            name="HelloWorld"
            inputRef={register}
            placeholder="Material UI - Input"
            inputProps={{
              "aria-label": "Description"
            }}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
