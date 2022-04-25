import "./App.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"

function App() {
  const [name, setName] = useState("")
  const { account, users } = useSelector((state) => state)

  const dispatch = useDispatch()

  const { deposit, withdraw, addName } = bindActionCreators(
    actionCreators,
    dispatch
  )

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAddName = () => {
    addName(name)
    setName("")
  }

  const userNames = users.map((user) => <p>{user}</p>)

  return (
    <div className="App">
      <h2>Account</h2>
      <p>{account}</p>
      <button onClick={() => deposit(100)}>Deposit</button>
      <button onClick={() => withdraw(100)}>Withdraw</button>

      <h2>Add User</h2>
      <input type="text" value={name} onChange={handleName} />
      <button onClick={handleAddName}>Add Name</button>

      <h2>User names</h2>
      {userNames}
    </div>
  )
}

export default App
