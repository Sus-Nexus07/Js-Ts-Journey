const values = [0, 1, -1, "", "hello", "0", null, undefined, NaN, [], {}];

0 // false
"" // false
null // false
undefined // false
NaN // false
//[] // true
{} // true
"0" // true
-1 // true

for (const v of values) {
    if (v) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// &&  = works through true values, returns a value..... 
// ||  = falls back on false values..... 
// ??  = falls back only on null/undefined
// !   = flips truthiness..... 


console.log(true && false); // && means AND, both sides need to be true so it returns false
console.log(true || false); // || means OR, at least one side needs to be true, so it returns true
console.log(!true); // ! means NOT... so it flips the true and returns false
console.log("hello" && "world"); // since it's in a string, && checks the values and returns one of them
console.log("" || "fallback"); // "" is false, so it returns "fallback"
console.log(null ?? "default"); // ?? checks if the lest side is null or undefined
console.log(0 || "default");  // || treats 0 as false and replaces it with default
console.log(0 ?? "default"); // ?? treats 0 as a valid value and keeps it


// TERNARY
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);