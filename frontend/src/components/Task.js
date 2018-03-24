import React from 'react';

const Task = ({ name, description }) => {
	return (
		<div>
			<h3>{ name }</h3>
			<p>{ description }</p>
		</div>
	);
};

export default Task;