import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import sign_in from "./reducer_sign_in"
import signup from "./reducer_signup"
import login from "./reducer_login"
import sign_up from "./reducer_sign_up"
import sign_up from "./reducer_sign_up"

const rootReducer = combineReducers({
  sign_in: sign_in,
  signup: signup,
  login: login,
  sign_up: sign_up,
  sign_up: sign_up
})

export default rootReducer
