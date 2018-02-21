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

function myFunction() {
    document.getElementById("demo").innerHTML = " ";
}

function myFunction() {
    alert("This class is making Geo want to eat cookies");
}

document.getElementById("jsLocation").innerHTML = 
"The full URL of this page is:<br>" + window.location.href;


function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}





// this code puts creates a cookie or changes a cookie.  Use this AS...no need to change it.



function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}



//deal with the information inside of the cookie...This you will need to alter

function checkCookie()
{
var username=getCookie("test3");
if (username!=null && username!="")
  {
  alert("Welcome again " + username);
  }
else
  {
  username=prompt("Please enter your name:","");
  if (username!=null && username!="")
    {
    setCookie("test3",username,30);
    }
  }
}

//Delete cookie

function removeCookie() {
    setCookie("test3","",-1);
}


