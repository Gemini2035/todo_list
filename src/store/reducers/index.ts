import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import settingReducer from './settingReducer';

export default combineReducers({
    todoReducer,
    settingReducer
})