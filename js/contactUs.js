var phoneValid;
var emailValid;

function inputBoxHighLight(elem) {

    if (elem.value == "") {

        if (elem.id == "phoneNum") {
            document.getElementById("phone-error").style.visibility = "hidden";   
        }

        else if (elem.id == "emailInput") {
            document.getElementById("email-error").style.visibility = "hidden";
        }

        elem.style.border = "red solid 1px";
        return;
    }

    else {
      
        if (elem.id == "phoneNum") {
            
            if (!/^\d+$/.test(elem.value) || elem.value.length != 8) {
                elem.style.border = "red solid 1px";
                document.getElementById("phone-error").style.visibility = "visible";
                return false;
            }

            else {
                elem.style.border = "";
                document.getElementById("phone-error").style.visibility = "hidden";
        
                return true;
            }
        }

        else if (elem.id == "emailInput") {

            if (elem.value.indexOf("@mymail.sim.edu.sg")!= -1 || elem.value.indexOf("@gmail.com")!= -1) {
                document.getElementById("email-error").style.visibility = "hidden";
                elem.style.border = "";
                return true;
            }

            else if (elem.value == "") {
                document.getElementById("email-error").style.visibility = "hidden";
            }

            else {

                elem.style.border = "red solid 1px";
                document.getElementById("email-error").style.visibility = "visible";
                return false;
                
            }

        }
        
        elem.style.border = "";
    }
}

function registeration() {

    const firstNameObj = document.getElementById("firstNameInput");
    const lastNameObj = document.getElementById("lastNameInput");
    const emailObj = document.getElementById("emailInput");
    const phoneObj = document.getElementById("phoneNum");
    const enquiryObj = document.getElementById("messageBox");

    let firstName = firstNameObj.value;
    let lastName = lastNameObj.value;
    let enquiry = enquiryObj.value;
    let objArray = [];

    objArray = [firstNameObj, lastNameObj, emailObj, phoneObj, enquiryObj];

    var warningMsg = document.getElementById("warningMsg");

    if (firstName != "" && lastName != "" && enquiry != "" && inputBoxHighLight(emailObj) && inputBoxHighLight(phoneObj)) {

            warningMsg.innerHTML = "* Awesome! Enquiry is successfully submitted! *";
            warningMsg.style.color = "green";
    }

    else {

        for (var i =0; i<objArray.length; i++) {
            inputBoxHighLight(objArray[i]);
        }
        
        warningMsg.innerHTML = "* Please fill up all the highlighted fields! *";
        warningMsg.style.color = "red";
    }
    
}
