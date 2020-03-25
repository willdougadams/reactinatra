import { Post } from '../dashboard/types'

export const getUserPosts = async (userId: string) => {
  const res = await fetch(`/api/user/${userId}/posts`)

  if (res.ok) {
    return res.json()
  }

  throw new Error(`Failed to GET user ${userId}\'s posts`)
}

export const postUserPost = async (post: Post) => {
  const res = await fetch('/api/createPost', { method: 'POST', body: JSON.stringify(post) })
  if (!res.ok) {
    throw new Error(`Failed to post: ${res.statusText}`)
  }
}
