/* eslint-disable no-unused-vars */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
  const posts = reactive([])

  const addPost = (title) => {
    posts.unshift({ id: Date.now(), title, comments: [] })
  }

  const addComment = (postId, text) => {
    const postToChange = posts.find(post => post.id === postId)
    postToChange.comments.unshift({ id: Date.now(), text })
  }

  const changePost = (id, newTitle) => {
    const postToChange = posts.find(post => post.id === id)
    postToChange.title = newTitle
  }

  const removePost = (id) => {
    posts.splice(posts.findIndex(post => post.id === id), 1)
  }

  const removeComment = (postId, commentId) => {
    const postToChange = posts.find(post => post.id === postId)
    postToChange.comments.splice(postToChange.comments.findIndex(comment => comment.id === commentId), 1)
  }

  return {
    posts,
    addPost,
    changePost,
    removePost,
    addComment,
    removeComment,
  }
})
