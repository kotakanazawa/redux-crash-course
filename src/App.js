import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

function App() {
  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <p>{account}</p>
      <button onClick={() => deposit(100)}>Deposit</button>
      <button onClick={() => withdraw(100)}>Withdraw</button>
    </div>
  );
}

export default App;
