//Lab 2 - Kevin Lam

const crypto = require('crypto')
const message = 'Hello, World!'

//Problem 1
const hashingAlgorithm = 'sha256'
let result = ''
let digestResult = ''
let nonce = 1

while (!(digestResult[0] == 0 && digestResult[1] == 0 && digestResult[2] == 0 && digestResult[3] != 0)) { //Loop until we get only 3 leading 0's
    result = message + nonce //set new message to hash
    nonce++ //increment after
    const hash = crypto.createHash(hashingAlgorithm)
    hash.update(result)
    const digest = hash.digest('hex') //get hash
    digestResult = digest //set hash to check if match found
}
console.log(`The '${hashingAlgorithm}' digest of '${result}' is: ${digestResult}`) //Print after match is found
console.log()

//Problem 2

let request = require('request');
const fs = require('fs')
const path = require('path')
const fullPublicKeyPath = path.resolve('keys', 'public_key.pem')
const publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8')


request('http://albertcervantes.com/cs4220/messages.json', (error, response, body) => {
    let responseObj = JSON.parse(body)
    responseObj.forEach(function(element) {
        validateKeys(element)
    })
})

let validateKeys = (element) => {
    verify = crypto.createVerify('SHA256')
    verify.update(element.message)
    const isValidSignature = verify.verify(publicKey, element.signature, 'hex')
    console.log(`${isValidSignature} - ${element.message}`)
}