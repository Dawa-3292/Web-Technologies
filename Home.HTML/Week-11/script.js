document.getElementById("parent").innerHTML=("Hello World");
document.getElementById("parent").style.cssText=("background-color:black;color:red");
document.getElementsByClassName("exercise")[0].innerHTML=("Dawa Tamang");
document.getElementsByClassName("parent1")[0].style.cssText=("text-transform:uppercase;");
document.getElementsByTagName("h3")[2].innerHTML=("Hi! I am changed.");
document.querySelector("#heading").style.cssText=("background:red;color:black;");
document.querySelector("#heading1").style.cssText=("background:red;color:white;");
const change = document.querySelectorAll("h2");
for (i=0;i<change.length;i++){
    change[i].innerHTML=("I am bold");
}