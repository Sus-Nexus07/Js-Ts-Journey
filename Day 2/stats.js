function findMax(numbers) {
    let max = numbers[0];

    for (const number of numbers) {
        if (number > max) {
            max = number
        }
    }
    return max;
}

const nums = [12, 5, 88, 3, 45, 88, -7];

console.log(findMax(nums));
console.log(findMax([]));


function findMin(numbers) {
    let min = numbers[0];

    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}

function findAverage(numbers) {
    let total = 0;

    for (const number of numbers) {
        total = total + number
    }

    return average = total / numbers.length
}

console.log(findAverage(nums));
[12, 5, 88, 3, 45, 88, -7]