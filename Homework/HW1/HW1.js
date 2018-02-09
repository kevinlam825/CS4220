//HW1 - Kevin Lam

//Question 1
function upperCase(str) {
    let result = '';
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            let temp = str.charCodeAt(i) - 32;
            result += String.fromCharCode(temp);
        } else result += str.charAt(i);
    }
    console.log(result);
}

function lowerCase(str) {
    let result = '';
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            let temp = str.charCodeAt(i) + 32;
            result += String.fromCharCode(temp);
        } else result += str.charAt(i);
    }
    console.log(result);
}



function alternatingCase(str) {
    let result = '';
    let temp;
    for (i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                temp = str.charCodeAt(i) + 32;
                result += String.fromCharCode(temp);
            } else result += str.charAt(i);
        } else {
            if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                temp = str.charCodeAt(i) - 32;
                result += String.fromCharCode(temp);
            } else result += str.charAt(i);
        }
    }
    console.log(result);
}

function inverseCase(str) {

}