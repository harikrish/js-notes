var falsyValues = [false, 0, '', null, undefined, NaN];

for(var i = 0; i < falsyValues.length; i++) {
    if (falsyValues[i]) {
        console.log('this is not false');
    } else {
        console.log('this is false');
    }
}

//Truthy: Something which evaluates to TRUE.
//Falsey: Something which evaluates to FALSE.

//https://www.sitepoint.com/javascript-truthy-falsy/
//https://developer.mozilla.org/en-US/docs/Glossary/Falsy
//https://developer.mozilla.org/en-US/docs/Glossary/Truthy
//http://james.padolsey.com/javascript/truthy-falsey/
