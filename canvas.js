document.getElementById("id_logic_level_version").innerHTML="Logic level version 2017.11.01.2";

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

context.beginPath();
var w = canvas.getAttribute("width");
var h = canvas.getAttribute("height");

context.arc(w/2, h/2, 10, 0, 2* Math.PI);
/* context.moveTo(10,10);
context.lineTo(100,200);
context.lineTo(200,100);
context.closePath(); */
context.stroke();