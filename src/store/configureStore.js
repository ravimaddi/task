import {createStore,combineReducers} from 'redux'
import tableDataReducer from '../reducers/tableDataReducer'

const configureStore=()=>{

    const store= createStore(combineReducers({
        tableData:tableDataReducer
    }))
    return store
}

export default configureStore