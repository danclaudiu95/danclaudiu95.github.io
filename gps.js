document.getElementById("id_business_level_version").innerHTML = "Business level version: 2017.12.06.1"; 
// fara () se apeleaza doar pointer la functie
navigator.geolocation.getCurrentPosition(on_gps_success, on_gps_error);

//--------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "lat= " +p.coords.latitude+"<br> long = "+p.coords.longitude+" <br>accuracy = "+p.coords.accuracy+ "m"+"<br>altitude = "+p.coords.altitude + "m";;
}
//--------------------------------

function on_gps_error(e)
{
	alert(e.code);
}
//--------------------------------