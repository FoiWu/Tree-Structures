//Animation of generate a circle. 
//For BST, AVL tree, Red-Black tree.
//kind==1:Rotation and change BF; kind==2:Generate BF; kind==3:change BF.

var xPos = 15, yPos = 20;
var xPosEnd = 350 , yPosEnd = 35;

var xLine = 365, yLine = 10;
var xLineEnd = 365, yLineEnd = 10;

var svgSelection, groupSelection;

var generateNode = function(){
	this.tree = function(kind){		       //Generate a node in AVL tree or BST.
		if(kind == null || kind == 2){
			svgSelection = d3.select("#tree");
			svgSelection.append("g").attr("id", "group"+nodeNumber);
			
			d3.select("#group"+nodeNumber).append("circle").attr("cx", 15).attr("cy", 15).attr("r", 18).attr("id", "nodeCircle"+nodeNumber).attr("fill", "#8EC68F");
			d3.select("#group"+nodeNumber).append("text").text(currentData).attr("x", 10).attr("y", 20).attr("id", "nodeText"+nodeNumber);
			
			if( kind == 2 ){
				if( nodeNoAVL == 0 ){
					yPosEnd = yPosEnd + 9;
				}	
			}
						
			d3.select("#group"+nodeNumber).transition().duration(1500).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
			
			line.tree(svgSelection);
		}
		if(kind == 5){              //Generate a node in Red-black tree.
			svgSelection = d3.select("#tree");
			svgSelection.append("g").attr("id", "group"+nodeNumber);
			
			if( nodeNumber != 0 ){                   //Not root
				d3.select("#group"+nodeNumber).append("circle").attr("cx", 15).attr("cy", 15).attr("r", 15).attr("id", "nodeCircle"+nodeNumber).attr("fill", "red").attr("#nodeCircle"+nodeNumber);
				d3.select("#group"+nodeNumber).append("text").text(currentData).attr("x", 7).attr("y", 20).attr("id", "nodeText"+nodeNumber).attr("fill", "white").attr("#nodeText"+nodeNumber);
						
				d3.select("#group"+nodeNumber).transition().duration(1500).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
			}
			else{           //Root
				d3.select("#group"+nodeNumber).append("circle").attr("cx", 15).attr("cy", 15).attr("r", 15).attr("id", "nodeCircle"+nodeNumber).attr("fill", "black").attr("#nodeCircle"+nodeNumber);
				d3.select("#group"+nodeNumber).append("text").text(currentData).attr("x", 7).attr("y", 20).attr("id", "nodeText"+nodeNumber).attr("fill", "white").attr("#nodeText"+nodeNumber);
						
				d3.select("#group"+nodeNumber).transition().duration(1500).attr("transform", "translate("+xPosEnd+","+(yPosEnd+9)+")");
			}
			
			line.tree(svgSelection);
		}
		
		if(kind == 2){
			this.bf();
		}
	}
	
	this.bf = function(){       //Generate BF.
		var svgSelection = d3.select("#tree");
		
		d3.select("#group"+nodeNumber).append("text").text(currentBF).attr("id", "nodeBF"+nodeNumber).attr("fill", "lightblue");
		d3.select("#nodeBF"+nodeNumber).transition().duration(1000).delay(500).attr("x", 35).attr("y", 25).attr("fill", "blue");
	}
	
	this.rotateRBTree = function(){       //Rotate Red-Black tree.
		d3.select("#group"+tempNodeNumber).transition().duration(2000).attr("transform", "translate("+xPosEnd+","+yPosEnd+")");
	}
	
	this.getCurrentPos = function(tempNumber){       //Get position of current node.
		//alert(tempNumber);
		xPosEnd = Math.round(d3.transform(d3.select("#group"+tempNumber).attr("transform")).translate[0]);
		yPosEnd = Math.round(d3.transform(d3.select("#group"+tempNumber).attr("transform")).translate[1]);
		xLine = Math.round(d3.select("#line"+tempNumber).attr("x1"));
		yLine = Math.round(d3.select("#line"+tempNumber).attr("y1"));
		xLineEnd = Math.round(d3.select("#line"+tempNumber).attr("x2"));
		yLineEnd = Math.round(d3.select("#line"+tempNumber).attr("y2"));
	}
	
	this.changeColor = function(kind){       //Change color from red-black tree.
		//alert(kind+"/"+changeColorArr);
		if( kind == 1 ){        
			for( var j = 2; j >= 0; j-- ){
				if( j != 0 ){  
					tempNodeNumber = changeColorArr[j];
					d3.select("#nodeCircle"+tempNodeNumber).transition().duration(1200).delay(300).attr("fill", "black");
					//alert(nodeNumber); 
				}
				else{             //Grendfather node.
					tempNodeNumber = changeColorArr[j];
					d3.select("#nodeCircle"+tempNodeNumber).transition().duration(1200).delay(300).attr("fill", "red");
				}
			}
		}
		else if( kind == 2 ){
			for( var j = 2; j >= 0; j-- ){
				if( j != 0 ){  
					tempNodeNumber = changeColorArr[j];
					d3.select("#nodeCircle"+tempNodeNumber).transition().duration(1200).delay(300).attr("fill", "red");
					//alert(nodeNumber); 
				}
				else{             //Grendfather node.
					tempNodeNumber = changeColorArr[j];
					d3.select("#nodeCircle"+tempNodeNumber).transition().duration(1200).delay(300).attr("fill", "black");
				}
			}
		}
		else if( kind == 0 ){             //Root change to black.
			d3.select("#nodeCircle"+tempNodeNumber).transition().duration(1000).delay(2000).attr("fill", "black");
		}
	}
	
	this.changeBF = function(bfChangedNode, currentBF){       //Change BF from AVL tree.
		//alert(bfChangedNode+'/'+currentBF);
		d3.select("#nodeBF"+bfChangedNode).transition().duration(2000).text(currentBF);			
	}
	
	this.getBFValue = function(bfChangedNode){
		getBF =  parseInt(d3.select("#nodeBF"+bfChangedNode).text());
	}
}

var generate = new generateNode(); 