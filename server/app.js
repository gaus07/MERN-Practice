require('dotenv').config()
require('./db/conn')

const User = require('./model/userSchema')
const mongoose = require('mongoose');
const express = require('express');
const app = express()


const DB = process.env.DATABASE
const PORT = process.env.PORT

app.use(express.json())
app.use(require('./router/auth'))
 

// Middelware

const middelware = (req,res, next) => {
    console.log('This is Middelware');
    next()
}

app.get('/', (req, res) => {
    res.send('Hello form server')
})

app.get('/about', middelware,  (req, res) => {
    res.send('About page')
})

app.get('/contact', (req, res) => {
    res.send('Contact page')
})

app.get('/signin', (req, res) => {
    res.send('Sign In page')
})

app.get('/signup', (req, res) => {
    res.send('Sign Up page')
})

app.listen(PORT, () => {
    console.log(`Server is listening at port no ${PORT}`);
})