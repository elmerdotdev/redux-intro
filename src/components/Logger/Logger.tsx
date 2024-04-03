import { useSelector, useDispatch } from "react-redux"
import { signIn, signOut } from "./LoggedSlice"

type LoggedState = {
  logged: {
    value: boolean
  }
}

const Logger = () => {
  const isLoggedIn = useSelector((state: LoggedState) => state.logged.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Logged In: {isLoggedIn ? 'Yes' : 'No'}</h1>
      <button onClick={() => dispatch(signIn())}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
    </div>
  )
}

export default Logger