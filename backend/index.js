const express = require('express');
// import express from 'express'

const app = express();
app.use(express.static('dist'));
const port = process.env.PORT || 3000;
app.get('/api/jokes/', (req, res) => {
    const jokes = [
        {
            "name": "Dune",
            "author": "Frank Herbert",
            "year": "1965"
        },

        {
            "name": "Neuromancer",
            "author": "William Gibson",
            "year": "1984"
        },
        {
            "name": "1984",
            "author": "George Orwell",
            "year": "1949"
        },
        {
            "name": "Brave New World",
            "author": "Aldous Huxley",
            "year": "1932"
        },
        {
            "name": "Fahrenheit 451",
            "author": "Ray Bradbury",
            "year": "1953"
        },
        {
            "name": "The Hitchhiker's Guide to the Galaxy",
            "author": "Douglas Adams",
            "year": "1979"
        },
        {
            "name": "Ender's Game",
            "author": "Orson Scott Card",
            "year": "1985"
        },
        {
            "name": "The Martian",
            "author": "Andy Weir",
            "year": "2011"
        },
        {
            "name": "Snow Crash",
            "author": "Neal Stephenson",
            "year": "1992"
        }
    ]
    res.send(jokes)

})




app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})