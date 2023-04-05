function validate(){
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let gender = document.getElementById("mySelect").value;
    let email = document.getElementById("email").value;
    let phoneNum = document.getElementById("number").value;
    let postalCode = document.getElementById("postal").value;
    let checkmark = document.getElementById("checkmark").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";

/**
 * var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
 */
    var text;
//validating firstName to be more than 3 characters and must be a string type 
    if(firstName.length < 3 || firstName === ""){
      text = "Please Enter valid Name";
      document.getElementById("fname"); fname.style.color = "red";
      error_message.innerHTML = text;
      return false;
    }
//validating lastname to be more than 3 characters and must be a string type
    if(lastName.length < 4 || lastName === ""){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    } 
//function that validates the password string based on certain criteria:
function validatePassword(password) {
// Check if password has at least 8 characters
    if (password.length < 8) {
        return false;
    } 
    
// Check if password has at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
       return false;
    } 
    
// Check if password has at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
     } 
    
// Check if password has at least one digit
    if (!/\d/.test(password)) {
        return false;
     } 
    
// Check if password has at least one special character
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
         return false;
    } 
    
        return true;
    }
//validating gender field
      function validateSelect() {
        const selectElement = gender
        const selectedIndex = selectElement.selectedIndex;
        if (selectedIndex === 0) {
          alert("Please select an option");
          return false; // prevent form submission
        } else {
          const selectedValue = selectElement.options[selectedIndex].value;
// do something with the selected value
        }
      }

    if(isNaN(phoneNum) || phoneNum.length != 11){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
/**
 * adding event listener to submit buttom to listen validate 
 * terms and conditions before submitting the form
**/
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