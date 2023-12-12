import { Request, Response } from "express";
import EntriesModel, { Entry } from "../models/entries";
import logger from "../utils/logger";
// import { datadogLogs } from "@datadog/browser-logs";

export const getDBDiaryEntries = async(req: Request, res: Response) => {
    try {
        const entries: Entry[] = await EntriesModel.find();

        logger.info(`Method: ${req.method} | Endpoint: ${req.path} | Status: 200 | Response: ${entries}`)
        // datadogLogs.logger.info('', {method: req.method, endpoint: req.path, status: 200, response: entries})
        res.status(200).send(entries);

    } catch (error: any) {
        
        logger.error(`Method: ${req.method} | Endpoint: ${req.path} | Status: ${res.status} | Response: ${JSON.stringify(error)}`)
        // datadogLogs.logger.error('', {method: req.method, endpoint: req.path, response: error})
        res.status(500).send(error);
    }
}

export const addDBDiaryEntry = async(req: Request, res: Response) => {
    
    try {
        
        const { date, weather, visibility, comments } = req.body;
        const newEntry = new EntriesModel({
            date,
            weather,
            visibility,
            comments
        });
    
        await newEntry.save();

        logger.info(`Method: ${req.method} | Endpoint: ${req.path} | Status: 200 | Response: ${newEntry}`)
        // datadogLogs.logger.info('', {method: req.method, endpoint: req.path, status: 200, response: newEntry})
        res.status(201).send(newEntry);

    } catch (error: any) {
        
        logger.error(`Method: ${req.method} | Endpoint: ${req.path} | Status: ${res.status} | Response: ${JSON.stringify(error)}`)
        // datadogLogs.logger.error('', {method: req.method, endpoint: req.path, status: res.status, response: error})
        res.status(500).send(error);
    }
}