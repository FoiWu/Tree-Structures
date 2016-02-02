//Animation of generate a circle. 
//For BST, AVL tree, Red-Black tree.
//kind==1:2-3.

var xPos = 20, yPos = 20;
var xPosEnd = 500 , yPosEnd = 160;

var xRect = 415, yRect = 130;
var xRectEnd= 475, yRectEnd = 142;

var svgSelection, groupSelection;

var generateNode = function(){
	this.tree = function(){		       //Generate a node in 2-3 tree or 2-3-4 tree.
		svgSelection = d3.select("svg");
		svgSelection.append("g").attr("id", "group"+nodeNumber);
		
		d3.select("#group"+nodeNumber).append("circle").attr("cx", 0).attr("cy", 0).attr("r", 15).attr("id", "nodeCircle"+nodeNumber).attr("fill", "green");
		d3.select("#group"+nodeNumber).append("text").text(currentData).attr("x", -5).attr("y", 5).attr("id", "nodeText"+nodeNumber).attr("fill", "white");
					
		d3.select("#group"+nodeNumber).transition().duration(1500).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");	
	}
	
	this.rect = function(rectNumber){
		svgSelection = d3.select("svg");
		svgSelection.append("g").attr("id", "groupRect"+rectNumber);
		
		d3.select("#groupRect"+rectNumber).append("rect").attr("x", 0).attr("y", 0).attr("width", 100).attr("height", 35).attr("id", "nodeRect"+rectNumber).attr("fill", "#DDFF77").attr("fill-opacity", "0.1").attr("stroke-width", "3").attr("stroke", "#FFDD55");
		d3.select("#groupRect"+rectNumber).append("line").attr("x1", 50).attr("y1", 0).attr("x2", 50).attr("y2", 35).style("stroke", "#FFDD55").style('stroke-width', 3).attr("id", "rectLine"+rectNumber).attr("opacity", "0.2");
	
		d3.select("#groupRect"+rectNumber).attr("transform", "translate("+xRectEnd+","+yRectEnd+")");
	}
	
	this.changeElePos = function(tempNumber){       //Change position of element.	
		d3.select("#group"+tempNumber).transition().duration(1000).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
	}
	
	this.changeEleSec = function(){       //Current node changes position of element.	
		d3.select("#group"+element23t).transition().duration(500).delay(1400).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
	}
	
	this.compareEle = function(){       //Change position of element after compare elements.	
		d3.select("#group"+compareNode).transition().duration(500).delay(1400).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
	}
	
	this.compareEleSec = function(){       //Current node change position of element after compare elements.	
		d3.select("#group"+element23t).transition().duration(500).delay(2400).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
	}
	
	this.compareEleThi = function(){       //Current node change position of element third time.	
		d3.select("#group"+element23t).transition().duration(500).delay(3000).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
	}
	
	this.changeRectPos = function(removeRec){       //Change position of element.	
		d3.select("#nodeRect"+removeRec).remove();
		this.rect(removeRec);
	}
	
	this.getCurrentPos = function(tempNumber){       //Get position of current node.
		xPosEnd = Math.round(d3.transform(d3.select("#group"+tempNumber).attr("transform")).translate[0]);
		yPosEnd = Math.round(d3.transform(d3.select("#group"+tempNumber).attr("transform")).translate[1]);
	}
	
	this.getCurrentRect = function(tempNumber){       //Get position of current rectangle.
		xRectEnd = Math.round(d3.transform(d3.select("#groupRect"+tempNumber).attr("transform")).translate[0]);
		yRectEnd = Math.round(d3.transform(d3.select("#groupRect"+tempNumber).attr("transform")).translate[1]);
	}
}

var generate = new generateNode(); 