import axios from "axios";
import { DiaryEntry, newDiaryEntry } from "./types";

const baseUrl = "http://localhost:3001/api/diaries";

export const getDiaryEntries = async () => {
    try {
        const { data } = await axios.get<DiaryEntry[]>(baseUrl);
        return data;
    } catch (error) {
        console.log('An Error has occurred: ' + error);
    }
};

export const addDiaryEntry = async (entry: newDiaryEntry) => {
    try {
        const { data } = await axios.post<DiaryEntry>(baseUrl, entry);
        return data;
    } catch (error) {
        console.log('An Error has occurred: ' + error);
    }
}