

function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);}


function checkName(){
    var value = document.getElementById("name").value;
    console.log(value);
    var regEx = /^[a-zA-Z ]*$/;
    var result = regEx.test(value);
    console.log(result);
    var name = document.getElementsByName("name");
    if (result == false){
        name[0].style.backgroundColor = "red";
    }
    else{
        name[0].style.backgroundColor = "rgba(255,255,255,.5)";}}


function checkAge() {
    var value = document.getElementById("age").value;
    console.log(value);
    var myRegExp = /^[0-9]{0,2}$/gm;
    var result = myRegExp.test(value);
    console.log(result);
    var age = document.getElementsByName("age");
    if (result == false){
        age[0].style.backgroundColor = "red";
    }
    else{
        age[0].style.backgroundColor = "rgba(255,255,255,.5)";}}


function myAjaxFunction(){
    alert("The AJAX was made.");
    document.getElementsByClassName("label").values = " ";}

function validate() {
    var email = document.getElementById("email").value;
    var result = checkEmail(email);
    console.log(email);
    console.log(result);
    if (result == true) {
        myAjaxFunction();}
    else{
        alert("The subscription could not be processed. Check your inputs.");}}
