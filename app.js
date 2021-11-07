const express = require('express')
const app = express()
const path = require('path')
const best = require('./bestlines.json')
const funny = require('./funnylines.json')
const cute = require('./cutelines.json')
const chessy = require('./cheesylines.json')
const bestatbar = require('./bestlinesatbar.json')
const port = 9090

app.use(express.static(path.join(__dirname,'./public')))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './public/index.html'));
})

// best 
app.get('/best', (req, res) => {
    res.send({'best': best })
})

app.get('/best/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const bestLine = best[random];
    res.send(bestLine);
})

//funny
app.get('/funny', (req, res) => {
    res.send({'funny': funny })
})

app.get('/funny/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const funnyLine = funny[random];
    res.send(funnyLine);
})

// cute
app.get('/cute', (req, res) => {
    res.send({'cute': cute })
})

app.get('/cute/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const bestLine = cute[random];
    res.send(bestLine);
})

// chessy
app.get('/chessy', (req, res) => {
    res.send({'chessy': chessy })
})

app.get('/chessy/random',(req, res) =>{
    const random = Math.floor(Math.random() * 19);
    const bestLine = chessy[random];
    res.send(bestLine);
})

// bestatbar
app.get('/bestatbar', (req, res) => {
    res.send({'bestatbar': bestatbar })
})

app.get('/bestatbar/random',(req, res) =>{
    const random = Math.floor(Math.random() * 20);
    const bestLine = bestatbar[random];
    res.send(bestLine);
})

app.listen(port, () => console.log(`Example app listening on ${port}`))