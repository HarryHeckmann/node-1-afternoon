const express = require('express');
const {json} = require('body-parser')
const bodyParser = require('body-parser')

const app = express();

const mc = require('./controllers/messages_controller')
const baseUrl = '/api/messages'

app.use(bodyParser.json())
app.use(express.static(__dirname+'/../public/build'))

app.post(baseUrl, mc.create)
app.get(baseUrl, mc.read)
app.put(baseUrl+'/:id', mc.update)
app.delete(baseUrl+'/:id', mc.delete)


app.listen(3001, () => {
    console.log("hello")
})