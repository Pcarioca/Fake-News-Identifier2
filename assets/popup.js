$(document).ready(function() { 

// console.log($("div > h3").html());
// console.log(document.querySelectorAll("div > h3").innerHTML);
// console.log("does it work?");

// document.querySelectorAll("div > h3").innerHTML += 'document.querySelectorAll("div > h3")';
// Get the modal

var i = 1;
var j;
var text = "slide-";
var textoOnPage = text + i;
element = document.getElementById(textoOnPage);
var aux = "";
while(element!=undefined){
  element.innerHTML += '<button id="myBtn" class="myBTN">Open Modal</button>';
  i++;
  var textoOnPage = text + i;
  element = document.getElementById(textoOnPage);
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBTN")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  
  modal.style.display = "block";
  
}
// for(j=1;j<=i;i++){
//   document.getElementsByClassName("myBTN")[j].onclick = function() {
  
//     modal.style.display = "block";
    
//   }
// }
// for(j=1;j<=i;i++){
//   btn[i].addEventListener('click', () => {
//     modal.style.display = "block";
//   });
// }

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