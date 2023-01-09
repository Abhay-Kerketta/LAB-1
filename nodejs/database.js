import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getData(){
    const [rows] = await pool.query("SELECT * FROM quiz")
    return rows
}

export async function getData1(quiz_id){
    const [rows] = await pool.query(`
    SELECT * 
    FROM quiz
    where quiz_id = ?
     `,[quiz_id])
    return rows
}

export async function createData(quiz_name,quiz_type,ques_type,time_limit,quiz_desc){
    const result = await pool.query(`
    INSERT INTO quiz (quiz_name,quiz_type,ques_type,time_limit,quiz_desc)
    VALUES (?,?,?,?,?)
    `)
    const id = result.insertId
    return getData1(quiz_id)
}

export async function deleteData(quiz_id){
    const result = await pool.query(`
    DELETE 
    FROM quiz
    where quiz_id = ?
    `,[quiz_id])
}

export async function updateData(quiz_id,quiz_name){
    const result = await pool.query(`
    UPDATE quiz
    SET quiz_name = ? WHERE quiz_id = ?
    `,[quiz_name,quiz_id])
    const id = result.insertId
    return getData1(id)
}
 
    //-> ('science','rapid fire','mcq',10,'answer in 10 sec'),
    //-> ('computer science','rapid fire','mcq',10,'answer in 10 sec');

//const data = await getData1(1)
//console.log(data)