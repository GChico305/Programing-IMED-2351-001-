// JavaScript Document
var home = document.getElementById("home");
var about = document.getElementById("about");
var contact = document.getElementById("contact");


home.addEventListener("click", picLink);
about.addEventListener("click", picLink);
contact.addEventListener("click", picLink);

function picLink() {
	var allDesc = document.querySelectorAll("p");
	
	for(var i = 0; i <allDesc.length; i++) {
		allDesc[i].className = "hide";
	}
	
	
	
	var descId = this.attributes["data-desc"].value;
	var desc = document.getElementById(descId);
	if (desc.className === "hide") {
		desc.className = "";
}	else {
	desc.className = "hide";
}	
}

var myComments = document.getElementById("geo");
myComments.setAttribute("align", "right");
myComments.setAttribute("style", "color: black");

var myComments = document.getElementById("geo2");
myComments.setAttribute("align", "right");
myComments.setAttribute("style", "color: black");