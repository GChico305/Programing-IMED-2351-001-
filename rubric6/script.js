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

$(document).ready(function(){
    $("button").click(function(){
        var div = $("h4");  
        div.animate({right: '1000px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
});