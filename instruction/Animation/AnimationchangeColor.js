//Play animation of tip of rotate tree and change color.
var case1Ani=false, case2Ani=false, case3Ani=false;

var solveAnimation = function(){
	//Parent and uncle node are both red.
	this.twoRed = function(){
		case1Ani = true;       
		svgSelection = d3.select("#solCase1");
		
		d3.select("#n11").transition().duration(500).attr("fill", "black");
		d3.select("#n12").transition().duration(500).attr("fill", "red");
		d3.select("#n13").transition().duration(500).attr("fill", "red");
		
		if( case1Ani == true ){
			d3.select("#case14").remove();
			d3.select("#caseLine13").remove();
			d3.select("#root").remove();
			d3.select("#rootText").remove();
		}
		
		svgSelection.append("g").attr("id", "case14");
		d3.select("#case14").append("circle").attr("cx", 0).attr("cy", -15).attr("r", 14).attr("fill", "red");
		d3.select("#case14").append("text").text("X").attr("x", -5).attr("y", -10).attr("fill", "white");
					
		d3.select("#case14").transition().duration(1200).delay(1000).attr("transform", "translate(180,145)");
		
		svgSelection.append('line').style("stroke", "#A0522D").style('stroke-width', 2).attr("id", "caseLine13")
		.attr({
		  x1: 140, y1: 90, x2: 140, y2: 90
		})
		.transition().duration(1200).delay(1000).ease('bounce')
		.attr({
		  x2: 180, y2: 120
		});
		
		d3.select("#n11").transition().duration(1300).delay(2500).attr("fill", "red");
		d3.select("#n12").transition().duration(1300).delay(2500).attr("fill", "black");
		d3.select("#n13").transition().duration(1300).delay(2500).attr("fill", "black");
		
		svgSelection.append("circle").attr("id", "root").transition().duration(300).delay(4800).attr("cx", 100).attr("cy", 30).attr("r", 20).attr("fill", "none").attr("stroke-width", 3).attr("stroke", "#FF8800");
		svgSelection.append("text").attr("id", "rootText").transition().duration(300).delay(4800).attr('x', -30).attr('y', 170).attr("fill", "#FF8800").text("如果Acestor是Root,記得再改成黑色");
	}
	
	//The path from ancestor node to new node has no angle. 
	this.noAngle = function(){
		case2Ani = true;       
		svgSelection = d3.select("#solCase2");
		
		d3.select("#n21").transition().duration(500).attr("fill", "black");
		d3.select("#n22").transition().duration(500).attr("fill", "black");
		d3.select("#n23").transition().duration(500).attr("fill", "red");
		
		if( case2Ani == true ){
			d3.select("#case24").remove();
			d3.select("#caseLine24").remove();
			
			d3.select("#case21").transition().attr("transform", "translate(100,30)");
			d3.select("#case22").transition().attr("transform", "translate(60,80)");
			d3.select("#case23").transition().attr("transform", "translate(140,80)");
		
			d3.select("#n21").transition().attr("fill", "black");
			d3.select("#n23").transition().attr("fill", "red");
		}
		
		svgSelection.append("g").attr("id", "case24");
		d3.select("#case24").append("circle").attr("cx", 0).attr("cy", 0).attr("r", 14).attr("fill", "red");
		d3.select("#case24").append("text").text("X").attr("x", -5).attr("y", 5).attr("fill", "white");
					
		d3.select("#case24").transition().duration(900).delay(700).attr("transform", "translate(180,130)");
		
		svgSelection.append('line').style("stroke", "#A0522D").style('stroke-width', 2).attr("id", "caseLine24")
		.attr({x1: 140, y1: 90, x2: 140, y2: 90}).transition().duration(900).delay(700).ease('bounce').attr({x2: 180, y2: 120});
		
		d3.select("#case21").transition().duration(1300).delay(2400).attr("transform", "translate(60,80)");
		d3.select("#case22").transition().duration(1300).delay(2400).attr("transform", "translate(20,130)");
		d3.select("#case23").transition().duration(1300).delay(2400).attr("transform", "translate(100,30)");
		d3.select("#case24").transition().duration(1300).delay(2400).attr("transform", "translate(140,80)");
		
		d3.select("#caseLine24").transition().duration(1300).delay(2400).ease('bounce').attr({x1: 60, y1: 90, x2: 20, y2: 120});
		
		d3.select("#n21").transition().duration(1300).delay(4000).attr("fill", "red");
		d3.select("#n23").transition().duration(1300).delay(4000).attr("fill", "black");
	}
	
	//The path from ancestor node to new node has angle. 
	this.angle = function(){
		case3Ani = true;       
		svgSelection = d3.select("#solCase3");
		
		d3.select("#n31").transition().duration(500).attr("fill", "black");
		d3.select("#n32").transition().duration(500).attr("fill", "black");
		d3.select("#n33").transition().duration(500).attr("fill", "red");
		
		if( case3Ani == true ){
			d3.select("#case34").remove();
			d3.select("#caseLine34").remove();
			
			d3.select("#case31").transition().attr("transform", "translate(100,30)");
			d3.select("#case32").transition().attr("transform", "translate(60,80)");
		
			d3.select("#n31").transition().attr("fill", "black");
		}
		
		svgSelection.append("g").attr("id", "case34");
		d3.select("#case34").append("circle").attr("id", "n34").attr("cx", 0).attr("cy", 0).attr("r", 14).attr("fill", "red");
		d3.select("#case34").append("text").text("X").attr("x", -5).attr("y", 5).attr("fill", "white");
					
		d3.select("#case34").transition().duration(900).delay(700).attr("transform", "translate(100,130)");
		
		svgSelection.append('line').style("stroke", "#A0522D").style('stroke-width', 2).attr("id", "caseLine34")
		.attr({x1: 140, y1: 90, x2: 140, y2: 90}).transition().duration(900).delay(700).ease('bounce').attr({x2: 100, y2: 120});
		
		d3.select("#case33").transition().duration(1000).delay(2400).attr("transform", "translate(180,130)");
		d3.select("#case34").transition().duration(1000).delay(2400).attr("transform", "translate(140,80)");
		
		d3.select("#caseLine34").transition().duration(1000).delay(2400).ease('bounce').attr({x2: 180, y2: 120});
		
		d3.select("#case31").transition().duration(1300).delay(4400).attr("transform", "translate(60,80)");
		d3.select("#case32").transition().duration(1300).delay(4400).attr("transform", "translate(20,130)");
		d3.select("#case33").transition().duration(1300).delay(4400).attr("transform", "translate(140,80)");
		d3.select("#case34").transition().duration(1300).delay(4400).attr("transform", "translate(100,30)");
		
		d3.select("#caseLine34").transition().duration(1300).delay(4400).ease('bounce').attr({x1: 60, y1: 90, x2: 20, y2: 120});
		
		d3.select("#n31").transition().duration(1300).delay(6000).attr("fill", "red");
		d3.select("#n34").transition().duration(1300).delay(6000).attr("fill", "black");
	}
}

var solveAni = new solveAnimation();