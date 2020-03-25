import * as React from 'react'
import { darkTheme } from '../assets/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Posts } from './Posts'
import { PostComposer } from './PostComposer'
import { DashboardProps, Post } from './types'

const postPost = async (post: Post) => {
  fetch('/api/createPost', { method: 'POST', body: JSON.stringify(post) }).then(res => {
    if (!res.ok) {
      console.error(`Failed to post: ${res.statusText}`)
    }
  }).catch(error => {
    console.error(`Failed to post: ${error}`)
  })
}

export const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const [posts, setPosts] = React.useState(new Array<Post>())
  React.useEffect(() => {
    fetch(`/api/user/${props.userId}/posts`).then(res => {
      if (res.ok) {
        res.json().then(body => {
          setPosts(body)
        })
      }
    }).catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <h1>Dashboard for User #{ props.userId }</h1>
        <PostComposer callback={postPost} userId={props.userId} isReplyTo={null}/>
        <Posts posts={posts} />
      </div>
    </MuiThemeProvider>
  )
}
