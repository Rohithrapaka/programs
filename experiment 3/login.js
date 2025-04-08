function LoginValidate() {
    var enteremail = document.getElementById("email").value;
    var enterpassword = document.getElementById("pwd").value;

    var getEmail = localStorage.getItem("email");
    var getPwd = localStorage.getItem("Password"); // Matching key with register.js

    if (enteremail === getEmail) {
        if (enterpassword === getPwd) {
            alert("Login success");
            window.location.href = "welcome.html"; // Redirect to welcome page
            return false;
        } else {
            alert("Wrong password");
        }
    } else {
        alert("Email not found");
    }
    return false;
}
