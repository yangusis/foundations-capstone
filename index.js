const express = require('express')
const path = require('path')
const cors = require('cors')
const axios = require('axios')
const { seed, movieMaxScore } = require('./controller.js')
const { SERVER_PORT } = process.env

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "./notserver")))
app.use(express.static(path.join(__dirname, "./")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './notserver/index.html'))
})

app.post('/seed', seed)

app.get('movies/max', movieMaxScore)

app.get('/movies', (req, res) => {
    res.sendFile(path.join(__dirname, './notserver/movies.html'))
})

app.get('/games', (req, res) => {
    res.sendFile(path.join(__dirname, './notserver/games.html'))
})

app.get('/cards', (req, res) => {
    res.sendFile(path.join(__dirname, './notserver/cards.html'))
})

app.get('/movies/start', (req, res) => {
    res.status(200).send(console.log('movies loaded'))
})

app.get('/games/start', (req, res) => {
    res.status(200).send(console.log('games loaded'))
})
app.get('/cards/start', (req, res) => {
    res.status(200).send(console.log('cards loaded'))
})

app.listen(process.env.SERVER_PORT, () => console.log('listening on 4000'))