
const passwordField = document.getElementById('passwordField');
const showPassword = document.getElementById('showPassword');


showPassword.addEventListener('change', function() {
  if (showPassword.checked) {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
});
