const multiply = (a, b) => a * b;

const calculateTotal = (price, quantity) => {
  const total = multiply(price, quantity);
  console.log("Total:", total);
};

calculateTotal(50, 3);  // Output: Total: 150
