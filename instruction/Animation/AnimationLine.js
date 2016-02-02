//Animation of geneate a line.
	
var generateLine = function(){
	this.tree = function(){
		svgSelection = d3.select("#tree");
		groupSelection = svgSelection.append("g");
		svgSelection.append('line').style("stroke", "#695137").style('stroke-width', 2).attr("id", "line"+nodeNumber)
		.attr({
		  x1: xLine, y1: yLine, x2: xLine, y2: yLine
		})
		.transition().duration(1500).ease('bounce')
		.attr({
		  x2: xLineEnd, y2: yLineEnd
		});
	}
	
	this.changeLinePos = function(){
		var temp;
		
		svgSelection = d3.select("#tree");
		groupSelection = svgSelection.append("g");
		
		d3.select("#line"+tempNodeNumber).remove();
		temp = nodeNumber;
		nodeNumber = tempNodeNumber;
		this.tree();
		nodeNumber = temp;
	}
}

var line = new generateLine(); 