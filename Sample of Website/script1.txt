document.getElementById("parent").innerHTML=("Something Else");
// document.getElementById("parent").style.backgroundColor=("red");
// document.getElementById("parent").style.color=("white");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center")

document.getElementsByClassName("exercise")[0].innerHTML=("I am Jenny Rajak");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 23 Years old");

document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transform:uppercase");

document.querySelector("h2").innerHTML=("I am sneha");
document.querySelector("#hi").innerHTML=("I am yugeen");
document.querySelector(".hey").innerHTML=("I am reason");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
   change[i].innerHTML=("I am prashant");
}

// function myFunction(){
//     document.open();
//     document.write("<h1>Hello World</h1>");
//     document.close();
// }

function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow. document.write("<h1>Hello World</h1>");
    myWindow.document.close();
}