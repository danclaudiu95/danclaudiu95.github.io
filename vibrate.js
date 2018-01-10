document.addEventListener("touchstart", vibrate);

function vibrate()
{
	windows.navigator.vibrate(200);
}