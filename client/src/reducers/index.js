import {combineReducers} from 'redux'
import repos from './repoReducer'
import login from './loginReducer'

// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().
const rootReducer = combineReducers({repos, login})

export default rootReducer
