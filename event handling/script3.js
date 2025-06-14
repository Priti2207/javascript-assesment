


const button = document.getElementById('clickBtn');
const result = document.getElementById('result');

let count = 0;

button.addEventListener('click', function() {
  count++;
  result.textContent = `You clicked ${count} times`;
});
