function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; 
  }
  return a / b; 
}

console.log(foo(10, 0)); // Throws an error: Division by zero
console.log(foo(0, 10)); // Returns 0 as expected
console.log(foo(0,0)); // Returns 0 as expected