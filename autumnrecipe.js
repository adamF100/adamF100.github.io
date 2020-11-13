// Get the modal for Raspberry
var modal = document.getElementById("myModal");
 
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
 
// When the user clicks on the button, open the modal
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
 
 
// Get the modal for CORN
var modalcorn = document.getElementById("mycornModal");
 
// Get the button that opens the modal
var btncorn = document.getElementById("cornBtn");
 
// Get the <span> element that closes the modal
var spancorn = document.getElementsByClassName("closecorn")[0];
 
// When the user clicks on the button, open the modal
btncorn.onclick = function() {
 modalcorn.style.display = "block";
}
 
// When the user clicks on <span> (x), close the modal
spancorn.onclick = function() {
 modalcorn.style.display = "none";
}
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 if (event.target == modalcorn) {
   modalcorn.style.display = "none";
 }
 
}