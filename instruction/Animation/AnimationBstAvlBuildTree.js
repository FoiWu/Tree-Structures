//Build a tree by animation.

var xBuild = 30, yBuild = 30;
var xBuildEnd = 500 , yBuildEnd = 45;

var buildXLine = 500, buildYLine = 65;
var buildXLineEnd = 260, buildYLineEnd = 125;

var xOutline = 260, yOutline = 145;

var outlineIndex = 2, appearArrIndex = 0, oldOutline, leftChild;

var generateOutline = function(){
	this.buildTree = function(kind,number){		       //Generate a root and two outlines.
		if(kind == 1){
			treeSVG.append("svg:circle").attr("id", "outline1").attr("class", "outline").attr("cx", xBuildEnd).attr("cy", yBuildEnd).attr("r", 19)
			.attr("fill", "blue").attr("fill-opacity", "0.2");
			
			outlineAppearArr[0] = "outline1";
			
			treeSVG.append("svg:g").attr("class", "buildTextGroup").attr("id", "buildGroup"+number).attr("transform", "translate("+xBuild+","+yBuild+")")
			.append("text").text(currentData).attr("x", -5).attr("y", 5).attr("id", "buildText"+number).attr("class", "buildText")
			.attr("font-size", "22").attr("stroke", "#FF9900").attr("font-family", "impact");
						
			d3.select("#buildGroup"+number).call(dragNode);
		}
		if(kind == 2){              //Generate a node for dragging.
			treeSVG.append("svg:g").attr("class", "buildTextGroup").attr("id", "buildGroup"+number).attr("transform", "translate("+xBuild+","+yBuild+")")
			.append("text").text(currentData).attr("x", -5).attr("y", 5).attr("id", "buildText"+number).attr("class", "buildText")
			.attr("font-size", "23").attr("stroke", "#FF9900").attr("font-family", "impact");
						
			d3.select("#buildGroup"+number).call(dragNode);
		}
	}
	this.outlinePresented = function(vIndex, level){          //Present two outlines.
		var currentX = Math.round(d3.select("#outline"+vIndex).attr("cx"));
		var currentY = Math.round(d3.select("#outline"+vIndex).attr("cy"));
		
		outlineIndex = vIndex * 2;       //Left outline of visit node.
		
		if( level != 0 ){
			var currentxLine = Math.round(d3.select("#buildLine"+vIndex).attr("x1"));
			var currentyLine = Math.round(d3.select("#buildLine"+vIndex).attr("y1"));
			var currentxLineEnd = Math.round(d3.select("#buildLine"+vIndex).attr("x2"));
			var currentyLineEnd = Math.round(d3.select("#buildLine"+vIndex).attr("y2"));
		}
		else{
			var currentxLine, currentyLine, currentxLineEnd, currentyLineEnd;	
		}
		
		switch(level){
			case 0:
				xOutline = 260;
				buildXLineEnd = 260; 
				currentxLineEnd = 500;
				currentyLineEnd = 23;
				break;
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
		
		treeSVG.append("svg:circle").attr("id", "outline"+outlineIndex).attr("class", "outline").attr("cx", xOutline).attr("cy", yOutline).attr("r", 19)
		.attr("fill", "blue").attr("fill-opacity", "0.2");  
		
		appearArrIndex++;
		outlineAppearArr[appearArrIndex] = "outline"+outlineIndex;
	
		switch(level){
			case 0:
				xOutline = 740;
				buildXLineEnd += 480;
				break;
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
		
		treeSVG.append("svg:circle").attr("id", "outline"+outlineIndex).attr("class", "outline").attr("cx", xOutline).attr("cy", yOutline).attr("r", 19)
		.attr("fill", "blue").attr("fill-opacity", "0.2");
		
		appearArrIndex++;
		outlineAppearArr[appearArrIndex] = "outline"+outlineIndex;
	}
}

var dragTarget = null;

var dragNode = d3.behavior.drag()  
	.on('dragstart', function(){grab(this, event)})
	.on('drag', function(){drag(this, event)})
	.on("dragend", function(){drop(this, event)});
	
function grab(element, event){
	dragTarget = event.target;
	//dragTarget.parentNode.appendChild( dragTarget );        //Send the grabbed element to top.
	d3.select(dragTarget).attr("pointer-events", "none");
	currentData = dragTarget.textContent;
}
function drag(element, event){
	if (dragTarget){
		var x = d3.event.x-30;       //30 is displacement.
		var y = d3.event.y-30;
		d3.select(dragTarget).attr("transform", "translate("+x+","+y+")");
		for( var j = 0; j <= placeTextId.length; j++ ){
			if( placeTextId[j] == dragTarget.id ){	
				//buildTree.cancelOutline(targetElement.id);              //Cancel recording of placed.	
				var outlineIn = j +1;
				d3.select("#outline"+outlineIn).attr("fill", "blue").attr("fill-opacity", "0.2").attr("stroke-width", 0);
				userAnswer[j] = null;
				placeTextId[j] = null;
				break;
			}
		}
	}
}
function drop(element, event){
	if (dragTarget){
		d3.select(dragTarget).attr("pointer-events", "all");
		var targetElement = event.target;
		oldOutline = false;
		if(targetElement != treeSVG.node()){
			console.log(dragTarget.id + ' has been dropped on top of ' + targetElement.id);
			d3.select(targetElement).attr("fill", "none").attr("stroke-width", 5).attr("stroke", "#A1C7EF");
			
			if( biggestIndex > outlineIndex ){
				outlineIndex = biggestIndex;
			}
			
			for( var presented = 1; presented <= outlineIndex; presented++ ){
				if( targetElement.id == "outline"+presented ){
					leftChild = presented*2;
					break;
				}	
			}
			
			for( var k = 0; k <= outlineAppearArr.length; k++ ){
				if( outlineAppearArr[k] == "outline"+leftChild ){
					oldOutline = true;   
					break;    	
				}	
			}
			
			if( oldOutline != true ){
				buildTree.calNextPosition(targetElement.id, dragTarget.id);      //Calculate next position of outline.
			}
			else{
				for( var presented = 1; presented <= outlineIndex; presented++ ){
					if( targetElement.id == "outline"+presented ){
						userAnswer[(presented-1)] = currentData;
						placeTextId[(presented-1)] = dragTarget.id;
						console.log(userAnswer+'/'+placeTextId);
						var outlineLevel = Math.floor(Math.log2(presented));
						break;
					}	
				}	
			}
		}		
		else{
			document.getElementById("positionTip").innerHTML = "Here isn't correct position.";
		}
		dragTarget = null;
	}
}
	  	


var nodeAndOutline = new generateOutline(); 