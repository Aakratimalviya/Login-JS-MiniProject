function validate() {
    var userName = "Aakrati";
    var passWord = "abcd1234";

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == userName || password == passWord)
    {
        alert("Login Succesfully");
        
    }
    else{
        alert("Login Failed");
    }
}