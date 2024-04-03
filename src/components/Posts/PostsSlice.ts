import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

type Post = {
  title: string,
  body: string
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get<Post[]>(url)
  return response.data
})

const initialState = {
  listsOfPosts: [] as Post[],
  isLoading: false
}

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => { // if a promise is successful
        console.log('data received!')
        state.listsOfPosts = action.payload
        state.isLoading = false
      })
      .addCase(fetchPosts.pending, (state) => { // if a promise is pending
        console.log('fetching data......')
        state.isLoading = true
      })
      .addCase(fetchPosts.rejected, (error) => { // if a promise is rejected
        console.log('Error: ', error)
      })
  }
})

export default PostsSlice.reducer