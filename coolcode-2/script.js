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




	   
var messages = new Array(6); 
messages[0] = "";
messages[1] = "Geo has visited 10 countries";
messages[2] = "Geo hates shopping";	   
messages[3] = "Geo loves to eat food from different nationalities";
messages[4] = "Geo loves dogs and he has two of his own";
messages[5] = "Geo's three top drinks are coffee, water and liquor";
function messageReveal() {
var messageindex = document.messageForm.messagePick.selectedIndex
document.messageForm.messageField.value = messages[messageindex];
}
