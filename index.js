const uid = require('uid')
const express = require('express')
const db = require('./db')
const User = require('./models/user')
// const { UUIDV1 } = require('sequelize/types')

const port = 6000

const app = express()

// User.create({
//     firstname: 'Wizzy',
//     lastname: 'Sarzs',
//     email: 'a@b.com',
//     // id: uid(20)
// })
User.findAll().then((doc)=>console.log(doc))


app.listen(() => {
    console.log(`server started on ${port}`)
})