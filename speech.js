//touchstart - eveniment ce se activeaza cand atingeam ecranul
document.getElementById("id_business_level_version").innerHTML = "Business level version: 2017.11.29.6"; 

document.addEventListener("touchstart", on_touch_start);

var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.onresult = on_speech_result;
recognition.onsoundend = on_sound_end;
var is_listening = false;
//vor rula doar cand iti returneaza google cuvintele recunoscute

function on_touch_start(e)
{
	if(!is_listening) {
		recognition.start();
		is_listening = true;
	}
}

function on_speech_result(e)
{
	var alternatives = e.results[0];
	for (var i = 0; i < alternatives.length; i++)
	document.getElementById("id_p").innerHTML += alternatives[i].transcript + "("+alternatives[i].confidence+")"+"<br>";
	
}

function on_sound_end(e)
{
	recognition.stop();
	is_listening = false;
}
