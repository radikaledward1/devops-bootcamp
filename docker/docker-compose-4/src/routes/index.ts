import express from 'express'
import * as DiaryService from '../services'
import { newDiaryEntry } from '../types'

const router = express.Router()

router.get('/', (_req, res) => {
    res.status(200).send(DiaryService.getDiaryData())
})

router.get('/:id', (req, res) => {
    res.status(200).send(DiaryService.findDiaryDataById(Number(req.params.id)))
})

router.post('/save', (req, res) => {
    const { date, weather, visibility, comments } = req.body

    const diaryEntry: newDiaryEntry = {
        date,
        weather,
        visibility,
        comments
    }

    const newEntry = DiaryService.addDiaryEntry(diaryEntry)

    res.status(200).send(newEntry)
})

export default router