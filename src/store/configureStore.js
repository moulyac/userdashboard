import { combineReducers, createStore} from 'redux'
import userReducer from '../reducer/userReducer'


const configureStore = ()=>{
    const store = createStore (combineReducers({
        users : userReducer
    }))

    return store
}

export default configureStore