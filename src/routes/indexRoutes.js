import { Router } from "express"
import {ping} from '../controllers/pingControollers.js'
const router= Router() 



router.get('/ping',ping) 





export default router