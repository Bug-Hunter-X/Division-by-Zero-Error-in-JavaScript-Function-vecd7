function foo(a, b) {
  if (a === 0 || b === 0) {
    if(a === 0 && b === 0) return NaN; // handle both a and b being zero
    return 0; 
  }
  return a / b; 
}

console.log(foo(10, 0)); // Returns 0
console.log(foo(0, 10)); // Returns 0
console.log(foo(0,0)); // Returns NaN
console.log(foo(10,2)); //Returns 5