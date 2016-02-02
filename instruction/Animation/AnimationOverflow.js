//Hide button.
$(document).ready(function(){
	$("#llRotation").click(function(){
		$("#llRotation").hide().delay(2200).show(0);
	});
});

var overflowTag = null;

var property23Tree = function(){
	//Animation of one key and two subtree.
	this.oneKeyTwoSubtree = function(){
		var c=document.getElementById("twoSubtree");
		var ctx=c.getContext("2d");
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle="#4400B3";
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.strokeStyle="green";
		ctx.rect(180,20,50,40);
		ctx.stroke();
				
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(230,20,50,40);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(20,120,50,40);
		ctx.stroke();
				
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(70,120,50,40);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(180,120,50,40);
		ctx.stroke();
				
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(230,120,50,40);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.strokeStyle="#8B4513";
		ctx.moveTo(180,60);
		ctx.lineTo(70,120);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.moveTo(230,60);
		ctx.lineTo(230,120);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(205,40,16,0,2*Math.PI);
		ctx.fillStyle="#FFAA33";
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(205,140,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(95,140,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(45,140,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="#FF4500";
		ctx.rect(10,110,280,60);
		ctx.stroke();
		
		ctx.font="16px Georgia";
		ctx.fillStyle ="#FF4500";
		ctx.fillText("節點中的Key數量可能為1或2",50,190);
	}
	
	//Animation of two key and three subtree.
	this.twoKeyThreeSubtree = function(){
		var c=document.getElementById("threeSubtree");
		var ctx=c.getContext("2d");
		
		var ctx=c.getContext("2d");
		
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle="#4400B3";
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.strokeStyle="green";
		ctx.rect(180,20,50,40);
		ctx.stroke();
				
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(230,20,50,40);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(20,120,50,40);
		ctx.stroke();
				
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(70,120,50,40);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(180,120,50,40);
		ctx.stroke();
				
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(230,120,50,40);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(340,120,50,40);
		ctx.stroke();
				
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.rect(390,120,50,40);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.strokeStyle="#8B4513";
		ctx.moveTo(180,60);
		ctx.lineTo(70,120);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.moveTo(230,60);
		ctx.lineTo(230,120);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth="4";
		ctx.moveTo(280,60);
		ctx.lineTo(390,120);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(205,40,16,0,2*Math.PI);
		ctx.fillStyle="#FFAA33";
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(255,40,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(205,140,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(415,140,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(45,140,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(365,140,16,0,2*Math.PI);
		ctx.fill();
		
		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="#FF4500";
		ctx.rect(10,110,440,60);
		ctx.stroke();
		
		ctx.font="16px Georgia";
		ctx.fillStyle ="#FF4500";
		ctx.fillText("節點中的Key數量可能為1或2",130,190);
	}
	
	//Animation of Solve overflow.
	this.overflow = function(){     
		svgSelection = d3.select("#svgOverflow");
		
		if( overflowTag == true ){
			d3.select("#lRect1").remove();
			d3.select("#rRect1").remove();
			d3.select("#lRect2").remove();
			d3.select("#rRect2").remove();
			d3.select("#lRect3").remove();
			d3.select("#rRect3").remove();
			d3.select("#lKey").remove();
			d3.select("#mKey").remove();
			d3.select("#rKey").remove();
			d3.select("#overflowLine1").remove();
			d3.select("#overflowLine2").remove();
			
			svgSelection.append("text").attr("id", "overflowTip").text("此節點中有三個key,表示有Overflow的狀況").attr("fill", "#06C").attr("x", 70).attr("y", 230);
			
			svgSelection.append("rect").attr("id", "lRect1").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 180).attr("y", 150);
			svgSelection.append("rect").attr("id", "rRect1").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 230).attr("y", 150);		
		  	
			svgSelection.append("g").attr("id", "lKey").attr("transform", "translate(205,170)");
			d3.select("#lKey").append("circle").attr("id", "key1").attr("cx", 0).attr("cy", 0).attr("r", 14).attr("fill", "#FFAA33");
			d3.select("#lKey").append("text").text("L").attr("x", -5).attr("y", 5).attr("fill", "white");
			
			svgSelection.append("g").attr("id", "mKey").attr("transform", "translate(230,170)");
			d3.select("#mKey").append("circle").attr("id", "key2").attr("cx", 0).attr("cy", 0).attr("r", 14).attr("fill", "#FFAA33");
			d3.select("#mKey").append("text").text("M").attr("x", -5).attr("y", 5).attr("fill", "white");
			
			svgSelection.append("g").attr("id", "rKey").attr("transform", "translate(255,170)");
			d3.select("#rKey").append("circle").attr("id", "key3").attr("cx", 0).attr("cy", 0).attr("r", 14).attr("fill", "#FFAA33");
			d3.select("#rKey").append("text").text("R").attr("x", -5).attr("y", 5).attr("fill", "white");
		}

		setTimeout(function(){
			d3.select("#lKey").transition().duration(2000).attr("transform", "translate(105,170)");
			d3.select("#mKey").transition().duration(2000).attr("transform", "translate(285,70)");
			d3.select("#rKey").transition().duration(2000).attr("transform", "translate(285,170)");
			
			d3.select("#lRect1").remove();
			d3.select("#rRect1").remove();
			
			svgSelection.append("rect").attr("id", "lRect1").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 180).attr("y", 150);
			svgSelection.append("rect").attr("id", "rRect1").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 230).attr("y", 150);			
			d3.select("#lRect1").transition().duration(700).attr("x", 80).attr("y", 150);
			d3.select("#rRect1").transition().duration(700).attr("x", 130).attr("y", 150);
			
			svgSelection.append("rect").attr("id", "lRect2").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 180).attr("y", 150);
			svgSelection.append("rect").attr("id", "rRect2").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 230).attr("y", 150);			
			d3.select("#lRect2").transition().duration(700).attr("x", 260).attr("y", 150);
			d3.select("#rRect2").transition().duration(700).attr("x", 310).attr("y", 150);
			
			svgSelection.append("rect").attr("id", "lRect3").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 180).attr("y", 150);
			svgSelection.append("rect").attr("id", "rRect3").attr("width", "50").attr("height", "40").attr("stroke", "green").attr("stroke-width", "4").attr("fill", "none").attr("x", 230).attr("y", 150);			
			d3.select("#lRect3").transition().duration(700).attr("x", 260).attr("y", 50);
			d3.select("#rRect3").transition().duration(700).attr("x", 310).attr("y", 50);
			
			svgSelection.append('line').style("stroke", "#8B4513").style('stroke-width', 4).attr("id", "overflowLine1")
			.attr({
			  x1: 260, y1: 90, x2: 260, y2: 90
			})
			.transition().duration(1500).ease('bounce')
			.attr({
			  x2: 130, y2: 150
			});
			
			svgSelection.append('line').style("stroke", "#8B4513").style('stroke-width', 4).attr("id", "overflowLine2")
			.attr({
			  x1: 310, y1: 90, x2: 310, y2: 90
			})
			.transition().duration(1500).ease('bounce')
			.attr({
			  x2: 310, y2: 150
			});
			
			d3.select("#overflowTip").remove();
			
		}, 700);
		
		overflowTag = true;  
		
		$("#solveOverflowSvg").hide().delay(1300).show(0);
	}
}

var property23 = new property23Tree();