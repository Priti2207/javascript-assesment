function multiply(a, b) {
  return a * b;
}

function calculateTotal(price, quantity) {
  const total = multiply(price, quantity);
  console.log("Total:", total);
}

calculateTotal(50, 3);  // Output: Total: 150
