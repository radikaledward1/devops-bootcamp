import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import router from './routes'
import connectDB from './database'
import cors from 'cors'
import logger from './utils/logger'
// import { datadogLogs } from '@datadog/browser-logs'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    // datadogLogs.logger.info('', {method: req.method, endpoint: req.path, status: 200, response: 'This a REST API with Typescript'});
    logger.info(`Method: ${req.method} | Endpoint: ${req.path} | Status: 200 | Response: ${'This a REST API with Typescript'}`);
    res.status(200).send('This a REST API with Typescript');
})

app.use('/api/diaries', router)

const port = 3001

app.listen(port, () => {
    // console.log('Server running on port ' + port)
    // datadogLogs.logger.info('Server running on port ' + port);
    logger.info('Server running on port ' + port)
})

connectDB();