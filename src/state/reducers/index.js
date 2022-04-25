import { combineReducers } from "redux"
import accountReducer from "./accountReducer"
import userReducer from "./userReducer"

const reducers = combineReducers({
  account: accountReducer,
  users: userReducer
})

export default reducers
