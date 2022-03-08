function parent(x) {
  return function closure(job) {
    // Closure is declared here.
    return x;
  };
}

const remember = parent("remembers me");

console.log(remember());
// Seems like the variable x would be gone after
// parent is executed, but it's not.

// closure();
// Returns "remembers me" because the inner
// function remembers x.

//   Aim: Fix the code to print out the string message.
