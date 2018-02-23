//Lab 1 - Kevin Lam

//Section 1
const http = require('http')

const sample = [
    'http://www.google.com/',
    'http://www.spotify.com/us/',
    'http://twitter.com/',
    'http://google.com/nothing'
]

getTimes = (argument, callback) => {
    let startTime = new Date().getTime() //Get start time
    http.get(argument, (res) => { //Make get request
        callback({
            'url': argument, //Set url
            'time': new Date().getTime() - startTime //Set response time
        })
    }).on('error', (err) => {
        console.log('Error: ' + err)
    })
}

printTimes = (sample) => {
    sample.forEach(element => {
        getTimes(element, (error, result) => {
            if (error)
                console.log(error)
            else
                console.log(result)
        })
    })
}

printTimes(sample)

//Section 2