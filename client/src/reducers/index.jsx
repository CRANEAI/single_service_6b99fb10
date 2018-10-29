import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import sign_in from "./reducer_sign_in"
import login from "./reducer_login"

const rootReducer = combineReducers({
  sign_in: sign_in,
  login: login
})

export default rootReducer
