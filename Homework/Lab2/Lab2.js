//Lab 2 - Kevin Lam


const crypto = require('crypto')
const message = 'Hello, World!'

//Problem 1
// Get a list of all supported hashing algorithms
const hashes = crypto.getHashes()

const hashingAlgorithm = 'sha256'

let result = ''
let digestResult = ''
let nonce = 1


while (!(digestResult[0] == 0 && digestResult[1] == 0 && digestResult[2] == 0 && digestResult[3] != 0)) { //Loop until we get only 3 leading 0's
    result = message + nonce //set new message to hash
    nonce++ //increment after
    const hash = crypto.createHash(hashingAlgorithm)
    hash.update(result)
    const digest = hash.digest('hex')
    digestResult = digest
}
//console.log(`The '${hashingAlgorithm}' digest of '${result}' is: ${digestResult}`)

//Problem 2

const fs = require('fs')
const path = require('path')