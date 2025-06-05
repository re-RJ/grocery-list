var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard",
];

//var horror = ["Oddities","Scream", "Cabin in the Woods", "Malignant", "Scream", "Tremors", "Silent Night", "Black Christmas", "Tremors"];

//console.log(groceries.length);
//18

var deleteDuplicates = function (list) {
  var cleanList = [];
  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

var newGroceries = deleteDuplicates(groceries);

//console.log(newGroceries.length);
//15

newGroceries.forEach(function (food, index) {
  console.log(`#${index + 1} ${food}`);
});
