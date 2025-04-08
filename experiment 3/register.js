function validate() {
    var fn = document.forms["frm"]["fname"].value;
    localStorage.setItem("firstname", fn);

    for (var x = 0; x < fn.length; x++) {
        var ch = fn.charCodeAt(x);
        if ((ch < 65 || ch > 90) && (ch < 97 || ch > 122)) {
            alert("Invalid first name");
            return false;
        }
    }

    var ln = document.forms["frm"]["lname"].value;
    localStorage.setItem("lastname", ln);

    for (var y = 0; y < ln.length; y++) {
        var ch = ln.charCodeAt(y);
        if ((ch < 65 || ch > 90) && (ch < 97 || ch > 122)) {
            alert("Invalid last name");
            return false;
        }
    }

    var phn = document.forms["frm"]["phone"].value;
    localStorage.setItem("Phone", phn);
    
    if (phn.length !== 10) {
        alert("Phone number should be exactly 10 digits");
        return false;
    }

    var pwd1 = document.forms["frm"]["pwd"].value;
    localStorage.setItem("Password", pwd1);

    if (pwd1.length % 2 === 1) {
        alert("Password should contain an even number of characters");
        return false;
    }
    if (pwd1.length > 8) {
        alert("Password should not exceed 8 characters");
        return false;
    }

    var reg = /^\w+([.-]?\w+)@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var mail = document.forms["frm"]["mailid"].value;
    localStorage.setItem("email", mail);

    if (!reg.test(mail)) {
        alert("Invalid email");
        return false;
    }

    alert("Registration successful!");
    return true;
}
