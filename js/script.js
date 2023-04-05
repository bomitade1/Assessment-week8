const form = document.getElementById('registration-form');
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const phoneNum = document.getElementById("number").value;
const gender = document.getElementById("mySelect").value;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Validate fname
  const nameValue = fnameInput.value.trim();
  if (nameValue === '') {
    showError(fnameInput, 'Name is required');
  } else {
    hideError(fnameInput);
  }

    // Validate lname
  const surnameValue = lnameInput.value.trim();
  if (surnameValue === '') {
    showError(lnameInput, 'Name is required');
  } else {
    hideError(lnameInput);
  }

  // Validate email
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, 'Email is invalid');
  } else {
    hideError(emailInput);
  }

  // Validate password
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    showError(passwordInput, 'Password is required');
  } else if (passwordValue.length < 8) {
    showError(passwordInput, 'Password must be at least 8 characters');
  } else {
    hideError(passwordInput);
  }
//function that validates the password string based on certain criteria:
function validatePassword() {
  // Check if password has at least 8 characters
      if (passwordInput.length < 8) {
          return false;
      } 
      
  // Check if password has at least one uppercase letter
      if (!/[A-Z]/.test(passwordInput)) {
         return false;
      } 
      
  // Check if password has at least one lowercase letter
      if (!/[a-z]/.test(passwordInput)) {
          return false;
       } 
      
  // Check if password has at least one digit
      if (!/\d/.test(passwordInput)) {
          return false;
       } 
      
  // Check if password has at least one special character
      if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(passwordInput)) {
           return false;
      } 
      
          return true;
      }


  // Validate confirm password
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  if (confirmPasswordValue === '') {
    showError(confirmPasswordInput, 'Confirm Password is required');
  } else if (confirmPasswordValue !== passwordValue);

  // validate phone number
  if(isNaN(phoneNum) || phoneNum.length != 11){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }

  let message = document.getElementById("message").value;
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }

  const submitButton = document.getElementById("submitButton");
  const termsAndConditions = document.getElementById("termsAndConditions");

  submitButton.addEventListener("click", function(event) {
    if (!termsAndConditions.checked) {
      event.preventDefault();
      alert("Please agree to the terms and conditions");
    }
  });

    alert("Form Submitted Successfully!");
    return true;
}