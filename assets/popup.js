$(document).ready(function() { 

// console.log($("div > h3").html());
// console.log(document.querySelectorAll("div > h3").innerHTML);
// console.log("does it work?");

// document.querySelectorAll("div > h3").innerHTML += 'document.querySelectorAll("div > h3")';
// Get the modal

var i = 1;
var j;
var text = "#slide-";
var textoOnPage = text + i;
//element = document.getElementById(textoOnPage).firstElementChild.firstElementChild;
element= $(textoOnPage).first().first();

while(element!=undefined){
  element.innerHTML += '<br> <button class="myBTN" >more details</button>';
  i++;
  var textoOnPage = text + i;
  //element = document.getElementById(textoOnPage).first().first(); //.firstElementChild //.firstElementChild;//.children[0];
  element= $(textoOnPage).first().first();
}

console.log("passed after while()");
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBTN");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// var buttons = document.getElementsByTagName('button');
// for (var i = 0, len = buttons.length; i < len; i++) {
//     buttons[i].onclick = function (){
//         //myFunction (this);
//         modal.style.display = "block";
//     }
// }

// var btns = document.getElementsByClassName("myBTN");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function () {
// 			    modal.style.display = "block";
//         });
//     }


// When the user clicks the button, open the modal 
btn.onclick = function() {
  
  modal.style.display = "block";
  
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


});