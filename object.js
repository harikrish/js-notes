if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

function inherit(proto) {
    function F() {}
    F.prototype = proto
    return new F
}

function extend(Child, Parent) {
    Child.prototype = inherit(Parent.prototype)
    Child.prototype.constructor = Child
    Child.parent = Parent.prototype
}


// A "constructor" in JavaScript is "just" a function that happens to be called with the new operator.
function Graph() {
    this.vertices = [];
    this.edges = [];
}
var g = new Graph();


// Animal 
function Animal(name) {
    this.name = name
}

// Animal methods
Animal.prototype = { 
    canWalk: true,
    sit: function() {
        this.canWalk = false
        alert(this.name + ' sits down.')
    }
}

// Rabbit
function Rabbit(name) {
    this.name = name
}

// inherit
Rabbit.prototype = inherit(Animal.prototype)

// Rabbit methods
Rabbit.prototype.jump = function() {
    this.canWalk = true
    alert(this.name + ' jumps!')
}

// Usage
var rabbit = new Rabbit('Sniffer')

rabbit.sit()   // Sniffer sits.
rabbit.jump()  // Sniffer jumps!





//http://alistapart.com/article/prototypal-object-oriented-programming-using-javascript
//http://javascript.crockford.com/prototypal.html
//http://javascript.info/tutorial/pseudo-classical-pattern#pseudo-class-declaration
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
