// Write a function redundantReturn that takes in a string str and returns a function that returns str.

function redundantReturn() {
  return function redundantReturn() {
    return "str";
  };
}

console.log(redundantReturn);
