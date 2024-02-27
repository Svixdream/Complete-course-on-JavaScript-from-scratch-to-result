'use strict'

// function declaration
function calc(apple, b, c, d) {

    return apple + b - c
}

const result = calc(23, 16, 8)

console.log(result)

// function expression
let result2 = function (a, b, c) {
    return a + b - c
}

console.log(result2(10, 4, 3))


