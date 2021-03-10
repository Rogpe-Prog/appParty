const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const router = require('./router/route')

const mongo = process.env.MONGODB || 'mongodb+srv://rogpe:Aloha2021@cluster0.s3o0o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname +'/public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', router)

mongoose.set('debug', true);

mongoose
    .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log('Online... '+port)
        })
    })
    .catch(e => {
        console.log('ERROR: '+e)
    })





