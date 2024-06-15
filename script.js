alert("Hello world!");

function changecolorcustom() {
	var inputbox = prompt("Type in a color in rgb\nExample: rgb(129, 161, 193) or #81a1c1");
	var button2 = document.getElementById("button2");
	button2.style.backgroundColor = inputbox;

}


function changecolor() {
	var button1 = document.getElementById("button1");
	if (button1.style.backgroundColor == 'rgb(129, 161, 193)') {
		button1.style.backgroundColor = '#ffffff';
	} else {
		button1.style.backgroundColor = '#81a1c1';
	}

	alert("You clicked on a button and changed its color!");
}
