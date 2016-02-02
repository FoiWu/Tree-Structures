//
//Search node step by step.
//For 2-3-4 tree.

var pathNodeArray = new Array();      //Array of search's node.

var searchBTree = function(){
	var index, data, checkNode, childPos, nodeTag, searchTag;        
	//data:The data needs pushed; currentNode:The array needs checked; childPos:Record position of child.
		
	this.searchANode = function(){
		var input = parseInt(document.getElementById("tree-input").value);      //input:Number by user input.
		
		while (pathNodeArray.length != 0 ){      //Clean pathNodeArray and pathIndexArray first.
			pathNodeArray.pop();
		}
		
		//nodeTag:Tag of node(array); searchTag:Tag of element.
		for( nodeTag = 0; nodeTag <= arrNumber; nodeTag++ ){
			for( searchTag = 0; searchTag <= 3; searchTag++ ){
				if( input == eval("nodeArr"+nodeTag+"[searchTag]") ){
					data = input; 
					this.findData();
					break;	
				}
			}
		}
		console.log(pathNodeArray);	
	}
	
	this.findData = function(){
		pathNodeArray.push(data);
		
		//Check how many element that parent node has.
		checkNode = eval("nodeArr"+nodeTag+"[8]"); 
			
		if( eval("nodeArr"+checkNode+"[3]") == null ){       //parent node has one element.
			data = eval("nodeArr"+checkNode+"[0]");
			pathNodeArray.push(data);
		}
		else if( eval("nodeArr"+checkNode+"[3]") != null ){         //parent node has two elements.   
			for( var j = 4; j <= 7; j++ ){
				if( nodeTag == eval("nodeArr"+checkNode+"[j]") ){
					childPos = j;
					break;	
				}
			}
		
			switch( childPos ){
				case 4:       //Left child.
					data = eval("nodeArr"+checkNode+"[0]");
					pathNodeArray.push(data);	
					break; 
					 
				case 5:       //Center-left child.
					if( eval("nodeArr"+checkNode+"[2]") != null ){       //parent node has three elements.
						data = eval("nodeArr"+checkNode+"[0]");
						pathNodeArray.push(data);
						data = eval("nodeArr"+checkNode+"[2]");
						pathNodeArray.push(data);
					}
					else{         //parent node has two elements.  
						data = eval("nodeArr"+checkNode+"[0]");
						pathNodeArray.push(data);
						data = eval("nodeArr"+checkNode+"[3]");
						pathNodeArray.push(data); 	
					}
					break;
					
				case 6:       //Center-right child.
					if( eval("nodeArr"+checkNode+"[2]") != null ){       //parent node has three elements.
						data = eval("nodeArr"+checkNode+"[2]");
						pathNodeArray.push(data);
						data = eval("nodeArr"+checkNode+"[3]");
						pathNodeArray.push(data);	
					}
					else{         //parent node has two elements.  
						data = eval("nodeArr"+checkNode+"[0]");
						pathNodeArray.push(data);
						data = eval("nodeArr"+checkNode+"[3]");
						pathNodeArray.push(data);	
					}  
					break;
					
				case 7:       //Right child.
					data = eval("nodeArr"+checkNode+"[3]");
					pathNodeArray.push(data);
					break;  
			}	
		}
		
		checkNode = eval("nodeArr"+checkNode+"[8]");  
		if( checkNode != null ){
			data = eval("nodeArr"+checkNode+"[0]");
			pathNodeArray.push(data);
		}
	}
}

var searchNode = new searchBTree();