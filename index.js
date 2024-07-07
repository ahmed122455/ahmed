import express from 'express'
import userRouter from './controllers/user.controller.js'
import authRouter from './controllers/auth.controller.js'
import companyRouter from './controllers/company.controler.js'
import { IsAuth } from './middleware/auth.middleware.js'
import { dbConn } from './services/db.connection.js'

const app = express()
const port = 3000

app.use(express.json())
app.use('/auth', userRouter)
app.use('/user',IsAuth,userRouter)
app.use('/company', IsAuth , companyRouter)


dbconnection()

app.get('/', (req , res)=> res.send('Hello World!'))
app.listen(port,()=>console.log('example app listen on port ${port}!'))