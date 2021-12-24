import express from 'express';
import { exit, env } from 'process';

const app = express();

app.get('/', (_req, res) => res.send('Hello Server'));

const start = async () => {
	try {
		app.listen(env.PORT || 7543, () => console.log('Server listening'));
	} catch (error) {
		console.log(error);
		exit(1);
	}
};

start();
