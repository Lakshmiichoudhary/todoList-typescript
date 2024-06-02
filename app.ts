import express from 'express';
import bodyparser from "body-parser"

import todoRoute from './routes/todo'

const app = express()
app.use(bodyparser.json())

app.use(todoRoute)

app.listen(3000)