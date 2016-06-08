function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
//http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
