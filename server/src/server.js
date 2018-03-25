import express from 'express';
import cors from 'cors';

import config from './config';
import tasksData from './data/tasksdata';

const app = express();

app.use(cors({ origin: '*' }));

app.get('/api/tasks', (req, res) => {
	res.json(tasksData);
});

app.listen(config.port, (err) => {
	if (err) throw err;

	//console.log(`listening port ${config.port}`);
});