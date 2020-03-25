export interface PostsProps {
  posts: Post[]
}

export interface DashboardProps {
  userId: string
}

export interface Post {
  userId: string
  text: string
  isReplyTo?: string
}

export interface PostComposerProps {
  callback: (post: Post) => void
  userId: string
  isReplyTo: string | null
}
