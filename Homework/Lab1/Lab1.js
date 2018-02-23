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
let resultObject = {
    'success': [],
    'error': []
}

checkSite = (site) => {
    return new Promise((resolve, reject) => {
        http.get(site, (res) => { //Make request
            if (res.statusCode >= 200 && res.statusCode <= 399) resolve({ 'success': site }) //Check status codes & assigns corresponding values
            if (res.statusCode >= 400 && res.statusCode <= 599) resolve({ 'error': site })
        }).on('error', (err) => {
            reject(err)
        })
    })
}

print = (sites) => {
    const promises = sites.map((site) => {
        return checkSite(site)
    })

    Promise.all(promises)
        .then((results) => {
            results.forEach((element) => {
                if (element.success != null) resultObject.success.push(element.success) //Check if item was successful, if so add to success key
                if (element.error != null) resultObject.error.push(element.error) //Check if item resulted in error, if so add to error key

                if (resultObject.success.length + resultObject.error.length == sample.length) console.log(resultObject) //Print when all items have been added to resultObject
            })
        })
        .catch(error => {
            console.log('error', error)
        })

}

setTimeout(() => {
    console.log()
    print(sample)
}, 500)