import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RemindersActions, RemindersSelectors } from '../store/reminders/reminders_reducer';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { firstDayOfMonth, daysInMonth, getMonthName, getDayName } from '../utils';
import Form from '../components/Form';
import Cell from '../components/Cell';
import Controls from '../components/Controls';

const useStyles = makeStyles((theme) => ({
	viewContainer: {
		display: 'grid',
		gridTemplateColumns: '2fr 1fr',
	},
	calendarContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(7, 1fr)',
		gridGap: '0.1em',
		fontSize: 'xx-small',
		justifySelf: 'center',
		alignSelf: 'center',
		padding: '1em',
	},
}));

const EmphySpaces = ({ spaces }) => {
	let spacesObj = [];
	for (let i = 0; i < spaces; i++) {
		spacesObj.push(<div key={i}></div>);
	}

	return spacesObj;
};

const Spaces = ({ month, year, spaces, reminders, currentDay, ...rest }) => {
	let spacesObj = [];
	for (let i = 1; i <= spaces; i++) {
		const remindersList = reminders.filter((item) => item.year === year && item.month === month && item.day === i);
		spacesObj.push(<Cell reminders={remindersList} position={i} {...rest} />);
	}

	return spacesObj;
};

const App = (props) => {
	const date = new Date();
	const cyear = date.getFullYear();
	const cmonth = date.getMonth();
	const weekDay = date.getDay();
	const cday = date.getDate();

	const [year, setYear] = useState(cyear);
	const [month, setMonth] = useState(cmonth + 1);
	const [editReminder, setEditReminder] = useState(null);

	const firstDay = firstDayOfMonth(month, year);
	const days = daysInMonth(month, year);

	const classes = useStyles();

	return (
		<Container className={classes.viewContainer}>
			<Container>
				<Typography variant="overline" color="textSecondary" align="left" style={{ fontSize: '0.5em' }}>
					{getDayName(weekDay)}{' '}
				</Typography>
				<Typography color="primary" align="left">
					{' '}
					{`${getMonthName(month)} ${cday} ${year}`}{' '}
				</Typography>
				<div className={classes.calendarContainer}>
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
						editReminder={setEditReminder}
						spaces={days}
						year={year}
						month={month}
						currentDay={cday}
					/>
				</div>

				<Controls setMonth={setMonth} setYear={setYear} month={month} year={year} />
			</Container>

			<div>
				<Form onSubmit={editReminder ? props.editReminder : props.addReminder} editItem={editReminder || {}} />
			</div>
		</Container>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getRemindersList: () => dispatch(RemindersActions.getRemindersList()),
	addReminder: (reminder) => dispatch(RemindersActions.addReminder(reminder)),
	deleteReminder: (id) => dispatch(RemindersActions.deleteReminder(id)),
	editReminder: (reminder) => dispatch(RemindersActions.editReminder(reminder)),
});

const mapStateToProps = (state) => ({
	reminders: RemindersSelectors.remindersList(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
