import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export const DelIcon = (props) => {
	return (
		<Tooltip title="Delete">
			<IconButton aria-label="delete">
				<DeleteIcon {...props} />
			</IconButton>
		</Tooltip>
	);
};

export const EditIcon = (props) => {
	return (
		<Tooltip title="Edit" aria-label="edit">
			<IconButton aria-label="delete">
				<CreateIcon {...props} />
			</IconButton>
		</Tooltip>
	);
};
