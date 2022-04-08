var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
var clr = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var addon = document.createElement("div");
	var item = document.createElement("li");
	var removebutton = document.createElement("button");
	ul.appendChild(addon);
	item.appendChild(document.createTextNode(input.value));
	input.value = "";
	removebutton.classList.add("delete");
	removebutton.innerHTML = "Delete";
	addon.append(item, removebutton);
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function mark(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

function poof(e) {
	if (e.target.classList == "delete") {	
		e.target.parentNode.remove();
}
}

function edit(e) {
	mark(e);
	poof(e);
}

/*for (var i = 0; i < clr.length; i++) {
	clr[i].addEventListener("click", poof);
} Does not work with user created list items. Likely because clr.length changes. Assign mark and poof to a single function instead*/

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", edit);
