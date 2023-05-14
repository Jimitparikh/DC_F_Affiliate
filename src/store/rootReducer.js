import { combineReducers } from 'redux'
import authReducer from "../slices/auth";
import stateSlice from '../slices/stateSlice';

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        auth: authReducer,
        state: stateSlice,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer