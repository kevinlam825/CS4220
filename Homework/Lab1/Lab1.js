//Lab 1 - Kevin Lam

//Section 1
const http = require('http')

const sample = [
    'http://www.google.com/',
    'http://www.spotify.com/us/',
    'http://twitter.com/',
    'http://google.com/nothing'
]

const getTimes = (argument, callback) => {
    let startTime = new Date().getTime()

    let endTime = new Date().getTime()
    let finalTime = endTime - startTime

    console.log(finalTime)
}

getTimes('a', 'b')