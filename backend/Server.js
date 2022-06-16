import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routers/userRouter.js'
import { notFound, errorHandler } from './middleware/errorHandlingMiddleware.js'
dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', userRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
})

