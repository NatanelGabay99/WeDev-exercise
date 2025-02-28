import express, { NextFunction, Request, Response } from 'express';
import './utils/environment-variables';
import { createServer } from 'node:http';
import cors from 'cors';
import { AppConfig } from './config/app.config';
import indexRoute from './routes/index.route';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors());

app.use(indexRoute);

server.listen(AppConfig.port, () => {
	console.log(`server is up on: http://localhost:${AppConfig.port}`);
});
