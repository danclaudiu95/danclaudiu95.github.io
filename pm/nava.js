var nava = new NavaSpatiala();
var pozaNava=new Image();
pozaNava.src="millennium_falcon.png";
function NavaSpatiala(){
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.v = 0;
	this.unghiRaza = 0;
	this.timpLansare = 0;
	
	
	this.stareNava = {vitezaMaxima:100,dunghiRaza:0.03,acceleratie:10,incetinireNava:100};
	
	this.update = function(dt,beta,gamma){
                this.unghiRaza =gamma/Math.PI;
		var mergeFata=false;
                var mergeSpate=false;
                var directie=beta;
		if(directie<=0){
		this.v += this.stareNava.acceleratie;
		if(this.v > this.stareNava.vitezaMaxima)
			this.v = this.stareNava.vitezaMaxima;
                    mergeFata=true;
		}
		if(directie>=0){
			this.v -= this.stareNava.acceleratie;
			if(this.v < -this.stareNava.vitezaMaxima)
				this.v = -this.stareNava.vitezaMaxima;
                            mergeSpate=true;
		}
        if(mergeFata==true || mergeSpate==true){
	    this.v *= 0.99;
		this.vx = this.v * Math.cos(this.unghiRaza);
		this.vy = this.v * Math.sin(this.unghiRaza);		
		this.x += this.vx * dt;
		this.y += this.vy * dt;          
        }              
        var timp = utils.getTime();
		if(foc==true && timp - this.timpLansare >= this.stareNava.incetinireNava){
			racheta.push({
				x:this.x,
				y:this.y,
				unghiRaza:this.unghiRaza,
				v:250
			});
			this.timpLansare = timp;
                        foc=false;
		}
		
	};
	
	this.render = function(ctx){	
          ctx.clearRect(0, 0, 800, 800);      
         ctx.save();
         var lungime = 25;
	ctx.translate(this.x, this.y);
	ctx.rotate(Math.PI/180 * (this.unghiRaza*50));
	ctx.drawImage(pozaNava, -(pozaNava.width/2), -(pozaNava.height/2));   
	ctx.restore();
                
                
                
	};
	
}