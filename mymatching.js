//Standard drag and drop functions
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function reset(){
    var container = document.getElementById("entireBody");
    container.innerHTML= html; //Replacing whatever the current HTML body is with the original html body.
}                
var html;
window.onload = function(){
	html = document.getElementById('entireBody').innerHTML; //Storing the original HTML body.
};  

function submit(){ //Function that checks if the puzzle is right. 

	const images = document.querySelectorAll('img'); //Creates an index of all of the images.
	let correct = true; //Variable to check against.

	images.forEach((image, index) => { //Loop 
	  const currentPosition = index + 1; //The order the player has drag the images in will determine it's current position. +1 to account for arrays starting with 0.
	  const correctPosition = parseInt(image.dataset.position); //Takes the image data I assigned and changes it to a number, so it can be compared.
	  
	  if (currentPosition !== correctPosition) { 
		correct = false; //If at anytime the two numbers don't match, it'll return a false and out put a Try again.
		document.getElementById("test").innerHTML = "That's not right. Try again! ";
		return;
	  }
	});

	if (correct) { //If it stays true all the way through the loop, it outputs this.
	  document.getElementById("test").innerHTML = "That's correct! Helping Mom is quite the <b>achievement</b>. Enter the word <b>achievement</b> in the answer box to move forward!";
	  
	}
}