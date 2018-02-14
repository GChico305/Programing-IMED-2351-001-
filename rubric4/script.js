// JavaScript Document
var myDemo = document.getElementById("demoparent");

console.log(myDemo.childNodes.length);


var myDemoTags = document.getElementsByTagName("li");
console.log ("Number of Links: "+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName ("li");
console.log ("Number of Li items in Menu: " + linksInMenu.length);

var myComments = document.getElementById("head");
myComments.setAttribute("align", "center");
myComments.setAttribute("style", "color: black");

var myComments = document.getElementById("geo");
myComments.setAttribute("align", "right");
myComments.setAttribute("style", "color: black");

var myComments = document.getElementById("title");
myComments.setAttribute("align", "left");
myComments.setAttribute("style", "color: #7f834e");

var newItem = document.createElement("li");
var newText = document.createTextNode("Coming Soon");
myDemo.appendChild(newItem);
newItem.appendChild(newText);