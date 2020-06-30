import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const Form = ({ onSubmit, editItem = {} }) => {
	const classes = useStyles();
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [city, setCity] = useState('');
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				required
				id="date"
				label="Date"
				type="date"
				size="small"
				value={editItem.date}
				onChange={(e) => {
					setDate(e.target.value);
				}}
			/>
			<TextField
				required
				id="time"
				label="Time"
				type="time"
				size="small"
				value={editItem.time}
				onChange={(e) => {
					setTime(e.target.value);
				}}
			/>
			<TextField
				id="city"
				label="City"
				size="small"
				value={editItem.city}
				onChange={(e) => {
					setCity(e.target.value);
				}}
			/>
			<TextField
				required
				id="name"
				label="Name"
				size="small"
				value={editItem.name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<TextField
				id="description"
				label="Description"
				value={editItem.description}
				variant="outlined"
				size="small"
				onChange={(e) => {
					setDesc(e.target.value);
				}}
			/>
			<Button onClick={() => onSubmit({ date, name, time, city, description: desc })} />
		</form>
	);
};

export default Form;
