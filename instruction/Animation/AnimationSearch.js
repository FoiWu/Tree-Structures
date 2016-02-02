//Animation of search node.

var searchNode = function(){
	this.tree = function(id){
		//alert(xPosEnd+"/"+yPosEnd+"/"+nodeNumber);
		
		
		
		d3.select("#nodeCircle"+circleId).transition().duration(2000).attr("fill", "yellow");
	}
}

var sNode = new searchNode(); 