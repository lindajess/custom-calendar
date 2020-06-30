import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';

const Controls = ({ year, month, setYear, setMonth }) => {
	return (
		<div>
			<ArrowBack
				style={{ fontSize: 10 }}
				onClick={() => {
					setYear(year - 1);
				}}
			/>
			{year}
			<ArrowForward
				style={{ fontSize: 10 }}
				onClick={() => {
					setYear(year + 1);
				}}
			/>
			<ArrowBack
				style={{ fontSize: 10 }}
				onClick={() => {
					if (month === 1) {
						setMonth(12);
						setYear(year - 1);
					} else {
						setMonth(month - 1);
					}
				}}
			/>
			{month}
			<ArrowForward
				style={{ fontSize: 10 }}
				onClick={() => {
					if (month === 12) {
						setMonth(1);
						setYear(year + 1);
					} else {
						setMonth(month + 1);
					}
				}}
			/>
		</div>
	);
};

export default Controls;
