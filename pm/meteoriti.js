var meteorit = new Meteorit();
var pozaMeteorit=new Image();
pozaMeteorit.src="meteorit.png";
function Meteorit(){	
	this.nrMeteoriti = [];
	this.idMeteorit = 0;
	
	this.init = function(meteorit){
		meteorit.vx = meteorit.v * Math.cos(meteorit.unghiRaza);
		meteorit.vy = meteorit.v * Math.sin(meteorit.unghiRaza);
		meteorit.miscareMeteorit = -1;
		meteorit.aliniere = 1;
		meteorit.meteorit1 = 0;
		meteorit.meteorit2 = 1;
	}
	
	this.push = function(meteorit){
		this.init(meteorit);
		var i = -1;
		while(this.nrMeteoriti[++i] != undefined);
		this.nrMeteoriti[i] = meteorit;
		if(this.idMeteorit < i) this.idMeteorit = i;
	};
	this.getSize = function(){
		var dimensune = 0;
		for(var i = 0;i < this.idMeteorit;i++){
			if(this.nrMeteoriti[i] == undefined) continue;
			dimensune++;
		}
		return dimensune;
	};	
	this.update = function(dt){
		for(var i = 0;i < this.idMeteorit;i++){
			if(this.nrMeteoriti[i] == undefined) continue;
			var met1 = this.nrMeteoriti[i];			
			met1.x += met1.vx * dt;
			met1.y += met1.vy * dt;
			
			if(met1.meteorit1 != met1.meteorit2){
				met1.meteorit1 += (met1.meteorit2 - met1.meteorit1)/10
			}
			
			if(met1.meteorit1 > 0.1){
				var info = racheta.getMinInfo(met1);
				
				if(info.dist <= met1.dimensune * met1.aliniere){     
					info.object.remove = true;
					if(met1.miscareMeteorit == -1)
						met1.miscareMeteorit = 0;
				}
			}
			if(met1.miscareMeteorit != -1){
				met1.miscareMeteorit += dt;
				if(met1.miscareMeteorit >= 1){
					delete this.nrMeteoriti[i];
					continue;
				}
			}
			

			if(
				met1.x < 0 || met1.y < 0 ||
				met1.x > width || met1.y > height
				)
			delete this.nrMeteoriti[i];
		}
		
		if(this.getSize() < 2){
			this.push({
				x:Math.random()*width,
				y:Math.random()*height,
				v:5,
				unghiRaza:Math.random()*2*Math.PI,
				dimensune:25,
				color:{
					r:Math.random(),
					g:Math.random(),
					b:Math.random(),
				}
			});
		}
		
		
	};
	this.render = function(ctx){
		for(var i = 0;i < this.idMeteorit;i++){
			if(this.nrMeteoriti[i] == undefined) continue;
			
			var met1 = this. nrMeteoriti[i];
			
			met1.aliniere = 1;
			if(met1.miscareMeteorit != -1){
				met1.meteorit1 = 1 - met1.miscareMeteorit*1.5;
				if(met1.meteorit1 < 0)met1.meteorit1 = 0;
				met1.aliniere = 1 + 2 * met1.miscareMeteorit;
				met1.meteorit2 = met1.meteorit1;
			}
			ctx.fillStyle = utils.getARGBString(
				met1.meteorit1,
				met1.color.r,
				met1.color.g,
				met1.color.b
			);

                         ctx.save();
         
		ctx.translate(met1.x, met1.y);
        ctx.rotate(Math.PI/180 * (met1.aliniere*50));
		ctx.drawImage(pozaMeteorit, -(pozaMeteorit.width/2), -(pozaMeteorit.height/2));   
		ctx.restore();
		}
	};
	
	
	
	
	
}