//
//Deletes element to the tree(Inorder predesessor) step by step. 
//
//subtreeTag:To determine what situation, 
//oriIndex:Index of node of original place,      
//oriNode:Node of original place, 
//leftIndex:Index of node of left child, 
//leftNode:Node of left child,      
//rightIndex:Index of node of right child,  
//rightNode:Node of right child, 
//delIndex:Index of node of deleted,      
//delNode:Node of deleted.
var insteadArr = new Array();

var deletePredesessor = function() {
	this.deleteNode = function(){
		var subtreeTag, oriIndex, oriNode, leftIndex, leftNode, rightIndex, rightNode, delIndex, delNode; 
		var input = parseInt(document.getElementById("tree-input").value);    //input:Number by user input.
		
		for( var j = 0; j <= (nodeArray.length-1); j++ ){
			if( input == nodeArray[j] ){
				oriIndex = j+1;
				oriNode = nodeArray[(oriIndex)-1];
				delIndex = oriIndex;
				delNode = oriNode;
				
				leftIndex = 2*oriIndex;
				rightIndex = (2*oriIndex)+1;
				leftNode = nodeArray[(leftIndex)-1];
				rightNode = nodeArray[(rightIndex)-1];
				
				if( leftNode == null && rightNode == null ){
				//Both subtree are null.
					subtreeTag = 0;
				}
				else if( leftNode == null && rightNode != null ){
					//Left subtree is null, but right is not.
					subtreeTag = 1;
				}
				else if( leftNode != null ){
					//Left subtree is not null.
					subtreeTag = 2;
				}	
			}
		}
		
		switch(subtreeTag){
				case 0:
					//Delete this node.
					var removeNode = circleArr[(oriIndex-1)];
					svgSelection.select("#group"+removeNode).remove();
					svgSelection.select("#line"+removeNode).remove();
					nodeArray[(oriIndex-1)] = null;
					circleArr[(oriIndex-1)] = null;
					break;
				case 1:
					//Alert user.
					alert("Please use inoder successor");
					break;
				case 2:
					//Finds biggest node of left subtree,and to replace node of delete.
					this.findBiggestNode(oriIndex, oriNode, leftIndex, leftNode, rightIndex, rightNode, delIndex);        
					break;
		}	
		console.log(nodeArray);
		console.log(circleArr);
	}
	
	//Find biggest node of left subtree.
	this.findBiggestNode = function(originalIndex, originalNode, leftChildIndex, leftChildNode, rightChildIndex, rightChildNode, deleteIndex) {
		var searchTag = true;      //true: Find biggest node again; false: Stop find biggest node.
		
		originalIndex = leftChildIndex;
		originalNode = leftChildNode;
		
		while( searchTag == true ){
			leftChildIndex = 2*originalIndex;
			leftChildNode = nodeArray[(leftChildIndex-1)];
			rightChildIndex = (2*originalIndex)+1;
			rightChildNode = nodeArray[(rightChildIndex-1)];
		
			if( leftChildNode == null && rightChildNode == null ){        //Deleted directly.
				var removeNode = circleArr[(deleteIndex-1)];
				var insteadNode = circleArr[(originalIndex-1)];
				
				console.log(circleArr[(deleteIndex-1)]+'/'+circleArr[(originalIndex-1)]);
				
				var delX = Math.round(d3.transform(d3.select("#group"+removeNode).attr("transform")).translate[0]);
				var delY = Math.round(d3.transform(d3.select("#group"+removeNode).attr("transform")).translate[1]);
				xLine = Math.round(d3.select("#line"+removeNode).attr("x1"));
				yLine = Math.round(d3.select("#line"+removeNode).attr("y1"));
				xLineEnd = Math.round(d3.select("#line"+removeNode).attr("x2"));
				yLineEnd = Math.round(d3.select("#line"+removeNode).attr("y2"));
		
				svgSelection.select("#group"+removeNode).remove();
				svgSelection.select("#line"+removeNode).remove();	
				d3.select("#group"+insteadNode).transition().duration(1500).attr("transform", "translate("+delX+","+delY+")");
				tempNodeNumber = insteadNode;
				line.changeLinePos();
				
				nodeArray[(deleteIndex-1)] = originalNode;
				nodeArray[(originalIndex)-1] = null;
				circleArr[(deleteIndex-1)] = circleArr[(originalIndex)-1];
				circleArr[(originalIndex)-1] = null;
				searchTag = false;
			}
			else if( leftChildNode != null && rightChildNode == null ){        //All left children move upward.
				var tempInstead = 0;
				for(var j = leftChildIndex; j <= circleArr.length; j++){
					if( circleArr[(j-1)] != null ){
						insteadArr[tempInstead] = circleArr[(j-1)];
						tempInstead++;
					}
				}
				
				var removeNode = circleArr[(deleteIndex-1)];
				var insteadNode = circleArr[(originalIndex-1)];
				
				console.log(circleArr[(deleteIndex-1)]+'/'+circleArr[(originalIndex-1)]);
				
				var delX = Math.round(d3.transform(d3.select("#group"+removeNode).attr("transform")).translate[0]);
				var delY = Math.round(d3.transform(d3.select("#group"+removeNode).attr("transform")).translate[1]);
				xLine = Math.round(d3.select("#line"+removeNode).attr("x1"));
				yLine = Math.round(d3.select("#line"+removeNode).attr("y1"));
				xLineEnd = Math.round(d3.select("#line"+removeNode).attr("x2"));
				yLineEnd = Math.round(d3.select("#line"+removeNode).attr("y2"));
		
				svgSelection.select("#group"+removeNode).remove();
				svgSelection.select("#line"+removeNode).remove();	
				d3.select("#group"+insteadNode).transition().duration(1500).attr("transform", "translate("+delX+","+delY+")");
				tempNodeNumber = insteadNode;
				line.changeLinePos();
				
				nodeArray[(deleteIndex-1)] = originalNode;
				nodeArray[(originalIndex)-1] = null;
				circleArr[(deleteIndex-1)] = circleArr[(originalIndex)-1];
				circleArr[(originalIndex)-1] = null;
				
				this.replaceAbovePlace(originalIndex, originalNode, leftChildIndex, leftChildNode, rightChildIndex, rightChildNode, deleteIndex);     //Children nodes replace above place
				searchTag = false;
			}
			else if( rightChildNode != null ){          //Find biggest node again.
				originalIndex = rightChildIndex;
				originalNode = rightChildNode;
				searchTag = true;
			}
		}
	}
	
	//Children nodes replace above place
	this.replaceAbovePlace = function(originalIndex, originalNode, leftChildIndex, leftChildNode, rightChildIndex, rightChildNode, deleteIndex) {
		nodeArray[(originalIndex-1)] = leftChildNode;
		nodeArray[originalIndex] = rightChildNode;
		circleArr[(originalIndex-1)] = circleArr[(leftChildIndex-1)];
		circleArr[originalIndex] = circleArr[(rightChildIndex-1)];
		
		while( leftChildNode != null || rightChildNode != null ){
			originalIndex = leftChildIndex;
			leftChildIndex = 2*originalIndex;
			rightChildIndex = (2*originalIndex)+1;
			leftChildNode = nodeArray[(leftChildIndex-1)];
			rightChildNode = nodeArray[(rightChildIndex-1)];
				
			nodeArray[(originalIndex-1)] = leftChildNode;
			nodeArray[originalIndex] = rightChildNode;
			circleArr[(originalIndex-1)] = circleArr[(leftChildIndex-1)];
			circleArr[originalIndex] = circleArr[(rightChildIndex-1)];
		}
		
		while( insteadArr.length != 0 ){
		}
		
		leftChildNode = nodeArray[(leftChildIndex-1)];
		rightChildNode = nodeArray[(rightChildIndex-1)];
			
		nodeArray[(originalIndex-1)] = leftChildNode;
		nodeArray[originalIndex] = rightChildNode;
		circleArr[(originalIndex-1)] = circleArr[(leftChildIndex-1)];
		circleArr[originalIndex] = circleArr[(rightChildIndex-1)];
	}
	xLine = 365, yLine = 10;
	xLineEnd = 365, yLineEnd = 10;
}

//
//Deletes element to the tree(Inorder successor) step by step. 
//
var deleteSuccessor = function() {	
	this.deleteNode = function(){
		var subtreeTag, oriIndex, oriNode, leftIndex, leftNode, rightIndex, rightNode, delIndex, delNode;
		var input = parseInt(document.getElementById("tree-input").value);    //input:Number by user input.
		
		for( var j = 0; j <= (nodeArray.length-1); j++ ){
			if( input == nodeArray[j] ){
				oriIndex = j+1;
				oriNode = nodeArray[(oriIndex)-1];
				delIndex = oriIndex;
				delNode = oriNode;
				
				leftIndex = 2*oriIndex;
				rightIndex = (2*oriIndex)+1;
				leftNode = nodeArray[(leftIndex)-1];
				rightNode = nodeArray[(rightIndex)-1];
				
				if( leftNode == null && rightNode == null ){
				//Both subtree are null.
					subtreeTag = 0;
				}
				else if( leftNode != null && rightNode == null ){
					//Right subtree is null, but left is not.
					subtreeTag = 1;
				}
				else if( rightNode != null ){
					//Right subtree is not null.
					subtreeTag = 2;
				}	
			}
		}
		
		switch(subtreeTag){
				case 0:
					//Delete this node.
					var removeNode = circleArr[(oriIndex-1)];
					svgSelection.select("#group"+removeNode).remove();
					svgSelection.select("#line"+removeNode).remove();
					nodeArray[(oriIndex-1)] = null;
					circleArr[(oriIndex-1)] = null;
					break;
				case 1:
					//Alert user.
					alert("Please use inoder predesessor");
					break;
				case 2:
					//Finds smallest node of right subtree,and to replace node of delete.
					this.findSmallestNode(oriIndex, oriNode, leftIndex, leftNode, rightIndex, rightNode, delIndex);        
					break;
		}	
		console.log(nodeArray);
		console.log(circleArr);
	}
	
	//Find smallest node of right subtree.
	this.findSmallestNode = function(originalIndex, originalNode, leftChildIndex, leftChildNode, rightChildIndex, rightChildNode, deleteIndex) {
		var searchTag = true;      //true: Find smallest node again; false: Stop find smallest node.
		
		originalIndex = rightChildIndex;
		originalNode = rightChildNode;
		
		while( searchTag == true ){
			leftChildIndex = 2*originalIndex;
			leftChildNode = nodeArray[(leftChildIndex-1)];
			rightChildIndex = (2*originalIndex)+1;
			rightChildNode = nodeArray[(rightChildIndex-1)];
		
			if( leftChildNode == null && rightChildNode == null ){
				//Deleted directly.
				var removeNode = circleArr[(deleteIndex-1)];
				var insteadNode = circleArr[(originalIndex-1)];
				
				console.log(circleArr[(deleteIndex-1)]+'/'+circleArr[(originalIndex-1)]);
				
				var delX = Math.round(d3.transform(d3.select("#group"+removeNode).attr("transform")).translate[0]);
				var delY = Math.round(d3.transform(d3.select("#group"+removeNode).attr("transform")).translate[1]);
				xLine = Math.round(d3.select("#line"+removeNode).attr("x1"));
				yLine = Math.round(d3.select("#line"+removeNode).attr("y1"));
				xLineEnd = Math.round(d3.select("#line"+removeNode).attr("x2"));
				yLineEnd = Math.round(d3.select("#line"+removeNode).attr("y2"));
		
				svgSelection.select("#group"+removeNode).remove();
				svgSelection.select("#line"+removeNode).remove();	
				d3.select("#group"+insteadNode).transition().duration(1500).attr("transform", "translate("+delX+","+delY+")");
				tempNodeNumber = insteadNode;
				line.changeLinePos();
				
				nodeArray[(deleteIndex-1)] = originalNode;
				nodeArray[(originalIndex)-1] = null;
				circleArr[(deleteIndex-1)] = circleArr[(originalIndex)-1];
				circleArr[(originalIndex)-1] = null;
				searchTag = false;
			}
			else if( leftChildNode == null && rightChildNode != null ){
				//All right children move upward.
				this.replaceAbovePlace(originalIndex, originalNode, leftChildIndex, leftChildNode, rightChildIndex, rightChildNode, deleteIndex);     //Children nodes replace above place
				searchTag = false;
			}
			else if( leftChildNode != null ){
				//Find smallest node again.
				originalIndex = leftChildIndex;
				originalNode = leftChildNode;
				searchTag = true;
			}
		}
	}
	
	//Children nodes replace above place
	this.replaceAbovePlace = function(originalIndex, originalNode, leftChildIndex, leftChildNode, rightChildIndex, rightChildNode, deleteIndex) {
		nodeArray[(deleteIndex)-1] = originalNode;
		circleArr[(deleteIndex)-1] = originalIndex;
		
		nodeArray[(originalIndex-1)] = rightChildNode;
		nodeArray[(originalIndex-2)] = leftChildNode;
		circleArr[(originalIndex-1)] = rightChildIndex;
		circleArr[(originalIndex-2)] = leftChildIndex;
		
		while( leftChildNode != null || rightChildNode != null ){
			originalIndex = rightChildIndex;
			leftChildIndex = 2*originalIndex;
			rightChildIndex = (2*originalIndex)+1;
			leftChildNode = nodeArray[(leftChildIndex-1)];
			rightChildNode = nodeArray[(rightChildIndex-1)];
				
			nodeArray[(originalIndex-1)] = rightChildNode;
			nodeArray[(originalIndex-2)] = leftChildNode;
			circleArr[(originalIndex-1)] = rightChildIndex;
			circleArr[(originalIndex-2)] = leftChildIndex;
		}
		
		leftChildNode = nodeArray[(leftChildIndex-1)];
		rightChildNode = nodeArray[(rightChildIndex-1)];
			
		nodeArray[(originalIndex-1)] = leftChildNode;
		nodeArray[originalIndex] = rightChildNode;
		circleArr[(originalIndex-1)] = rigleftChildIndex;
		circleArr[originalIndex] = rightChildIndex;
	}
	xLine = 365, yLine = 10;
	xLineEnd = 365, yLineEnd = 10;
}

var delPredesessor = new deletePredesessor();
var delSuccessor = new deleteSuccessor();