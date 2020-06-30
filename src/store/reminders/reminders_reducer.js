import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    getRemindersList: [null],
    addReminder: ['reminder'],
    deleteReminder: ['id'],
    editReminder: ['reminder'],
    resetReminders: [null]
}, { prefix: '@@BE-PEOPLE/' })

export const RemindersActions = Creators;
export const RemindersTypes = Types;

/* ------------- Initial state ------------- */
export const INITIAL_STATE = Immutable({
    remindersList: [
        {
            year: 2020,
            month: 6,
            day: 26,
            id: 1,
            time: '1030',
            name: 'test',
            description: 'this is a tests',
            city: 'Medellin'
        },
        {
            year: 2020,
            month: 6,
            day: 27,
            id: 2,
            time: '1030',
            name: 'test',
            description: 'this is a tests',
            city: 'Medellin'
        }
    ]

})

/* ------------- Selectors ------------------- */
export const RemindersSelectors = {
    remindersList: state => state.reminders.remindersList
};


/* ------------- REDUCERS ------------------- */
const getRemindersList = (state) => {
    return state.remindersList
}

const addReminder = (state, { reminder }) => {
    console.log(reminder)
    const date = new Date(reminder.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return { ...state, remindersList: [...state.remindersList, { ...reminder, year, month, day }] }
}

const deleteReminder = (state, { id }) => {
    console.log(state)
    return { ...state, remindersList: state.remindersList.filter((item) => item.id !== id) }
}

const editReminder = (state, { reminder }) => {
    return {
        ...state, remindersList: state.remindersList.map(item => {
            if (item.id === reminder.id) return { ...item, ...reminder }
            return item
        })
    }
}

const resetReminders = () => INITIAL_STATE

export const remindersReducer = createReducer(INITIAL_STATE, {
    [Types.GET_REMINDERS_LIST]: getRemindersList,
    [Types.ADD_REMINDER]: addReminder,
    [Types.DELETE_REMINDER]: deleteReminder,
    [Types.EDIT_REMINDER]: editReminder,
    [Types.RESET_REMINDERS]: resetReminders
})