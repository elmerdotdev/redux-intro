import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from "./PostsSlice"
import type { AppDispatch } from "../../app/store"

type PostsState = {
  posts: {
    listOfPosts: {title: string, body: string}[],
    isLoading: boolean
  }
}

const Posts = () => {
  const { listOfPosts, isLoading } = useSelector((state: PostsState) => state.posts)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {listOfPosts?.map((post, index) => (
              <li key={index}>1{post.title} - {post.body}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Posts