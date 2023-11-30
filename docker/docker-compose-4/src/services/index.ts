import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveDiaryData, newDiaryEntry } from '../types'

export const getDiaryData = (): Array<DiaryEntry> => {
    const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
    return diaries
}

export const getNonSensitiveDiaryData = () => {
    const diaries: Array<NonSensitiveDiaryData> = diaryData as Array<NonSensitiveDiaryData>
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility }
    })
}

export const findDiaryDataById = (id: number): DiaryEntry | undefined => {
    const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
    const data = diaries.find(entry => entry.id === id)
    return data
}

export const addDiaryEntry = (entry: newDiaryEntry): DiaryEntry => {
    const newDiaryEntry = {
        id: Math.max(...diaryData.map(entry => entry.id)) + 1,
        ...entry
    }

    diaryData.push(newDiaryEntry)
    return newDiaryEntry
}