// Ask user for the price
let price = prompt("Enter a Price");
// Remove dollar sign
let newPrice = price.replace("$", "");
// Convert string to number
let numberPrice = parseFloat(newPrice);
// Apply 10% discount
let finalPrice = numberPrice * 0.9;

// Print Result
console.log(`Your new price is: $${finalPrice.toFixed(2)}`);
