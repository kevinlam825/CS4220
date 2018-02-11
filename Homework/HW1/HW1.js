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
        // console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized))
    console.log('capitalizedCase: ', capitalizedCase(str))
    console.log('alternatingCase: ', alternatingCase(str))
        //console.log('titleCase: ', titleCase(str, lowercaseWords))
    console.log('inverseCase: ', inverseCase(str))
}

runStringFunctions()