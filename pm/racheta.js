var racheta = new Racheta();
var pozaGlont=new Image();
pozaGlont.src="racheta.png";
function Racheta(){
	this.rachete = [];
	this.maxID = 0;
	
	this.init = function(corpRacheta){
		corpRacheta.vx = corpRacheta.v * Math.cos(corpRacheta.unghiRaza);
		corpRacheta.vy = corpRacheta.v * Math.sin(corpRacheta.unghiRaza);
	}
	this.push = function(corpRacheta){
		
		this.init(corpRacheta);
		var id = -1;	
		while(this.rachete[++id] != undefined);
		this.rachete[id] = corpRacheta;
		if(id > this.maxID) this.maxID = id;		
	};
	
	this.update = function(dt){
		for(var i = 0;i <= this.maxID;i++){
			if(this.rachete[i] == undefined) continue;
			
			var r1 = this.rachete[i];
			
			r1.x += r1.vx * dt;
			r1.y += r1.vy * dt;
		
			if(
				r1.x < 0 || r1.y < 0 ||
				r1.x > width || r1.y > height ||
				r1.remove)
			delete this.rachete[i];
			
		}
	}
	
	this.render = function(ctx){
		ctx.fillStyle = "#f92030";
		for(var i = 0;i < this.maxID;i++){
			if(this.rachete[i] == undefined) continue;
			
			var r1 = this.rachete[i];
			ctx.beginPath();
			ctx.arc(r1.x,r1.y,10,0,300);
			ctx.fill();
            
         ctx.save();
         
	ctx.translate(r1.x, r1.y);
        ctx.rotate(Math.PI/180 * (razaGlont*50));
	ctx.drawImage(pozaGlont, -(pozaGlont.width/2), -(pozaGlont.height/2));   
	ctx.restore();
		}
	};
	
	this.getSize = function(){
		var dimensiune = 0;
		for(var i = 0;i <= this.maxID;i++){
			if(this.rachete[i] == undefined) continue;
			dimensiune++;
		}
		return dimensiune;
	};
	
	this.getMinInfo = function(o){
		var dist = 99999;
		var r1;
		for(var i = 0;i <= this.maxID;i++){
			if(this.rachete[i] == undefined) continue;
			var d = Math.sqrt(
				(o.x - this.rachete[i].x)*(o.x - this.rachete[i].x)+
				(o.y - this.rachete[i].y)*(o.y - this.rachete[i].y)
			);
			if(d < dist){
				dist = d;
				r1 = this.rachete[i];
			}
		}
		return {dist:dist,object:r1};
	};
	
}

