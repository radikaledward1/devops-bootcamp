import {createLogger, transports, format} from 'winston';

// Configuración de los formatos de log
const logFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});
  
// Configuración del logger
const logger = createLogger({
    format: format.combine(
        format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat,
        format.json()
    ),
    transports: [
        new transports.Console(),
    ],
});

export default logger;