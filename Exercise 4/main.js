let userInfo = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

console.log(
  userInfo.map((item) => item.budget).reduce((prev, next) => prev + next)
);

//had to Google to get this one
