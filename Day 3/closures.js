function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = makeCounter();

console.log(counter2());
console.log(counter2());

/*
The returned function remembers the count variable
even after makeCounter() has finished running.
This happens because of a closure.

Each call to makeCounter() creates a separate count,
so counter1 and counter2 have independent counts.
*/