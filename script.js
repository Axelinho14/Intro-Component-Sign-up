const button = document.getElementById("button");
const submit = document.getElementById("form");

button.addEventListener("mousedown", function(){
    button.style.backgroundColor = "hsl(154, 65%, 68%)";
});

submit.addEventListener("submit", function(e){
var erreur;
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

if(!firstName.value){
    erreur = "First Name cannot be empty";
}

if(erreur){
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    button.style.backgroundColor = "hsl(154, 59%, 51%)";
    firstName.classList.add("active");
    submit.classList.add("active");
    firstName.style.border = "2px solid red";
    firstName.placeholder = "";
}

if(!lastName.value){
    erreur = "Last Name cannot be empty";
}
if(erreur){
    e.preventDefault();
    document.getElementById("erreur2").innerHTML = erreur;
    button.style.backgroundColor = "hsl(154, 59%, 51%)";
    lastName.classList.add("active");
    submit.classList.add("active");
    lastName.style.border = "2px solid red";
    lastName.placeholder = "";
}

if(!password.value){
    erreur = "Password cannot be empty";
}
if(erreur){
    e.preventDefault();
    document.getElementById("erreur4").innerHTML = erreur;
    button.style.backgroundColor = "hsl(154, 59%, 51%)";
    password.classList.add("active");
    submit.classList.add("active");
    password.style.border = "2px solid red";
    password.placeholder = "";
}

if(!isValidEmail(email.value)){
    e.preventDefault();
    document.getElementById("erreur3").innerHTML = "Looks like this is not an email";
    button.style.backgroundColor = "hsl(154, 59%, 51%)";
    email.classList.add("active");
    submit.classList.add("active");
    email.style.border = "2px solid red";
    email.placeholder = ""
}
})
