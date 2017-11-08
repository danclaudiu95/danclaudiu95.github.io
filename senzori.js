document.getElementById("id_logic_level_version").innerHTML="Business level version 2017.11.01.7";
window.addEventListener('deviceorientation', ondeviceorientation);
window.addEventListener('devicemotion', ondevicemotion);
//-------------------------------------------------------
 function ondeviceorientation(event) {
	document.getElementById("id_alpha").innerHTML = " Alpha = " + Math.round(event.alpha * 10) / 10;
	document.getElementById("id_beta").innerHTML = " Beta = " + Math.round(event.beta * 10) / 10; 
	//beta si gama: inclinarea telefonului
	//alfa-rotatia
	document.getElementById("id_gamma").innerHTML = " Gamma = " + Math.round(event.gamma * 10) / 10;
	 
}
//-------------------------------------------------------
function deseneaza_patrat_canvas(alfa, gamma, beta)
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");

	context.beginPath();
	var w = canvas.getAttribute("width");
	var h = canvas.getAttribute("height");
	
	context.clearRect(0,0, w, h);
	var centru=(x : w /2, y : h /2);
	var latura = 10;
	var max_deplasare_x = w / 2 - raza; 
	var max_deplasare_y = h / 2 - raza;
	var centru_patrat = (x: centru.x + gamma / 90 * max_deplasare_x, y: centru.y + beta / 90 * max_deplasare_y);
	context.translate(centru_patrat.x,centru_patrat.y);
	context.rotate(alpha / 180 * Math.PI);
	//gamma == 0 -> centru.x
	//gamma == -90 -> 0 + raza
	//gamma = 90 -> w - raza;
	//context.arc(centru.x + gamma / 90 * max_deplasare_x, centru.y + beta / 90 * max_deplasare_y, 10, 0, 2* Math.PI);
	context.strokeRect(- latura / 2 , -latura / 2, latura, latura);
	context.stroke();
}

//-------------------------------------------------------
function deseneaza_cerc_canvas(gamma,beta)
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");

	context.beginPath();
	var w = canvas.getAttribute("width");
	var h = canvas.getAttribute("height");
	
	context.clearRect(0,0, w, h);
	var centru=(x : w /2, y : h /2);
	var raza = 10;
	var max_deplasare_x = w / 2 - raza; 
	var max_deplasare_y = h / 2 - raza;
	//gamma == 0 -> centru.x
	//gamma == -90 -> 0 + raza
	//gamma = 90 -> w - raza;
	context.arc(centru.x + gamma / 90 * max_deplasare_x, centru.y + beta / 90 * max_deplasare_y, 10, 0, 2* Math.PI);
	
	context.stroke();
}

//-------------------------------------------------------
function deseneaza_cerc_svg(gamma,beta)
{
	var svg = document.getElementById("id_svg");
	var w = svg.getAttribute("width");
	var h = svg.getAttribute("height");
	
	var cerc = document.getElementById("id_circle");
	
	var centru=(x : w /2, y : h /2);
	var raza = cerc.getAttribute("r");
	var max_deplasare_x = w / 2 - raza; 
	var max_deplasare_y = h / 2 - raza;
	
	cerc.setAttribute("cx", centru.x + gamma / 90 * max_deplasare_x);
	cerc.setAttribute("cy", centru.y + beta / 90 * max_deplasare_y);
}

//-------------------------------------------------------
function ondevicemotion(event)
{
	//deseneaza_cerc_canvas(gamma,beta);
	//deseneaza_cerc_svg(gamma,beta);
	deseneaza_patrat_canvas(alfa, gamma, beta);
	document.getElementById("id_acc").innerHTML = "Acc = " + Math.round(event.acceleration.x * 10) / 10 + " " + Math.round(event.acceleration.y * 10) / 10 + " " + Math.round(event.acceleration.z * 10) / 10;
	
	var ag = event.accelerationIncludingGravity;
	var gamma = -Math.atan(ag.x / ag.z) * 180 / Math.PI;
	var beta = Math.atan(ag.y / ag.z) * 180 / Math.PI;
	
	document.getElementById("id_acc_g").innerHTML ="Acc_g = " + Math.round(ag.x * 10) / 10 + " " + Math.round(ag.y * 10) / 10 + " " + Math.round(ag.z * 10) / 10 + "Gama = " + Math.round(gamma * 10) / 10 + " Beta = " + Math.round(beta * 10) / 10;		
}