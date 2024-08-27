//
//

//

var boja = prompt("Unestie boju dugmeta").toLowerCase();

var dugme = document.getElementById("button");

if (boja == "crvena") {
	dugme.style.backgroundColor = "red";
} else if (boja == "plava") {
	dugme.style.backgroundColor = "blue";
} else {
	dugme.style.backgroundColor = "green";
}

//

var bojaTeksta = prompt("promenite boju teksta").toLowerCase();

if (bojaTeksta == "plava") {
	dugme.style.color = "blue";
}
