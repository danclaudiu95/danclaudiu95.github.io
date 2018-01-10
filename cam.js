var d = new Date("July 21, 1983 01:15:00");
var n = d.getDate();

document.getElementById("id_logic_level_version").innerHTML = 
	"Business level version: "
	+d.getFullYear() +"." +d.getMonth() + "1"+"." +d.getDate() +"1"+".2"; 

//pentru accesul webcamerei:
var constraints = {audio:true, video: {facingMode:"environment"};	
navigator.mediaDevices.getUserMedia(constraints).then(on_success).catch(on_error);

var video = document.getElementById("id_video");
//---------------------------------------------------
function on_success(stream)
{
	video.srcObject = stream;
}
//---------------------------------------------------
function on_error(error)
{
	alert("Error")
}
//---------------------------------------------------

