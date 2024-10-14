// 1. Trim
let msg= "      good moring      ";
console.log(msg.trim());

// 2. toUpperCase
let msg1= "good moring";
console.log(msg1.toUpperCase());

// 3. toLowerCase
let msg2= "GOOD MORING";
console.log(msg2.toLowerCase());

// 4. indexOf
let msg3= "good moring";
console.log(msg3.indexOf("moring"));

// 5. method chaining:
let fruit = "   bananas";
let fruitTrim = fruit.trim()
console.log(fruitTrim)
let fruitUpper =fruitTrim.toUpperCase()
console.log(fruitUpper)
let fruitAfterChaining = fruit.trim().toUpperCase();
console.log(fruitAfterChaining)

// 6. Replace
let msg7= "good moring";
console.log(msg7.replace("moring","evening"));

// 7. split
let msg8= "good moring";
console.log(msg8.split(" "));

//  8: Repeat:
let message = "An idiot in the class always do ruckus. ";
console.log(message.repeat(3));

// 9. slice
let msg9= "good moring";
console.log(msg9.slice(5,10));