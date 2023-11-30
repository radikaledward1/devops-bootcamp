import express from 'express'
import router from './routes'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
    res.status(200).send('This a REST API with Typescript')
})

app.use('/api/diaries', router)

const port = 3000

app.listen(port, () => {
    console.log('Server running on port ' + port)
})