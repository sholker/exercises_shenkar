function validationForm() {
    var msg = "";
    var field_value = document.forms["addClient"]["name"].value;
    if (field_value==""){
        msg = "Child first name is required";
        document.getElementById("messageErr").innerHTML = msg;
        return false;
    }
 

    var field_value = document.forms["addClient"]["name_p"].value;
    if (field_value==""){
        msg = "Paernt name is required";
        document.getElementById("messageErr").innerHTML = msg;
        return false;
    }


    field_value = document.forms["addClient"]["phone"].value;
    if (field_value.length>10 || field_value.length<9 || isNaN(field_value)) {
        msg="Trainer's Phone number is between 9 to 10 digits without charcters!\n";
        document.getElementById("messageErr").innerHTML = msg;
        return false
    }

    return true;
};