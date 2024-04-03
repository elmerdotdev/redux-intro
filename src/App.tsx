import Counter from "./components/Counter/Counter"
import Logger from "./components/Logger/Logger"
import Posts from "./components/Posts/Posts"

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <Logger />
      <hr />
      <Posts />
    </div>
  )
}

export default App