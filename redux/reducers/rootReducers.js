import { combineReducers } from "redux"
import gitModule from "./repoManage/index"

const rootReducer = combineReducers({
  git: gitModule
})

export default rootReducer;