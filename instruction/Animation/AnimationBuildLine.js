//For build a tree.
//Animation of geneate a line.

var buildXLine, buildYLine = 65;
var buildXLineEnd, buildYLineEnd = 125;
	
var buildLine = function(){
	this.treeLine = function(){
		treeSVG.append('line').style("stroke", "#695137").style('stroke-width', 2).attr("id", "buildLine"+outlineIndex)
		.attr({
		  x1: buildXLine, y1: buildYLine, x2: buildXLine, y2: buildYLine
		})
		.transition().duration(1500).ease('bounce')
		.attr({
		  x2: buildXLineEnd, y2: buildYLineEnd
		});
		//alert("(1)"+buildXLine+"/"+buildYLine+"/"+buildXLineEnd+"/"+buildYLineEnd+"/"+nodeNumber);
	}
	
	this.changeLine = function(){
		var temp;
		
		svgSelection = d3.select("svg");
		groupSelection = svgSelection.append("g");
		
		d3.select("#line"+tempNodeNumber).remove();
		temp = nodeNumber;
		nodeNumber = tempNodeNumber;
		this.tree();
		nodeNumber = temp;
	}
}

var buildLine = new buildLine();