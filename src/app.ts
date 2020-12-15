// dependencies
import express from 'express';
import { apiconfigs } from './config';
const cors = require('cors');
const morgan = require('morgan');

// Services
import * as misc from './services/misc';
import videoRouter from './services/videoApi/Video.routes';

// Configs
const app = express();
app.set('port', apiconfigs.port);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.use(misc.syntaxError);
app.use(videoRouter);
app.use(misc.notFound); // en el final siempre

export {app};