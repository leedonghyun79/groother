import express, { Express } from 'express';
import Server from './app/server.js';
const app: Express = express();

app.set('port', '5001');
const port = process.env.PORT || app.get('port');

const server = new Server(port);
server.start(); //서버 실행 