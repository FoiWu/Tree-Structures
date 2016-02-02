//Hide button.
$(document).ready(function(){
	$("#llRotation").click(function(){
		$("#llRotation").hide().delay(2200).show(0);
	});
	$("#rrRotation").click(function(){
		$("#rrRotation").hide().delay(2200).show(0);
	});
	$("#lrRotation").click(function(){
		$("#lrRotation").hide().delay(4200).show(0);
	});
	$("#rlRotation").click(function(){
		$("#rlRotation").hide().delay(4200).show(0);
	});
});

//Reset animation of tip of rotate tree.
var llAni, rrAni, lrAni, rlAni;

var resetAnimation = function(){
	this.LL = function(){
		var c=document.getElementById("llCanvas");
		var ctx=c.getContext("2d");
		var x1=120, y1=30, x2=70, y2= 80, x3=20, y3=130;
		var mx1=127, my1=30, mx2=70, my2=87; 
		var lx1=70, ly1=75, lx2=20, ly2=123;
		
		llAni = setInterval(function(){
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.fillStyle="#4400B3";
			
			ctx.font="16px Georgia";
			ctx.fillText("Single right rotation",60,160);
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx1,my1);
			ctx.lineTo(lx1,ly1);
			ctx.stroke();
			mx1 += 5;  my1 += 6;
			lx1 += 5;  ly1 -= 5;
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx2,my2);
			ctx.lineTo(lx2,ly2);
			ctx.stroke();
			mx2 += 5;  my2 -= 6;
			lx2 += 5;  ly2 -= 5;
			
			ctx.beginPath();
			ctx.arc(x1,y1,14,0,2*Math.PI);
			ctx.fill();
			x1 += 5;  y1 += 6;
			
			ctx.beginPath();
			ctx.arc(x2,y2,14,0,2*Math.PI);
			ctx.fill();
			x2 += 5;  y2 -= 5;
			
			ctx.beginPath();
			ctx.arc(x3,y3,14,0,2*Math.PI);
			ctx.fill();
			x3 += 5;  y3 -= 5;
			if(x3==70){clearInterval(llAni);}
		}, 170);
		
		$("#playLL").hide().delay(2000).show(0);	
	}
	
	//Animation of RR rotation.
	this.RR = function(){
		var c=document.getElementById("rrCanvas");
		var ctx=c.getContext("2d");
		var x1=120, y1=30, x2=170, y2= 80, x3=220, y3=130;
		var mx1=113, my1=30, mx2=163, my2=80; 
		var lx1=180, ly1=82, lx2=210, ly2=132;
		
		rrAni = setInterval(function(){
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.fillStyle="#4400B3";
			
			ctx.font="16px Georgia";
			ctx.fillText("Single left rotation",60,160);
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx1,my1);
			ctx.lineTo(lx1,ly1);
			ctx.stroke();
			mx1 -= 5;  my1 += 5;
			lx1 -= 5;  ly1 -= 5;
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx2,my2);
			ctx.lineTo(lx2,ly2);
			ctx.stroke();
			mx2 -= 5;  my2 -= 5;
			lx2 -= 5;  ly2 -= 5;
			
			ctx.beginPath();
			ctx.arc(x1,y1,14,0,2*Math.PI);
			ctx.fill();
			x1 -= 5;  y1 += 5;
			
			ctx.beginPath();
			ctx.arc(x2,y2,14,0,2*Math.PI);
			ctx.fill();
			x2 -= 5;  y2 -= 4;
			
			ctx.beginPath();
			ctx.arc(x3,y3,14,0,2*Math.PI);
			ctx.fill();
			x3 -= 5;  y3 -= 4;
			
			if(x3==160){clearInterval(rrAni);}
		}, 170);
		
		$("#playRR").hide().delay(2000).show(0);		
	}
	
	this.LR = function(){
		var c=document.getElementById("lrCanvas");
		var ctx=c.getContext("2d");
		var x1=120, y1=30, x2=60, y2= 90, x3=120, y3=130;
		var mx1=127, my1=30, mx2=70, my2=87; 
		var lx1=75, ly1=75, lx2=120, ly2=123;
		
		lrAni = setInterval(function(){
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.fillStyle="#4400B3";
			
			ctx.font="16px Georgia";
			ctx.fillText("Double left right rotation",50,160);
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx1,my1);
			ctx.lineTo(lx1,ly1);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx2,my2);
			ctx.lineTo(lx2,ly2);
			ctx.stroke();
			mx2 -= 5;  my2 += 4;
			lx2 -= 5;  ly2 -= 4;
			
			ctx.beginPath();
			ctx.arc(x1,y1,14,0,2*Math.PI);
			ctx.fill();
			
			ctx.beginPath();
			ctx.arc(x2,y2,14,0,2*Math.PI);
			ctx.fill();
			x2 -= 4;  y2 += 5;
			
			ctx.beginPath();
			ctx.arc(x3,y3,14,0,2*Math.PI);
			ctx.fill();
			x3 -= 5;  y3 -= 5;
			
			if(x3==70){clearInterval(lrAni);}
		}, 170);
		
			setTimeout(function(){
				c=document.getElementById("lrCanvas");
				ctx=c.getContext("2d");
				x1=120, y1=30, x2=20, y2= 130, x3=70, y3=80;
				mx1=127, my1=30, mx2=70, my2=87; 
				lx1=70, ly1=75, lx2=20, ly2=123;
				
				lrAni = setInterval(function(){
					ctx.clearRect(0, 0, c.width, c.height);
					ctx.fillStyle="#4400B3";
					
					ctx.font="16px Georgia";
					ctx.fillText("Double left right rotation",50,160);
			
					ctx.beginPath();
					ctx.lineWidth=2;
					ctx.moveTo(mx1,my1);
					ctx.lineTo(lx1,ly1);
					ctx.stroke();
					mx1 += 5;  my1 += 6;
					lx1 += 5;  ly1 -= 5;
					
					ctx.beginPath();
					ctx.lineWidth=2;
					ctx.moveTo(mx2,my2);
					ctx.lineTo(lx2,ly2);
					ctx.stroke();
					mx2 += 5;  my2 -= 6;
					lx2 += 5;  ly2 -= 5;
					
					ctx.beginPath();
					ctx.arc(x1,y1,14,0,2*Math.PI);
					ctx.fill();
					x1 += 5;  y1 += 6;
					
					ctx.beginPath();
					ctx.arc(x2,y2,14,0,2*Math.PI);
					ctx.fill();
					x2 += 5;  y2 -= 5;
					
					ctx.beginPath();
					ctx.arc(x3,y3,14,0,2*Math.PI);
					ctx.fill();
					x3 += 5;  y3 -= 5;
					
					if(x2==70){clearInterval(lrAni);}
				}, 170);
						
			}, 2300);
		
		$("#playLR").hide().delay(4400).show(0);	
	}
	
	this.RL = function(){
		var c=document.getElementById("rlCanvas");
		var ctx=c.getContext("2d");
		var x1=120, y1=30, x2=170, y2= 80, x3=120, y3=130;
		var mx1=127, my1=30, mx2=170, my2=80; 
		var lx1=170, ly1=75, lx2=120, ly2=130;
		
		rlAni = setInterval(function(){
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.fillStyle="#4400B3";
			
			ctx.font="16px Georgia";
			ctx.fillText("Double right left rotation",50,160);
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx1,my1);
			ctx.lineTo(lx1,ly1);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.lineWidth=2;
			ctx.moveTo(mx2,my2);
			ctx.lineTo(lx2,ly2);
			ctx.stroke();
			mx2 += 5;  my2 += 5;
			lx2 += 5;  ly2 -= 5;
			
			ctx.beginPath();
			ctx.arc(x1,y1,14,0,2*Math.PI);
			ctx.fill();
			
			ctx.beginPath();
			ctx.arc(x2,y2,14,0,2*Math.PI);
			ctx.fill();
			x2 += 5;  y2 += 5;
			
			ctx.beginPath();
			ctx.arc(x3,y3,14,0,2*Math.PI);
			ctx.fill();
			x3 += 6;  y3 -= 5;
			
			if(x3==180){clearInterval(rlAni);}
		}, 170);
		
		setTimeout(function(){
			c=document.getElementById("rlCanvas");
			ctx=c.getContext("2d");
			x1=120, y1=30, x2=170, y2= 80, x3=220, y3=130;
			mx1=127, my1=30, mx2=170, my2=80; 
			lx1=170, ly1=80, lx2=220, ly2=130;
			
			rlAni = setInterval(function(){
				ctx.clearRect(0, 0, c.width, c.height);
				ctx.fillStyle="#4400B3";
				
				ctx.font="16px Georgia";
				ctx.fillText("Double right left rotation",50,160);
			
				ctx.beginPath();
				ctx.lineWidth=2;
				ctx.moveTo(mx1,my1);
				ctx.lineTo(lx1,ly1);
				ctx.stroke();
				mx1 -= 5;  my1 += 5;
				lx1 -= 5;  ly1 -= 5;
				
				ctx.beginPath();
				ctx.lineWidth=2;
				ctx.moveTo(mx2,my2);
				ctx.lineTo(lx2,ly2);
				ctx.stroke();
				mx2 -= 5;  my2 -= 5;
				lx2 -= 5;  ly2 -= 5;
				
				ctx.beginPath();
				ctx.arc(x1,y1,14,0,2*Math.PI);
				ctx.fill();
				x1 -= 5;  y1 += 6;
				
				ctx.beginPath();
				ctx.arc(x2,y2,14,0,2*Math.PI);
				ctx.fill();
				x2 -= 5;  y2 -= 5;
				
				ctx.beginPath();
				ctx.arc(x3,y3,14,0,2*Math.PI);
				ctx.fill();
				x3 -= 5;  y3 -= 5;
				
				if(x3==170){clearInterval(rlAni);}
			}, 170);
					
		}, 2300);
		
		$("#playRL").hide().delay(4400).show(0);	
	}
}

var unbalance4Case = function(){
	this.LL = function(){
		var c=document.getElementById("ll");
		var ctx=c.getContext("2d");
		var x1=120, y1=30, x2=70, y2= 80, x3=20, y3=130;
		var mx1=127, my1=30, mx2=70, my2=87; 
		var lx1=70, ly1=75, lx2=20, ly2=123;
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle="#4474B3";
		
		ctx.font="20px Georgia";
		ctx.fillText("LL",10,30);
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx1,my1);
		ctx.lineTo(lx1,ly1);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx2,my2);
		ctx.lineTo(lx2,ly2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(x1,y1,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x2,y2,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x3,y3,14,0,2*Math.PI);
		ctx.fill();
	}
	
	//Animation of RR rotation.
	this.RR = function(){
		var c=document.getElementById("rr");
		var ctx=c.getContext("2d");
		var x1=80, y1=30, x2=130, y2= 80, x3=180, y3=130;
		var mx1=73, my1=30, mx2=123, my2=80; 
		var lx1=140, ly1=82, lx2=180, ly2=132;
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle="#4474B3";
		
		ctx.font="20px Georgia";
		ctx.fillText("RR",10,30);
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx1,my1);
		ctx.lineTo(lx1,ly1);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx2,my2);
		ctx.lineTo(lx2,ly2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(x1,y1,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x2,y2,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x3,y3,14,0,2*Math.PI);
		ctx.fill();	
	}
	
	this.LR = function(){
		var c=document.getElementById("lr");
		var ctx=c.getContext("2d");
		var x1=120, y1=30, x2=65, y2= 85, x3=120, y3=130;
		var mx1=127, my1=30, mx2=70, my2=87; 
		var lx1=75, ly1=75, lx2=120, ly2=123;
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle="#4474B3";
		
		ctx.font="20px Georgia";
		ctx.fillText("LR",10,30);
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx1,my1);
		ctx.lineTo(lx1,ly1);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx2,my2);
		ctx.lineTo(lx2,ly2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(x1,y1,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x2,y2,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x3,y3,14,0,2*Math.PI);
		ctx.fill();
	}
	
	this.RL = function(){
		var c=document.getElementById("rl");
		var ctx=c.getContext("2d");
		var x1=120, y1=30, x2=170, y2= 80, x3=120, y3=130;
		var mx1=127, my1=30, mx2=170, my2=80; 
		var lx1=170, ly1=75, lx2=120, ly2=130;
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle="#4474B3";
		
		ctx.font="20px Georgia";
		ctx.fillText("RL",10,30);
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx1,my1);
		ctx.lineTo(lx1,ly1);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.moveTo(mx2,my2);
		ctx.lineTo(lx2,ly2);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(x1,y1,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x2,y2,14,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x3,y3,14,0,2*Math.PI);
		ctx.fill();
	}
}

var resetAni = new resetAnimation();
var unbalance = new unbalance4Case();