import express from 'express'
//import * as DiaryService from '../services'
import * as DiaryService from '../services/diaryService'
//import { newDiaryEntry } from '../types'

const router = express.Router()

// router.get('/', (_req, res) => {
//     res.status(200).send(DiaryService.getDiaryData())
// })

// router.get('/:id', (_req, res) => {
//     res.status(200).send(DiaryService.findDiaryDataById(Number(req.params.id)))
// })

// router.post('/save', (_req, res) => {
//     const { date, weather, visibility, comments } = req.body

//     const diaryEntry: newDiaryEntry = {
//         date,
//         weather,
//         visibility,
//         comments
//     }

//     const newEntry = DiaryService.addDiaryEntry(diaryEntry)

//     res.status(200).send(newEntry)
// })

router.get('/', DiaryService.getDBDiaryEntries)

router.post('/', DiaryService.addDBDiaryEntry)

export default router