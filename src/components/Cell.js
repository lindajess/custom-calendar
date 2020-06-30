import React from 'react';
import { ControlPoint } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import { DelIcon, EditIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
	cell: {
		borderRadius: 3,
		display: 'grid',
		gridTemplateRows: '1fr 2fr',
	},
	cellHeader: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
	},
}));

const Reminder = ({ reminder, deleteReminder, editReminder }) => {
	const { id, name, description, time, city } = reminder;
	return (
		<div>
			<Typography variant="caption" color="textSecondary" style={{ fontSize: 8 }} align="left">
				{`${name}`}
			</Typography>
			<DelIcon onClick={() => deleteReminder(id)} style={{ fontSize: 10 }} color="error" />
			<EditIcon onClick={() => editReminder(reminder)} style={{ fontSize: 10 }} color="primary" />
		</div>
	);
};

const Cell = ({ position, reminders, addReminder, ...rest }) => {
	const classes = useStyles();
	return (
		<div className={classes.cell}>
			<div className={classes.cellHeader}>
				{position}
				<ControlPoint fontSize="small" onClick={() => addReminder({})} style={{ fontSize: 10 }} />
				<Divider />
			</div>

			<div>
				{reminders.map((item) => {
					return <Reminder reminder={item} {...rest} />;
				})}
			</div>
		</div>
	);
};

export default Cell;
