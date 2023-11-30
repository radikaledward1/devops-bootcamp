export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'very good' | 'good' | 'bad' | 'very bad'

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comments: string;
}

// export type NonSensitiveDiaryData = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveDiaryData = Omit<DiaryEntry, 'comments'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>