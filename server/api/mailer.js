const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const cors = require('cors')
const credentials = ('../config')

const transport = {
    host: '*',
    port: 4000,
    auth: {
      user: credentials.email,
      pass: credentials.pass
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
      console.log(error)
    } else {
      console.log("Nodemailer is working")
    }
})

router.post('/send', (req, res, next) => {
    const content = `name: ${req.body.name} \n email: ${req.body.email} \n message: ${req.body.message}`
    const message = {
        from: req.body.name,
        to: credentials.email,
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

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3000)
