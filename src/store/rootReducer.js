import { combineReducers } from 'redux'
import { remindersReducer } from './reminders'

export default combineReducers({
    reminders: remindersReducer
})