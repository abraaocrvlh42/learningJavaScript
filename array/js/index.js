const fruits = ["Strawberry", "Mango"];
const fruitsAlias = fruits;

// 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
fruits === fruitsAlias; // true

// Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift("Apple", "Banana");

console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']

console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']