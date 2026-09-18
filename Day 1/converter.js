const rate = 1331

function nairaToUsd(amount){
    let result = amount/rate
    return result
};


function usdToNaira(amount){
    let result = amount * rate
    return result
};

function celsiusToFahrenheit(celsius){
    let result = celsius * 9 / 5 + 32
    return result 
};

function kgToPounds(kg){
    let result = kg * 2.20462
    return result 
};

console.log(nairaToUsd(3000));