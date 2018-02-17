//HW1 - Kevin Lam

//Question 1
function upperCase(str) {
    let result = ''
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            let temp = str.charCodeAt(i) - 32
            result += String.fromCharCode(temp)
        } else result += str[i]
    }
    return result
}

function lowerCase(str) {
    let result = ''
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            let temp = str.charCodeAt(i) + 32
            result += String.fromCharCode(temp)
        } else result += str[i]
    }
    return result
}

function sentenceCase(str, whitelist) {
    let result = ''
    let words = str.split(" ")
    lowerCaseArr = []
    for (i = 0; i < whitelist.length; i++) {
        lowerCaseArr.push(whitelist[i].toLowerCase())
    }
    words.forEach(function(element) {
        //First check if word has period in it
        if (element.indexOf(".") >= 0) {
            let newWord = element.split(".") //Split from periods
            if (lowerCaseArr.indexOf(newWord[0]) > -1) { //Check if word is in lowercase whitelist
                let cap = newWord[0].charAt(0).toUpperCase() + newWord[0].slice(1) //if it is, capitalize first letter
                result = result + cap + '. '
            } else {
                result += lowerCase(newWord[0]) + '. '
            }
        } else {
            if (lowerCaseArr.indexOf(element) >= 0) { //Check if word is in whitelist
                let cap = element.charAt(0).toUpperCase() + element.slice(1) //if it is, capitalize first letter
                result = result + cap + ' '
            } else {
                result += lowerCase(element) + ' '
            }
        }
    })

    return result.charAt(0).toUpperCase() + result.slice(1)
}

function capitalizedCase(str) {
    let result = ''
    for (i = 0; i < str.length; i++) {
        if (str[i - 1] == ' ' || i == 0) {
            if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                let temp = str.charCodeAt(i) - 32
                result += String.fromCharCode(temp)
            } else result += str[i]
        } else result += str[i]
    }
    return result
}

function alternatingCase(str) {
    let result = ''
    let temp
    for (i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                temp = str.charCodeAt(i) + 32
                result += String.fromCharCode(temp)
            } else result += str[i]
        } else {
            if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                temp = str.charCodeAt(i) - 32
                result += String.fromCharCode(temp)
            } else result += str[i]
        }
    }
    return result
}

function titleCase(str, whitelist) {
    let result = ''
    let words = str.split(" ")
    lowerCaseArr = []
    for (i = 0; i < whitelist.length; i++) {
        lowerCaseArr.push(whitelist[i].toLowerCase())
    }

    words.forEach(function(element) {
        //First check if word has period in it
        if (element.indexOf(".") >= 0) {
            let newWord = element.split(".") //Split from periods
            if (lowerCaseArr.indexOf(newWord[0]) > -1) { //Check if word is in lowercase whitelist
                result += newWord.toLowerCase()
            } else {
                result += capitalizedCase(newWord[0]) + '. '
            }
        } else {
            if (lowerCaseArr.indexOf(element) >= 0) { //Check if word is in whitelist
                result += element.toLowerCase() + ' '
            } else {
                result += capitalizedCase(element) + ' '
            }
        }
    })
    return result
}

function inverseCase(str) {
    let result = ''
    let cap = upperCase(str)
    for (i = 0; i < str.length; i++) {
        if (cap[i - 1] == ' ' || i == 0) {
            if (cap.charCodeAt(i) >= 65 && cap.charCodeAt(i) <= 90) {
                let temp = cap.charCodeAt(i) + 32
                result += String.fromCharCode(temp)
            } else result += cap[i]
        } else result += cap[i]
    }
    return result
}

function runStringFunctions() {
    let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.'

    let unconditionallyCapitalized = ['I', 'Moon', 'Shadow']
    let lowercaseWords = ['the', 'of', 'in', 'an']

    console.log('upperCase: ', upperCase(str))
    console.log('lowerCase: ', lowerCase(str))
    console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized)) //Split by spaces then compare to array | if == to work then change case | CHECK I-1 TO SEE IF SPACE FOR NEW WORD
    console.log('capitalizedCase: ', capitalizedCase(str))
    console.log('alternatingCase: ', alternatingCase(str))
    console.log('titleCase: ', titleCase(str, lowercaseWords))
    console.log('inverseCase: ', inverseCase(str))
}

console.log('Question 1 Results:')
runStringFunctions()



//Question 2
function getCharacterFrequency(str) {
    let sentence = str.toLowerCase()
    const freqObj = {}
    for (i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i)
        if (freqObj[char] == null) {
            freqObj[char] = 1
        } else {
            freqObj[char]++
        }
    }
    return freqObj;
}

function printCharacterFrequency(frequencyObj) {
    for (letter in frequencyObj) {
        if (frequencyObj[letter] == 1) console.log("'" + letter + "' occurs " + frequencyObj[letter] + " time.")
        if (frequencyObj[letter] > 1) console.log("'" + letter + "' occurs " + frequencyObj[letter] + " times.")
    }
}

function runCharacterFunctions() {
    let str = 'Hello, World!'
    let frequencyObj = getCharacterFrequency(str)
    printCharacterFrequency(frequencyObj)
}


console.log('\n Question 2 Results: ')
runCharacterFunctions()