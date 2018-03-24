import React from 'react';

import Task from './Task';

const TaskList = (props) => {
	const tasks = props.tasks.map(task => (
		<Task key={ task.id } name={ task.name } description={ task.description } />
	));
	return (
		<ul>
			{ tasks }
		</ul>	
	);
};

export default TaskList;