import express, { Request, Response } from 'express'
import routes from './routes/router'

import cors from 'cors'
import path from 'path'


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use('/api', routes)

app.listen(3344, () => {
    console.log('Server running on port', 3344);
})