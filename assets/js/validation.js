function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var emailRegex = /\S+@\S+\.\S+/;
  var text;

  error_message.style.padding = "10px";



  if (name.length < 1 || /\d/.test(name)) {
    text = "Please enter a valid name";
    error_message.innerHTML = text;
    return false;
  }
  
  if (!emailRegex.test(email)) {
    text = "Please enter a valid email or you can't miss @";
    error_message.innerHTML = text;
    return false;
  }

  if (subject.length < 1) {
    text = "You can't leave subject field blank";
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 30) {
    text = "Please enter a minimum of 30 characters in message field";
    error_message.innerHTML = text;
    return false;
  }
 
  return true;
}
