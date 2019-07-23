import express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { MONGODB_URI, SESSION_SECRET } from './util/secrets';
import apiRouter from './api-routes';

const app = express();

mongoose.connect(MONGODB_URI as string, {useNewUrlParser: true}).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    },
).catch(err => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    // process.exit();
});

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set default API response
app.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'Available at api/v1',
    });
});
app.use('/api/v1', apiRouter);

export default app;
