import mongoose, { Schema, Document } from "mongoose";
import { dbDiaryEntry } from "../types";

export type Entry = dbDiaryEntry & Document;

const entriesSchema = new Schema({
    date: String,
    weather: String,
    visibility: String,
    comments: String
});

const EntriesModel = mongoose.model<Entry>('entries', entriesSchema);
export default EntriesModel;