// selecteer de fieldset die we aan en uit willen zetten
var fieldset = document.getElementById('project');
var fieldset2 = document.getElementById('stage');

// hide deze fieldset
fieldset.classList.add('is-invisible');
fieldset2.classList.add('is-invisible');

// select first radio button you can find
document.querySelector('input[value="1"]').onclick = function() {
	fieldset.classList.add('is-visible');
	fieldset2.classList.remove('is-visible');
	console.log(fieldset);
	console.log(fieldset2);
}

// select last radio button you can find
document.querySelector('input[value="2"]:last-of-type').onclick = function() {
	fieldset.classList.remove('is-visible');
	fieldset2.classList.add('is-visible');
}

//geluiden voor knopjes;

var button = document.querySelectorAll('button');

var buttonSound = new Audio('button.wav');

for (var i=0; i<button.length; i=i+2){
	button[i].addEventListener("click", function(e){
	            buttonSound.play();
	            console.log("hoi");
	            e.preventDefault();
	});
}

button[1].addEventListener("click", function(){
	            buttonSound.play();
	            console.log("hoi");
	            
	});