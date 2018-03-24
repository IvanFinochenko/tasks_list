import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import config from '../config';

class TasksManager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: []
		};
	};

	componentDidMount() {
		axios.get(config.server + '/api/tasks')
			.then(res => this.setState({ tasks: res.data }));
	};

	render() {
		return (
			<TaskList tasks={ this.state.tasks } />
		);
	};
};

export default TasksManager;