import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../components/Counter/CounterSlice'
import loggedReducer from '../components/Logger/LoggedSlice'
import postsReducer from '../components/Posts/PostsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
    posts: postsReducer
  }
})

export type AppDispatch = typeof store.dispatch