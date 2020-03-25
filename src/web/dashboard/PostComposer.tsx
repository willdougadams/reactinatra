import * as React from 'react'

import { PostComposerProps } from './types'
import { Button, TextField } from '@material-ui/core'
import { postUserPost } from '../api'

export const PostComposer: React.FC<PostComposerProps> = (props: PostComposerProps) => {
  const [postText, setPostText] = React.useState('')
  const invokeCallback = (event: React.MouseEvent) => {
    event.preventDefault()
    const postBody = {
      userId: props.userId,
      isReplyTo: props.isReplyTo || undefined,
      text: postText
    }

    postUserPost(postBody).then(() => {
      props.callback()
    }).catch(err => console.log(err))
  }

  const updatePostText = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPostText(event.target.value)
  }

  return (
    <>
      <TextField variant='outlined' onChange={updatePostText} />
      <Button onClick={invokeCallback} size={'small'}>Post</Button>
    </>
  )
}
