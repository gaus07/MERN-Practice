const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs');

require('../db/conn')
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send('Hello form server router')
})

// USING PROMISES

// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill all details properly !" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already exist !" })
//             }
//             const user = new User({ name, email, phone, work, password, cpassword })
//             user.save().then(() => {
//                 res.status(201).json({ message: "User Registered Successfully" })
//             }).catch((err) => res.status(500).json({ error: "Failed To Registered" }))
//         }).catch(err => { console.log(err) })
// })

// Registeration Route
// USING ASYNC AWAIT
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body
    console.log(name, email, phone, work, password, cpassword);
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all details properly !" })
    }
    try {
        const userExisted = await User.findOne({ email: email })
console.log(userExisted);
        if (userExisted) {
            return res.status(422).json({ error: "User Already Existed" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password Doesn't Match" })
        } 
            const user = new User({ name, email, phone, work, password, cpassword })
            await user.save()
            return res.status(201).json({ message: "User Registered Successfully" })

    } catch (err) {
        console.log(err);
    }
})

// Login Route
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Please Fill all Details" })
        }

        const userLogin = await User.findOne({ email: email })
        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            const token = await userLogin.generateAuthToken()
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" })
            } else {
                res.json({ message: "User Signin Successfully" })
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" })
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router