var canvas,ctx,width,height,alpha,beta,gamma,foc=false,razaGlont;
window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("touchstart",on_touch_start); 
function init(){	
	canvas = document.getElementById("canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');	      
	nava.x = width/2;
	nava.y = height/2;
	setInterval(function(){		
	actualizareJoc(0.01);
	contextJoc();			
	},10);
	
}
function actualizareJoc(context){
	racheta.update(context);
	meteorit.update(context);
	nava.update(context,beta,gamma);
}
function contextJoc(){
	nava.render(ctx);
	racheta.render(ctx);
	meteorit.render(ctx);
}
function on_device_orientation(evt){
     alpha=evt.alpha;
	 beta=evt.beta;
	 gamma=evt.gamma;
     document.getElementById("a").innerHTML ="Alpha="+Math.round(alpha).toString();
     document.getElementById("b").innerHTML = "Beta="+Math.round(beta).toString();
     document.getElementById("c").innerHTML = "Gamma="+Math.round(gamma).toString();
      
}
function on_touch_start(evt){ 
 foc=true; 
 razaGlont=nava.unghiRaza;
 
}