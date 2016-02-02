//Build a tree by animation.

var xBuild = 30, yBuild = 30;
var xBuildEnd = 500 , yBuildEnd = 45;

var buildXLine = 500, buildYLine = 65;
var buildXLineEnd = 260, buildYLineEnd = 125;

var xOutline = 260, yOutline = 145;

var outlineIndex = 2;

var generateOutline = function(){
	this.buildTree = function(kind,number){		       //Generate a root and two outlines.
		if(kind == 1){
			treeSVG.append("svg:g").attr("id", "group"+number).attr("transform", "translate("+xBuildEnd+","+yBuildEnd+")")
			.append("svg:circle").attr("id", "nodeCircle"+number).attr("cx", 0).attr("cy", 0).attr("r", 19).attr("fill", "#A1C7EF");
			
			d3.select("#group"+number).append("text").text(currentData).attr("x", -10).attr("y", 10)
			.attr("id", "nodeText"+number).attr("font-size", "22").attr("stroke", "#FDFF37").attr("font-family", "impact");
						
			d3.select("#group"+number).call(dragNode);
			
			buildLine.treeLine();
			
			treeSVG.append("svg:circle").attr("id", "outline"+outlineIndex).attr("cx", xOutline).attr("cy", yOutline).attr("r", 19)
			.attr("fill", "lightyellow").attr("stroke", "#A1C7EF").attr("font-family", "impact").attr("stroke-width", 2);
			
			outlineIndex++;
	
			buildXLineEnd = 740;
			buildLine.treeLine();
	
			xOutline += 480;
			treeSVG.append("svg:circle").attr("id", "outline"+outlineIndex).attr("cx", xOutline).attr("cy", yOutline).attr("r", 19)
			.attr("fill", "lightyellow").attr("stroke", "#A1C7EF").attr("stroke-width", 2);
		}
		if(kind == 2){              //Generate a node for dragging.
			treeSVG.append("svg:g").attr("id", "group"+number).attr("transform", "translate("+xBuild+","+yBuild+")")
			.append("text").text(currentData).attr("x", -5).attr("y", 5).attr("id", "nodeText"+number)
			.attr("font-size", "23").attr("stroke", "#FF9900").attr("font-family", "impact");
						
			d3.select("#group"+number).call(dragNode);
		}
	}
	this.outlinePresented = function(vIndex, level){          //Present two outlines.
		var currentX = Math.round(d3.select("#outline"+vIndex).attr("cx"));
		var currentY = Math.round(d3.select("#outline"+vIndex).attr("cy"));
		
		outlineIndex = vIndex * 2;       //Left outline of visit node.
		
		var currentxLine = Math.round(d3.select("#line"+vIndex).attr("x1"));
		var currentyLine = Math.round(d3.select("#line"+vIndex).attr("y1"));
		var currentxLineEnd = Math.round(d3.select("#line"+vIndex).attr("x2"));
		var currentyLineEnd = Math.round(d3.select("#line"+vIndex).attr("y2"));
		
		switch(level){
			case 1:
				xOutline = currentX - 120;
				buildXLineEnd = currentxLineEnd - 120; 
				break;
			case 2:
				xOutline = currentX - 60;
				buildXLineEnd = currentxLineEnd - 60; 
				break;
			case 3:
				xOutline = currentX - 30;
				buildXLineEnd = currentxLineEnd - 30; 
				break;
			case 4:
				xOutline = currentX - 15;
				buildXLineEnd = currentxLineEnd - 15; 
				break;
		}
		buildXLine = currentxLineEnd;
		
		yOutline = currentY + 80;
		
		buildYLine = currentyLineEnd + 42;
		buildYLineEnd = currentyLineEnd +80;
		buildLine.treeLine();          //Left light of visit node.
		
		treeSVG.append("svg:circle").attr("id", "outline"+outlineIndex).attr("cx", xOutline).attr("cy", yOutline).attr("r", 19)
		.attr("fill", "lightyellow").attr("stroke", "#A1C7EF").attr("stroke-width", 2);   
	
		switch(level){
			case 1:
				xOutline = xOutline + 240;
				buildXLineEnd = buildXLineEnd + 240; 
				break;
			case 2:
				xOutline = xOutline + 120;
				buildXLineEnd = buildXLineEnd + 120; 
				break;
			case 3:
				xOutline = xOutline + 60;
				buildXLineEnd = buildXLineEnd + 60; 
				break;
			case 4:
				xOutline = xOutline + 30;
				buildXLineEnd = buildXLineEnd + 30; 
				break;
		}
		
		outlineIndex++;          //Right outline of visit node.
		buildLine.treeLine();            //Right light of visit node.
		
		treeSVG.append("svg:circle").attr("id", "outline"+outlineIndex).attr("cx", xOutline).attr("cy", yOutline).attr("r", 19)
		.attr("fill", "lightyellow").attr("stroke", "#A1C7EF").attr("stroke-width", 2);
	}
}

var dragTarget = null;

var dragNode = d3.behavior.drag()  
	.on('dragstart', function(){grab(this, event)})
	.on('drag', function(){drag(this, event)})
	.on("dragend", function(){drop(this, event)});
	
function grab(element, event){
	dragTarget = event.target;
	dragTarget.parentNode.appendChild( dragTarget );        //Send the grabbed element to top.
	d3.select(dragTarget).attr("pointer-events", "none");
}
function drag(element, event){
	if (dragTarget){
		var x = d3.event.x-30;       //30 is displacement.
		var y = d3.event.y-30;
		d3.select(dragTarget).attr("transform", "translate("+x+","+y+")");
	}
}
function drop(element, event){
	if (dragTarget){
		d3.select(dragTarget).attr("pointer-events", "all");
		var targetElement = event.target;
		if(targetElement != treeSVG.node()){
			console.log(dragTarget.id + ' has been dropped on top of ' + targetElement.id);
			buildBST.calNextPosition(targetElement.id);         //Calculate next position of outline.
			document.getElementById("positionTip").innerHTML = "Ok! Is here.";	
			d3.select(targetElement).attr("fill", "#A1C7EF");
		}		
		else{
			document.getElementById("positionTip").innerHTML = "Here isn't correct position.";	
		}
		dragTarget = null;
	}
}
	  	


var nodeAndOutline = new generateOutline(); 