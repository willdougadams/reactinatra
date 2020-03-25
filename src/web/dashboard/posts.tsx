import * as React from 'react'
import { Post, PostsProps } from './types'

export const Posts: React.FC<PostsProps> = (props: PostsProps) => {
  return (
    <>
      <h1>
        Your Posts
      </h1>
      <ul style={{ listStyleType: 'none' }}>
        {
          props.posts.length > 0
            ? props.posts.map((post: Post, index: number) => {
              return (
                <li key={index} style={{ border: '1px solid black', margin: '0.5rem' }}>
                  { post.text }
                </li>
              )
            })
            : 'You haven\'t posted anything yet, click "new post" above'
        }
      </ul>
    </>
  )
}
