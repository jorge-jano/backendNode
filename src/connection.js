import {createPool} from 'mysql2/promise'
import {DB_HOST,DB_USER,DB_DATABASE} from './config.js'
export const pool=createPool({
    host:DB_HOST, // si es una ip servidor externo
    user:DB_USER,
    password:'',
    database:DB_DATABASE
})
