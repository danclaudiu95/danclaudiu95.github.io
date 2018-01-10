document.addEventListener("touchstart", start_timer);
document.addEventListener("touchend", stop_timer);
var timer_id;
//-------------------------------------------------
function start_timer()
{
	timer_id = setInterval(vibrate, 300);
}
//-------------------------------------------------
function stop_timer()
{
	clearInterval(vibrate, 300);
}
//-------------------------------------------------
function vibrate()
{
	windows.navigator.vibrate(300);
}
//-------------------------------------------------