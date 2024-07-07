
import {Router} from 'express'
import { addCompany } from '../services/company.service.js'
import { hr } from '../middleware/hr.js'


const companyRouter = Router()

companyRouter.post('/',hr,addCompany)

export default companyRouter