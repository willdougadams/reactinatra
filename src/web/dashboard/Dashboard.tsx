import * as React from 'react'
import { darkTheme } from '../assets/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Posts } from './Posts'
import { PostComposer } from './PostComposer'
import { DashboardProps, Post } from './types'
import { getUserPosts } from '../api'

export const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  // posts contains the user's posts
  const [posts, setPosts] = React.useState(new Array<Post>())
  // postsCount increments when a new post is posted
  // using it as an effect dep forces Dashboard to re-request the user's posts
  const [postCount, setPostCount] = React.useState(0)

  React.useEffect(() => {
    getUserPosts(props.userId).then((posts: Post[]) => {
      setPosts(posts)
    }).catch((error: Error) => {
      console.error(error)
    })
  }, [postCount])

  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <h1>Dashboard for User #{ props.userId }</h1>
        <PostComposer callback={() => setPostCount(postCount + 1)} userId={props.userId} isReplyTo={null}/>
        <Posts posts={posts} />
      </div>
    </MuiThemeProvider>
  )
}
