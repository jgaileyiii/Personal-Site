const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const credentials = require('./config')

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      type: 'login',
      user: credentials.email,
      pass: credentials.pass
    }
}
console.log('email', credentials.email)
const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
      console.log(error)
    } else {
      console.log("Nodemailer is working")
    }
})

router.post('/send', (req, res, next) => {
    const content = `name: ${req.body.name} \n email: ${req.body.email} \n message: ${req.body.content}`
    const message = {
        from: req.body.name,
        to: "jvgaileyiii@gmail.com",
        subject: "New message from Contact Form",
        text: content
    }

    transporter.sendMail(message, (err, data) => {
        if (err) {
            res.json({
                status: "Failed"
            })
        } else {
            res.json({
                status: "Success"
            })
        }
    })
})

module.exports = router




