// JavaScript Document

 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$('#blurmeone').mouseenter(function(){
	$(this).fadeTo("slow", .2);
		});
$('#blurmeone').mouseleave(function(){
	$(this).fadeTo("slow", 1.0);
		});

$('#blurmetwo').mouseenter(function(){
	$(this).fadeTo("slow", .2);
		});
$('#blurmetwo').mouseleave(function(){
	$(this).fadeTo("slow", 1.0);
		});

$('#blurmethree').mouseenter(function(){
	$(this).fadeTo("slow", .2);
		});
$('#blurmethree').mouseleave(function(){
	$(this).fadeTo("slow", 1.0);
		});


var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}




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


var messages = new Array(6); 
messages[0] = "";
messages[1] = "Geo has visited Peru, Jamaica, Venezuela, Mexico, Puerto Rico, Costa Rica, Argentina, Chile, Colombia, Honduras, Belize,  ";
messages[2] = "Geo only goes shopping when he has no other choice... For the most part Geo shops online and ships back whatever doesn't fit him, or whatever he doesn't like.";	   
messages[3] = "Geo loves to eat food from different nationalities. One of his to do lists when ever he visits a country, is to eat the most typical dishes from each country.";
messages[4] = "Geo loves animals and have a few of his own. He's always had pets throughout his life, and he considers them family. Right now he currently has 2 dogs which names are Max and Holly.";
messages[5] = "Geo's three top drinks are coffee, water and liquor. Geo can't seem to remember whats his favorite coffee drink, but his husband usually orders for him. He also loves his Mojitos, Barcardi Limon and to take shots while partying. However, he alwas makes sure to hydrate with lots of water.";
function messageReveal() {
var messageindex = document.messageForm.messagePick.selectedIndex
document.messageForm.messageField.value = messages[messageindex];
}



var myComments = document.getElementById("geo");
myComments.setAttribute("align", "right");
myComments.setAttribute("style", "color: black");

var myComments = document.getElementById("geo2");
myComments.setAttribute("align", "right");
myComments.setAttribute("style", "color: black");

var myComments = document.getElementById("geo3");
myComments.setAttribute("align", "right");
myComments.setAttribute("style", "color: black");

var myComments = document.getElementById("geo4");
myComments.setAttribute("align", "right");
myComments.setAttribute("style", "color: black");