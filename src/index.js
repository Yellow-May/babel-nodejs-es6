import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import { exit } from 'process';

const app = express();

app.get('/', (_req, res) => res.send('Hello Server'));

const start = async () => {
	try {
		app.listen(7543, () => console.log('Server listening'));
	} catch (error) {
		console.log(error);
		exit(1);
	}
};

start();
