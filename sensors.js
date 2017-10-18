window.addEventListener('deviceorientation', ondeviceorientation);

//--------------------------------------------------------------
function ondeviceorientation(event) 
{ 
	document.getElementById("id_alpha").innerHTML='Plan orizontal - stanga-dreapta'+Math.round(event.alpha * 100) / 100;
	document.getElementById("id_beta").innerHTML='Plan vertical - inainte si inapoi'+Math.round(event.beta * 100) / 100;
	document.getElementById("id_gamma").innerHTML='Plan vertical - stanga-dreapta-'+Math.round(event.gamma * 100) / 100;
}
//--------------------------------------------------------------