export interface DiaryEntry {
    _id: string;
    date: string;
    weather: string;
    visibility: string;
    comments: string;
}

export type newDiaryEntry = Omit<DiaryEntry, '_id'>;