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


