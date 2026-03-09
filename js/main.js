// DECLARING VARIABLES
// Declare variables that will
// store references for
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

var submitBtn = document.getElementById("submit-button");
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var message = document.getElementById("message");

// Declare variable that will
// store regular expression for email

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function checkForm() {

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
    // Declare object that will store the form-data
    var data = {};
    // Declare array that will store the errors
    var errors = {};

    // +-----------+
    // | FULL NAME |
    // +-----------+
    // Check if fullname is not empty.
    if (fullname.value != "") {
        // Pass the collected value to your object "data".
        data.fullname = fullname.value;
    } else {
        // Create a corresponding error-message
        // and add it to your array "errors".
        errors.fn = "Full name is missing";
    }
    // End your conditional here.


    // +-------+
    // | EMAIL |
    // +-------+
    // Check if email is not empty.
    if (email.value != "") {
        // Check if email is valid.
        if (emailRegex.test(email.value)) {
            // Pass the collected value to your object "data".
            data.email = email.value;
        } else {
            // Create a corresponding error-message
            // and add it to your array "errors".
            errors.em = "Email is not valid";
        }
        // End your nested conditional here.
    } else {
        // Create a corresponding error-message
        // and add it to your array "errors"
        errors.em = "Email is missing";
    }
    // End your outer conditional here.


    // +---------+
    // | MESSAGE |
    // +---------+
    // Check if message is not empty.
    if (message.value != "") {
        // Pass the collected value to your object "data".
        data.message = message.value;
    } else {
        // Create a corresponding error-message
        // and add it to your array "errors"
        errors.msg = "Message name is missing";
    }
    // End your conditional here.


    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
    if (Object.keys(errors).length > 0) {
        // If so: Print it in JavaScript console.
        console.log("ERRORS", errors);
    } else {
        // Print the data in JavaScript console.
        console.log("COLLECTED DATA", data);
        // Clear text-fields
        fullname.value = "";
        email.value = "";
        message.value = "";
    }
    // End your conditional here.

}
// Close your function here

// Register your form to "click" event.
submitBtn.addEventListener("click", checkForm);