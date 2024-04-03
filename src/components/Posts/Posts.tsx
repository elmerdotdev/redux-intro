import { useSelector, useDispatch } from "react-redux"
import { fetchPosts } from "./PostsSlice"

type PostsState = {
  posts: {
    listOfPosts: {title: string, body: string}[],
    isLoading: boolean
  }
}

const Posts = () => {
  const { listOfPosts, isLoading } = useSelector((state: PostsState) => state.posts)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Posts</h2>
      {/* <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button> */}
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>Not loading....</div>
          // <ul>
          //   {listOfPosts.map((post, index) => (
          //     <li key={index}>{post.title} - {post.body}</li>
          //   ))}
          // </ul>
        )}

        {listOfPosts.length > 0 ? 'Theres a post' : 'Theres no post'}
      </div>
    </div>
  )
}

export default Posts