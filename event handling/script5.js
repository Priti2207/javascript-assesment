
const textInput = document.getElementById('textInput');
const output = document.getElementById('output');


textInput.addEventListener('input', function() {
  output.textContent = textInput.value;
});
