/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}














function validateForm() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var phoneNo = document.getElementById('phoneNo').value;
  var error_message = document.getElementById('error_message');
  var text;

  error_message.style.padding = "10px";

  if(email.indexOf("@") == -1 || email.length <6){
    text = "Please enter valid full email!";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(phoneNo) || phoneNo.length < 10){
    text = "Please enter valid phone number!";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form Submitted, Thank You!")
  return true;
}

function Response(){
  alert("Please refer to subscription form page to know more, Thank You.")
  return true;
}
