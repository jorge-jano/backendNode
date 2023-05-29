import express from 'express'
import employeesRoutes from './routes/employeesRoutes.js'
import indexRoutes from './routes/indexRoutes.js'
const app=express()


// use // ROUTES INITIALS
app.use(express.json())
app.use(indexRoutes)
app.use('/api',employeesRoutes)

// middleware

app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found'
    })
})


export default app