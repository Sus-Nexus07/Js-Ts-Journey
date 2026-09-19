const rate = 1331

function nairaToUsd(amount) {
    let result = amount / rate
    return result
}

function usdToNaira(amount) {
    let result = amount * rate
    return result
}

function celsiusToFahrenheit(celsius) {
    let result = celsius * 9 / 5 + 32
    return result
}

function kgToPounds(kg) {
    let result = kg * 2.20462
    return result
}

console.log(`₦3000 = $${nairaToUsd(3000).toFixed(2)}`)
console.log(`$10 = ₦${usdToNaira(10).toFixed(2)}`)
console.log(`0°C = ${celsiusToFahrenheit(0).toFixed(2)}°F`)
console.log(`10 kg = ${kgToPounds(10).toFixed(2)} pounds`)
console.log(`100°C = ${celsiusToFahrenheit(100).toFixed(2)}°F`)
console.log(`₦5000 = $${nairaToUsd(5000).toFixed(2)} = ₦${usdToNaira(nairaToUsd(5000)).toFixed(2)}`)