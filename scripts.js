function validation() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errormessage = document.getElementById("errormessage");
    var successmessage = document.getElementById("successmessage");
    var text;
    var text2;

    errormessage.style.padding = "10px";


    if (name.length < 5) {
        text = "Please Enter Valid Name!!!";
        errormessage.innerHTML = text;
        return false;
    }
    if (phone.length != 10 || isNaN(phone)) {
        text = "Please Enter Valid Number!!!";
        errormessage.innerHTML = text;
        return false;
    }
    if (email.indexof("@") == -1) {
        text = "Please Enter Valid Email!!!";
        errormessage.innerHTML = text;
        return false;
    }
    if (message.length < 30) {
        text = "Please Elaborate more (more than 30 characters)!!!";
        errormessage.innerHTML = text;
        return false;
    }
    alert("Form Submitterd Successfully");
    return true;
}
