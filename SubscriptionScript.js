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















function validateForm(){
  var email = document.getElementById('email').value;
  var error = document.getElementById('error');
  var text;



  if(email.indexOf("@") == -1 || email.length <6){
    text = "Please provide a valid email address.";
    error.innerHTML = text;
    return false;
  }

  alert("Thank you for your subscription!")
  return true;

}
