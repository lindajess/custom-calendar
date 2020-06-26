import React, { useState } from 'react';
import styled from 'styled-components'
import { AccessAlarm } from '@material-ui/icons';
import { firstDayOfMonth, daysInMonth } from '../utils/getDays'


const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns:  repeat(7, 1fr);
`

/* const SelectedCell = styled.div`
  background-color: red;
`
 */

const Cell = ({ position, notes }) => {
  const date = new Date()
  const currentDay = date.getDate()
  /* const comp = position === currentDay ?
    <SelectedCell > {position} </SelectedCell> :
    <div key={position}> {position} </div> */

  return <div>
    <AccessAlarm />
  </div>
}


const EmphySpaces = ({ spaces }) => {
  let spacesObj = []
  for (let i = 0; i < spaces; i++) {
    spacesObj.push(<div key={i}>emphy</div>)
  }

  return spacesObj
}

const Spaces = ({ spaces, currentDay }) => {
  let spacesObj = []
  for (let i = 1; i <= spaces; i++) {


    spacesObj.push(<Cell position={i} />)
  }

  return spacesObj
}


const App = () => {
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
          <Spaces spaces={days} currentDay={day} />
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

export default App;
