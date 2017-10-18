window.addEventListener('deviceorientation', deviceorientation);

//--------------------------------------------------------------
function deviceorientation(event) 
{ 
	document.getElementById("id_alpha").innerHTML=event.alpha;
	document.getElementById("id_beta").innerHTML=event.beta;
	document.getElementById("id_gamma").innerHTML=event.gamma;
}
//--------------------------------------------------------------