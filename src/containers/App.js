import React, { useState } from 'react';
import { connect } from 'react-redux'
import { RemindersActions, RemindersSelectors } from '../store/reminders/reminders_reducer'
import styled from 'styled-components'
import { ControlPoint, } from '@material-ui/icons';
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import { firstDayOfMonth, daysInMonth } from '../utils/getDays'


const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns:  repeat(7, 1fr);
`

const Reminder = ({ reminder, deleteReminder, editReminder }) => {
  const { id, name, description, time, city } = reminder
  return <div>
    {name}
    {description}
    {time}
    {city}


    <ClearIcon onClick={() => deleteReminder(id)} />
    <CreateIcon onClick={() => editReminder({ id: id })} />

  </div>
}


const Cell = ({ position, reminders, addReminder, ...rest }) => {
  return <div>
    {position}
    {reminders.map((item) => {
      return <Reminder reminder={item} {...rest} />
    })}

    <ControlPoint fontSize="small" onClick={() => addReminder({})} />

  </div>
}


const EmphySpaces = ({ spaces }) => {
  let spacesObj = []
  for (let i = 0; i < spaces; i++) {
    spacesObj.push(<div key={i}>emphy</div>)
  }

  return spacesObj
}

const Spaces = ({ month, year, spaces, reminders, currentDay, ...rest }) => {
  let spacesObj = []
  for (let i = 1; i <= spaces; i++) {
    const remindersList = reminders.filter(item => item.year === year && item.month === month && item.day === i)
    spacesObj.push(<Cell reminders={remindersList} position={i} {...rest} />)
  }

  return spacesObj
}


const App = props => {

  const date = new Date()
  const cyear = date.getFullYear()
  const cmonth = date.getMonth()
  const cday = date.getDate()


  const [year, setYear] = useState(cyear)
  const [month, setMonth] = useState(cmonth + 1)
  const [day, setDay] = useState(cday)

  const firstDay = firstDayOfMonth(month, year)
  const days = daysInMonth(month, year)

  return (
    <div>
      <div>
        <CalendarContainer>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tu</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <EmphySpaces spaces={firstDay} />
          <Spaces
            {...props}
            spaces={days}
            year={year}
            month={month}
            currentDay={day}
          />
        </CalendarContainer>

        <select onChange={e => { setYear(e.target.value) }}>
          <option value={2019}>2019</option>
          <option value={2020} selected>2020</option>
        </select>

        <select onChange={e => { setMonth(e.target.value) }}>
          <option value={5}>May</option>
          <option value={6} selected>Jun</option>
        </select>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getRemindersList: () => dispatch(RemindersActions.getRemindersList()),
  addReminder: (reminder) => dispatch(RemindersActions.addReminder(reminder)),
  deleteReminder: (id) => dispatch(RemindersActions.deleteReminder(id)),
  editReminder: (reminder) => dispatch(RemindersActions.editReminder(reminder)),
})

const mapStateToProps = state => ({
  reminders: RemindersSelectors.remindersList(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
