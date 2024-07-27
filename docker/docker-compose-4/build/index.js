"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./database"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./utils/logger"));
// import { datadogLogs } from '@datadog/browser-logs'
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    // datadogLogs.logger.info('', {method: req.method, endpoint: req.path, status: 200, response: 'This a REST API with Typescript'});
    logger_1.default.info(`Method: ${req.method} | Endpoint: ${req.path} | Status: 200 | Response: ${'This a REST API with Typescript'}`);
    res.status(200).send('This a REST API with Typescript');
});
app.use('/api/diaries', routes_1.default);
const port = 3001;
app.listen(port, () => {
    // console.log('Server running on port ' + port)
    // datadogLogs.logger.info('Server running on port ' + port);
    logger_1.default.info('Server running on port ' + port);
});
(0, database_1.default)();
