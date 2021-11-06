const express = require('express')
const app = express()
const path = require('path')
const best = require('./bestlines.json')
const funny = require('./funnylines.json')
const cute = require('./cutelines.json')
const chessy = require('./cheesylines.json')
const bestatbar = require('./bestlinesatbar.json')
const port = 3000

app.use(express.static(path.join(__dirname,'./public')))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './public/index.html'));
})

// best 
app.get('/bestLinesList', (req, res) => {
    res.send({'bestLinesList': best })
})

app.get('/bestLinesList/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const bestLine = best[random];
    res.send(bestLine);
})

//funny
app.get('/funnyLinesList', (req, res) => {
    res.send({'funnyLinesList': funny })
})

app.get('/funnyLinesList/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const funnyLine = funny[random];
    res.send(funnyLine);
})

app.get('/bestLinesList', (req, res) => {
    res.send({'bestLinesList': best })
})

app.get('/bestLinesList/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const bestLine = best[random];
    res.send(bestLine);
})

app.get('/bestLinesList', (req, res) => {
    res.send({'bestLinesList': best })
})

app.get('/bestLinesList/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const bestLine = best[random];
    res.send(bestLine);
})

app.get('/bestLinesList', (req, res) => {
    res.send({'bestLinesList': best })
})

app.get('/bestLinesList/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const bestLine = best[random];
    res.send(bestLine);
})

app.listen(port, () => console.log(`Example app listening on ${port}`))