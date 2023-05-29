import {pool} from '../connection.js' 


export const getEmployee= async(req,res)=>{
    try {
        const [rows]=await pool.query('SELECT * FROM employe')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })
    }
}

export const getOneEmployee= async(req,res)=>{
        const id=req.params.id

    try {

        const [rows]= await pool.query('SELECT * FROM employe WHERE id_employe= ?',[id])
        if (rows.length<=0) return res.status(404).json({
            message:'Employee not found'
        })
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })
    }
}

export const postEmployee= async(req,res)=>{
        const {name,salary}=req.body
    try {
        const [rows]= await pool.query('INSERT INTO employe (name,salary) VALUES (?,?)',[name,salary])
        res.send('registrado correctamente')
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })        
    }
}


export const deleteEmployee= async (req,res)=>{

         const id=req.params.id
    try {
        const [result]= await pool.query('DELETE FROM employe where id_employe= ?',[id])
        if (result.affectedRows<=0) return res.status(404).json({
            message:'Employe no exists'
        })
        res.sendStatus(200).json({
            message:'Employe delete'
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })        
    }
}

export const putEmployee= async(req,res)=>{
        const {id}=req.params
        const {name,salary}=req.body
    try {
        
        const [result]=await pool.query('UPDATE employe SET name= IFNULL(?,name), salary= IFNULL(?,salary) WHERE id_employe= ?',[name,salary,id])
        if (result.affectedRows===0) return res.status(404).json({
            message:'Employe not update, no exists'
        })
        const [rows]=await pool.query('SELECT * FROM employe WHERE id_employe= ?',[id])
        console.log(result)
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })        
    }
}






