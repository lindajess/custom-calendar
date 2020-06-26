import { combineReducers } from 'redux'
import { datesReducer } from 'dates'

export default combineReducers({
    dates: datesReducer
})