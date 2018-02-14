/*let btn = document.getElementById("submitKnapp");

btn.addEventListener("click", function (e) {
    e.preventDefault()
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getelementById("lastName").value;
    let email = document.getelementById("email").value;
    let address = document.getelementById("adress").value;
    let zipCode = document.getelementById("zip").value;
    let city = document.getelementById("city").value;
});*/

let btn = document.getElementById("Knapp");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    errorMessage = "";

    if(document.getElementById("firstName").value === ""){
        errorMessage += "Enter your First Name \n";
    }
    if(document.getElementById("lastName").value === ""){
        errorMessage += "Enter your Last Name \n";
    }
    if(document.getElementById("email").value === ""){
        errorMessage += "Enter your Email \n";
    }
    if(document.getElementById("address").value === ""){
        errorMessage += "Enter your Street Address \n";
    }
    if(document.getElementById("zip").value === ""){
        errorMessage += "Enter your Zip Code \n";
    }
    if(document.getElementById("city").value === ""){
        errorMessage += "Enter your City \n";
    }
    if(errorMessage !== ""){
        alert(errorMessage);
        return false;
    }
    document.getElementById("myForm").submit();
});