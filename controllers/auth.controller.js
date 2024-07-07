
import {Router} from 'express'
import { signup  ,signin} from '../services/auth.service.js'



const authRouter = Router()



authRouter.post( '/signup' ,signup )
authRouter.post( '/signin', signin )

export default authRouter