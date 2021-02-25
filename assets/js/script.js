//' EmailJS
function sendMail() {
  var ip_Name = document.getElementById("contact_name").value;
  var ip_Email = document.getElementById("contact_email").value;
  var ip_Message = document.getElementById("contact_message").value;

  if (ip_Name !== "" && validateEmail(ip_Email) && ip_Message !== "") {
    var emailObj = {
      from_name: ip_Name,
      from_email: ip_Email,
      from_message: ip_Message,
    };

    emailjs.send("service_ap4r4nr", "template_8flbcqn", emailObj).then(
      function (res) {
        // console.log("Email sent with status: " + res.status);
        swal(
          "Email Sent !",
          `Thank you ${ip_Name} for your message`,
          "success"
        );
        clearFields();
      },
      function (error) {
        if (error.status == 412) {
          swal("OOPS!", "Please enter valid email address", "error");
        }
        clearFields();
      }
    );
  } else {
    swal("OOPS!", "Please enter all fields correctly..", "error");
    clearFields();
  }
}

//' Check valid email address
function validateEmail(mail) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(mailformat)) {
    return true;
  }
  return false;
}

//' Clear all input fields
function clearFields() {
  document.getElementById("contact_name").value = "";
  document.getElementById("contact_email").value = "";
  document.getElementById("contact_message").value = "";
}
