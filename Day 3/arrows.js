function greet(name = "friend") {
    return `Hello, ${name}!`;
}

console.log(greet("Richard"));

// Function expression
const greetExpression = function (name = "friend") {
    return `Hello, ${name}!`;
};

console.log(greetExpression("Richard"));

// Arrow function
const greetArrow = (name = "friend") => {
    return `Hello, ${name}!`;
};

console.log(greetArrow("Richard"));

// Default parameter
console.log(greet());
console.log(greetExpression());
console.log(greetArrow());