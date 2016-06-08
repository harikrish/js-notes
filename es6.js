//Constants

const PI = 3.141593;

//Scoping
//Block-Scoped Variables

function letTest() {
    let x = 31;
    if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
    }
    console.log(x);  // 31
}

//Arrow Functions


//Default parameters
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50

//Rest parameters
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9

//Spread operators
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

//Template literals
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
message = `Hello ${customer.name},want to buy ${card.amount} ${card.product} fora total of ${card.amount * card.unitprice} bucks?`

//Property shorthand
obj = { x, y }

//Computed property names
let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}

//Method properties
obj = {
    foo (a, b) {
    },
    bar (x, y) {
    },
    quux (x, y) {
    }
}

//Array matching
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]

var { op, lhs, rhs } = getASTNode()

var { op: a, lhs: { op: b }, rhs: c } = getASTNode()

//Parameters context matching
function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })
    
//Fail-soft Destructuring
var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
a === 7
b === 42
c === 3
d === undefined


//http://es6-features.org/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
