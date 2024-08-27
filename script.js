var godine = prompt("koliko godina imate?");

console.log(godine);

// ako ima preko 18 godina ispisati punoletni ste dobrodosli

if (godine >= 18) {
	alert("punoletni ste!");
}

///
var ime = prompt("Unesite vase ime");
ime = ime.toLowerCase();
console.log(ime);

if (ime == "toma") {
	alert("Dobrodosli!");
} else if (ime == "petar") {
	alert("Dobrodosao Petre!");
} else {
	alert("uneli ste nepostojece ime!");
}