import express from 'express'

import {getData,getData1,createData, deleteData} from './database.js'

const app = express()

app.use(express.json())

app.get("/quiz",async (req,res) =>{
    const data = await getData()
        res.send(data)
})

app.get("/quiz/:id",async (req, res) => {
    const id = req.params.id
    const data = await getData1(id)
    res.send(data)
})

app.post("/quiz",async(req,res)=>{
    const {quiz_name,quiz_type,ques_type,time_limit,quiz_desc} = req.body
    const data = await createData(quiz_name,quiz_type,ques_type,time_limit,quiz_desc)
    res.status(201).send(data)
})

app.delete("/quiz/:id",async(req, res) => {
    const id = req.params.id
    const data = await deleteData(id)
    res.send(data)
})

app.patch("/quiz",async(req, res) =>{
    const {quiz_id,quiz_name} = req.params.id
    const data = await updateData(quiz_id,quiz_name)
    res.send(data)
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(5000,() => {
    console.log('Server is running on port 5000')
})