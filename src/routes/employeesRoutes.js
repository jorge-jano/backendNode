import {Router} from 'express'
import {getEmployee,getOneEmployee,postEmployee,putEmployee,deleteEmployee} from '../controllers/employeesControllers.js'
const router=Router()

router.get('/Employee',getEmployee)

router.get('/EmployeeOne/:id',getOneEmployee)

router.post('/postEmployee',postEmployee)

router.patch('/putEmployee/:id',putEmployee)

router.delete('/deleteEmployee/:id',deleteEmployee)


export default router