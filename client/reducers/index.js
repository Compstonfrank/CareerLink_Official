import { combineReducers } from 'redux';
//imported the reducers
import StudentReducer from './student';
import EmployerReducer from './employer';
//combining them into one "root reducer"
const rootReducer = combineReducers({ StudentReducer, EmployerReducer });

export default rootReducer;
