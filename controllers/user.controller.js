
import {Router} from 'express'
import { allUser, deleteuser, findOne, updateuser } from '../services/user.service.js'
const userRouter = Router()

userRouter.get(allUser)

    userRouter.route('/:id').get(findOne).patch(updateuser).delete(deleteuser)

export default  userRouter