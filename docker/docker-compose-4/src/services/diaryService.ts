import { Request, Response } from "express";
import EntriesModel, { Entry } from "../models/entries";

export const getDBDiaryEntries = async(_req: Request, res: Response) => {
    const entries: Entry[] = await EntriesModel.find();
    res.status(200).send(entries);
}

export const addDBDiaryEntry = async(req: Request, res: Response) => {
    const { date, weather, visibility, comments } = req.body;

    const newEntry = new EntriesModel({
        date,
        weather,
        visibility,
        comments
    });

    await newEntry.save();
    res.status(201).send(newEntry);
}