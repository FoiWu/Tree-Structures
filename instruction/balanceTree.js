//Balance tree at one time.

var nodeArray = new Array();      //Array of nodes.
var bfArray = new Array();      //Array of balance factor.
var checkBFArr = new Array();      //BF of be checked.
var circleArr = new Array();     //Record position of circles.
var changeNodeArr = new Array();       //Record position of node that need be changed.
var changeChildrenArr = new Array();       //Record position of children node that need be changed.
var checkIndex, getBF;	       //Index of be checked.
var repeat = 0, nodeNoAVL = 0;         //nodeNoAVL:Node of has been presented; level:Check whether the current position was empty or full.
var isRotate = false;
var data, currentData, currentBF, nodeNumber = 0, lrTag = null, translation = false, level = 0, lastLevel, bfChangedNode = 0, tree = 1, rotateAgainTag = null;
//lastLevel:Set true, if the level is last one; tree==1:avl tree

//
//Build avl tree.
//	
var showAllTree = function(){
	var currentPos, index=1, tree = 1;    
	//index:Index of node, currentPos:Current position, data:Current data.
	
	//
	//Show all node at one time.
	this.buildTree = function(){
		for( nodeAVL = 0; nodeAVL <= 6; nodeAVL++ ){
			//
			//Show nodes, besides first and second one.
			if( nodeNoAVL >= 2 ){              	
				data = dataArray[nodeNoAVL];    
				repeat=1;
				level=0;
				index=1;            //Compare root first.
				lastLevel=false;
			
				while( repeat >= 1 ){        //Keeping check current position when repeat >=1.
					currentPos = nodeArray[(index-1)];     //Update be compared node.				
					
					if( currentPos != null || currentPos != undefined ){ 
						if( data <= currentPos ){     //Left subtree.
							if( lrTag == false ){
								translation = true;
							}
							else{
								translation = false;
							}
							lrTag = true;
							
							index = index*2;
						}
						else{       //Right subtree.
							if( lrTag == true ){
								translation = true;
							}
							else{
								translation = false;
							}
							lrTag = false;	
							
							index = (index*2)+1;
						}
						repeat++;     //Check again.
						level++; 
						checkOrCal.nodePosition(2);		
					}
					else{
						nodeArray[(index-1)] = data;      //Put number into array.
						currentData = dataArray[nodeNoAVL];
						bfArray[(index-1)] = 0;        //Record balance factor.	
						currentBF = bfArray[(index-1)];
						
						lastLevel = true;
						checkOrCal.nodePosition(2);	
						circleArr[(index-1)] = nodeNoAVL;   						
					}
					repeat--;      //Have checked current position.
				}
			
				this.changeBF(index);
			}
			
			//
			//Second node.
			else if( nodeNoAVL == 1 ){ 
				level++;          
				if( dataArray[nodeNoAVL] < nodeArray[(index-1)] ){       //Left node.
					bfArray[(index-1)] = 1;        //Record balance factor of node of last level.	
					index = index * 2;
					lrTag = true;
					currentBF = 1;
					
					generate.changeBF(bfChangedNode, currentBF);
				}
				else{          //Right node.
					bfArray[(index-1)] = -1;        //Record balance factor of node of last level.	
					index = (index * 2)+1;
					lrTag = false;
					currentBF = -1;
					
					generate.changeBF(bfChangedNode, currentBF);
				}
				nodeArray[(index-1)] = dataArray[nodeNoAVL];      //Second node be a left child of node of last level.	
				currentData = dataArray[nodeNoAVL];
				bfArray[(index-1)] = 0;        //Record balance factor.	
				currentBF = bfArray[(index-1)];
				checkOrCal.nodePosition(2);	
				lastLevel = true;
				checkOrCal.nodePosition(2);	
				circleArr[(index-1)] = nodeNoAVL;   
			}
			
			//
			//Root.
			else if( nodeNoAVL == 0 ){          			
				nodeArray[(index-1)] = dataArray[nodeNoAVL];      //Put root into nodeArray[0].	
				currentData = dataArray[nodeNoAVL];
				bfArray[(index-1)] = 0;        //Record balance factor.
				currentBF = bfArray[(index-1)];
				checkOrCal.nodePosition(2);
				circleArr[(index-1)] = nodeNoAVL;
			}
				
			nodeNoAVL++;      //Next node.
			nodeNumber = nodeNoAVL;
			
			console.log("@"+bfArray);
			console.log("@"+nodeArray);
			console.log("@"+circleArr);
			
			rotateTree.init();
		}
	}

	//
	//Change Balance Factor when insert a node.
	this.changeBF = function(currentIndex){
		var currentNode = nodeArray[(currentIndex-1)];        //Current node.
		var parentIndex = Math.floor(currentIndex/2);
		var tempParentIndex = parentIndex;
		
		if( currentIndex % 2 == 0 ){            //Even
			bfArray[(parentIndex-1)] = bfArray[(parentIndex-1)] + 1;
			if( nodeArray[(currentIndex-1)+1] == null ){
				this.processParentBF(tempParentIndex);
			}
		}
		else if( currentIndex % 2 == 1 ){               //Odd
			bfArray[(parentIndex-1)] = bfArray[(parentIndex-1)] - 1;
			if( nodeArray[(currentIndex-1)-1] == null ){
				this.processParentBF(tempParentIndex);
			}
		}
		
		while( checkBFArr.length != 0 ){
			checkBFArr.pop();
		}
		
		while( parentIndex != 0 ){
			checkBFArr.push(parentIndex);
			currentIndex = parentIndex;
			
			//Change BF by animation.
			currentBF = bfArray[(parentIndex-1)];
			bfChangedNode = circleArr[(parentIndex-1)];
			generate.changeBF(bfChangedNode, currentBF);
			
			parentIndex = Math.floor(currentIndex/2);
		}
		
		//
		//Check Balance Factor.
		while( checkBFArr.length != 0 ){
			checkIndex = checkBFArr.shift();
			if( bfArray[(checkIndex-1)] == 2 || bfArray[(checkIndex-1)] == -2 ){
				//if balance factor is 2 or -2, the tree need be rotated.
				//alert(bfArray+"/"+checkIndex+"/"+nodeArray+'/'+circleArr);
				this.rotateTree(checkIndex);
				isRotate = true;
				break;
			}
			else{
				isRotate = false;	
			}	
		}
	}
	
	this.processParentBF = function(parentIndex){
		while( parentIndex != 1 ){
			if( parentIndex % 2 == 0 ){
				parentIndex = Math.floor(parentIndex/2);
				bfArray[(parentIndex-1)] = bfArray[(parentIndex-1)] + 1;
				currentBF = bfArray[(parentIndex-1)];
			}
			else if( parentIndex % 2 == 1 ){
				parentIndex = Math.floor(parentIndex/2);
				bfArray[(parentIndex-1)] = bfArray[(parentIndex-1)] - 1;
				currentBF = bfArray[(parentIndex-1)];
			}
		}
	}	
	
	//
	//Rotate the tree.
	this.rotateTree = function(vIndex){
		var pIndex = Math.floor(vIndex/2);
		var rIndex = (vIndex*2)+1;
		var lIndex = vIndex*2;
		var llIndex = lIndex*2;
		var lrIndex = (lIndex*2)+1;
		var rrIndex = (rIndex*2)+1;
		var rlIndex = rIndex*2;
		var tempIndex=0, kindOfCase=null;

		if( bfArray[(vIndex-1)] == 2 ){       //L
			//
			//LL 
			if( bfArray[(lIndex-1)] == 1 || bfArray[(lIndex-1)] == 2 ){ 
				//Check right child whether empty or not.
				if( nodeArray[(rIndex-1)] != null || nodeArray[(rIndex-1)] != undefined ){
					circleArr[(rrIndex-1)] = circleArr[(rIndex-1)];
					circleArr[(rIndex-1)] = null;
					
					nodeArray[(rrIndex-1)] = nodeArray[(rIndex-1)];
					nodeArray[(rIndex-1)] = null;
					
					bfArray[(rrIndex-1)] = 0;
					bfArray[(rIndex-1)] = null;
					
					changeChildrenArr[1] = circleArr[(rrIndex-1)];
				} 
				
				kindOfCase = 1;
				
				changeNodeArr[tempIndex] = circleArr[(vIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(lIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = null;
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(llIndex-1)];
				
				rotateTree.rotate(kindOfCase);     
				
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(rIndex-1)] = nodeArray[(vIndex-1)];      
				nodeArray[(vIndex-1)] = nodeArray[(lIndex-1)];
				nodeArray[(lIndex-1)] = nodeArray[(llIndex-1)];
				nodeArray[(llIndex-1)] = null;
				
				bfArray[(rIndex-1)] = bfArray[(vIndex-1)] -2;
				bfArray[(vIndex-1)] = bfArray[(lIndex-1)] -1;
				bfArray[(lIndex-1)] = bfArray[(llIndex-1)];
				bfArray[(llIndex-1)] = null;
			
				//Change position of vIndex, lIndex and rIndex.
				circleArr[(rIndex-1)] = circleArr[(vIndex-1)];      
				circleArr[(vIndex-1)] = circleArr[(lIndex-1)];
				circleArr[(lIndex-1)] = circleArr[(llIndex-1)];
				circleArr[(llIndex-1)] = null;
				
				//Check the left child of left child of left child whether empty or not.
				if( nodeArray[((llIndex*2)-1)] != null || nodeArray[((llIndex*2)-1)] != undefined ){
					nodeArray[(llIndex-1)] = nodeArray[((llIndex*2)-1)];
					nodeArray[((llIndex*2)-1)] = null;
					
					bfArray[(llIndex-1)] = 0;
					bfArray[((llIndex*2)-1)] = null;
					
					circleArr[(llIndex-1)] = circleArr[((llIndex*2)-1)];  
					circleArr[((llIndex*2)-1)] = null;
					
					changeChildrenArr[0] = circleArr[(llIndex-1)];
				}
				//check right child of left child empty or not.
				if( nodeArray[(lrIndex-1)] != null || nodeArray[(lrIndex-1)] != undefined ){
					nodeArray[(rlIndex-1)] = nodeArray[(lrIndex-1)];
					nodeArray[(lrIndex-1)] = null;
					
					bfArray[(rlIndex-1)] = 0;
					bfArray[(lrIndex-1)] = null;
					
					circleArr[(rlIndex-1)] = circleArr[(lrIndex-1)];
					circleArr[(lrIndex-1)] = null;
					
					changeChildrenArr[3] = circleArr[(rlIndex-1)];
				} 
				
				//Check right child of left child of left child whether empty or not.
				if( nodeArray[(((llIndex*2)+1)-1)] != null || nodeArray[(((llIndex*2)+1)-1)] != undefined ){
					nodeArray[(lrIndex-1)] = nodeArray[(((llIndex*2)+1)-1)];
					nodeArray[(((llIndex*2)+1)-1)] = null;
					
					if( changeChildrenArr[0] != null ){	
						bfArray[(vIndex-1)] = bfArray[(vIndex-1)] -1; 
						bfArray[(rIndex-1)] = bfArray[(rIndex-1)] -1;  
						bfArray[(((llIndex*2)+1)-1)] = null;
					}
					
					bfArray[(lrIndex-1)] = 0;	
					
					circleArr[(lrIndex-1)] = circleArr[(((llIndex*2)+1)-1)];  
					circleArr[(((llIndex*2)+1)-1)] = null;
					
					changeChildrenArr[2] = circleArr[(lrIndex-1)];
				}
				if( changeChildrenArr.length != 0 ){
					rotateTree.rotateChildren(kindOfCase);
				}
			}
			
			//
			//LR 
			else if( bfArray[(lIndex-1)] == -1 ){ 
				//Check left child of left child whether empty or not.
				if( nodeArray[(llIndex-1)] != null || nodeArray[(llIndex-1)] != undefined ){
					nodeArray[((llIndex*2)-1)] = nodeArray[(llIndex-1)];
					
					circleArr[((llIndex*2)-1)] = circleArr[(llIndex-1)];
					
					bfArray[((llIndex*2)-1)] = 0;
					
					changeChildrenArr[0] = circleArr[((llIndex*2)-1)];
				} 
				//Check right child of left child whether empty or not.
				if( nodeArray[((lrIndex*2)-1)] != null || nodeArray[((lrIndex*2)-1)] != undefined ){
					nodeArray[(((llIndex*2)+1)-1)] = nodeArray[((lrIndex*2)-1)];
					nodeArray[((lrIndex*2)-1)] = null;
					
					circleArr[(((llIndex*2)+1)-1)] = circleArr[((lrIndex*2)-1)];
					circleArr[((lrIndex*2)-1)] = null;
					
					bfArray[(((llIndex*2)+1)-1)] = 0;
					bfArray[((lrIndex*2)-1)] = null;
					
					changeChildrenArr[2] = circleArr[(((llIndex*2)+1)-1)];
				}		
				
				kindOfCase = 4;
				
				changeNodeArr[tempIndex] = circleArr[(vIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(lIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = null;
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(lrIndex-1)];
				
				//alert(tempIndex+"/"+kindOfCase+"/"+vTag+"/"+changeNodeArr);
				rotateTree.rotate(kindOfCase);     
						
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(llIndex-1)] = nodeArray[(lIndex-1)];      
				nodeArray[(lIndex-1)] = nodeArray[(lrIndex-1)];
				nodeArray[(lrIndex-1)] = null;
				
				bfArray[(llIndex-1)] = 0;
				bfArray[(lIndex-1)] = bfArray[(lrIndex-1)] +1;
				bfArray[(lrIndex-1)] = null;
				
				circleArr[(llIndex-1)] = circleArr[(lIndex-1)];   
				circleArr[(lIndex-1)] = circleArr[(lrIndex-1)];
				circleArr[(lrIndex-1)] = null;  
				
				//Check right child of right child of left child whether empty or not.
				if( nodeArray[(((lrIndex*2)+1)-1)] != null || nodeArray[(((lrIndex*2)+1)-1)] != undefined ){
					nodeArray[(lrIndex-1)] = nodeArray[(((lrIndex*2)+1)-1)];
					nodeArray[(((lrIndex*2)+1)-1)] = null;
					
					circleArr[(lrIndex-1)] = circleArr[(((lrIndex*2)+1)-1)];
					circleArr[(((lrIndex*2)+1)-1)] = null;
					
					bfArray[(lrIndex-1)] = 0;
					bfArray[(llIndex-1)] = bfArray[(lIndex-1)] +1;
					bfArray[(lIndex-1)] = bfArray[(lrIndex-1)] +1;
					bfArray[(((lrIndex*2)+1)-1)] = null;
					
					changeChildrenArr[3] = circleArr[(lrIndex-1)];
				}
				if( changeChildrenArr.length != 0 ){
					rotateTree.rotateChildren(kindOfCase);
				}
				
				if(  vIndex == 3 ){ 
					bfArray[(pIndex-1)] = bfArray[(pIndex-1)] -1;
				}
				else if( vIndex == 2 ){
					bfArray[(pIndex-1)] = bfArray[(pIndex-1)] +1;
				}
			}
		}
		
		else if( bfArray[(vIndex-1)] == -2 ){       //R
			//
			//RL 
			if( bfArray[(rIndex-1)] == 1 ){ 
				//Check left child whether empty or not.
				if( nodeArray[(rrIndex-1)] != null || nodeArray[(rrIndex-1)] != undefined ){
					nodeArray[(((rrIndex*2)+1)-1)] = nodeArray[(rrIndex-1)];
					
					circleArr[(((rrIndex*2)+1)-1)] = circleArr[(rrIndex-1)];
					
					bfArray[(((rrIndex*2)+1)-1)] = 0;
					
					changeChildrenArr[0] = circleArr[(((rrIndex*2)+1)-1)];
				}
				
				kindOfCase = 3;
				
				changeNodeArr[tempIndex] = circleArr[(vIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(rIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = null;
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(rlIndex-1)];
				
				//alert(tempIndex+"/"+kindOfCase+"/"+vTag+"/"+changeNodeArr);
				rotateTree.rotate(kindOfCase); 
				
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(rrIndex-1)] = nodeArray[(rIndex-1)];      
				nodeArray[(rIndex-1)] = nodeArray[(rlIndex-1)];
				nodeArray[(rlIndex-1)] = null;
				
				bfArray[(rrIndex-1)] = 0;
				bfArray[(rIndex-1)] = bfArray[(rlIndex-1)] -1;
				bfArray[(rlIndex-1)] = null;
				
				circleArr[(rrIndex-1)] = circleArr[(rIndex-1)];      
				circleArr[(rIndex-1)] = circleArr[(rlIndex-1)];
				circleArr[(rlIndex-1)] = null;    
				
				//Check left child of left child of right child whether empty or not.
				if( nodeArray[((rlIndex*2)-1)] != null || nodeArray[((rlIndex*2)-1)] != undefined ){
					nodeArray[(rlIndex-1)] = nodeArray[((rlIndex*2)-1)];
					nodeArray[((rlIndex*2)-1)] = null;
					
					circleArr[(rlIndex-1)] = circleArr[((rlIndex*2)-1)];
					circleArr[((rlIndex*2)-1)] = null;
					
					bfArray[(rlIndex-1)] = 0;
					bfArray[(rrIndex-1)] = bfArray[(rIndex-1)] -1;
					bfArray[(rIndex-1)] = bfArray[(rlIndex-1)] -1;
					bfArray[((rlIndex*2)-1)] = null;
					
					changeChildrenArr[2] = circleArr[(rlIndex-1)];
				} 
				
				//Check right child of left child of right child whether empty or not.
				if( nodeArray[(((rlIndex*2)+1)-1)] != null || nodeArray[(((rlIndex*2)+1)-1)] != undefined ){
					nodeArray[((rrIndex*2)-1)] = nodeArray[(((rlIndex*2)+1)-1)];
					nodeArray[(((rlIndex*2)+1)-1)] = null;
					
					circleArr[((rrIndex*2)-1)] = circleArr[(((rlIndex*2)+1)-1)];
					circleArr[(((rlIndex*2)+1)-1)] = null;
					
					bfArray[((rrIndex*2)-1)] = 0;
					bfArray[(((rlIndex*2)+1)-1)] = null;
					
					changeChildrenArr[3] = circleArr[((rrIndex*2)-1)];
				}	
				if( changeChildrenArr.length != 0 ){
					rotateTree.rotateChildren(kindOfCase);
				}	
				
				if(  vIndex == 3 ){ 
					bfArray[(pIndex-1)] = bfArray[(pIndex-1)] -1;
				}
				else if( vIndex == 2 ){
					bfArray[(pIndex-1)] = bfArray[(pIndex-1)] +1;
				}
			}
			
			//
			//RR 
			else if( bfArray[(rIndex-1)] == -1 || bfArray[(rIndex-1)] == -2 ){     
			   	//Check left child whether empty or not.
				if( nodeArray[(lIndex-1)] != null || nodeArray[(lIndex-1)] != undefined ){
					nodeArray[(llIndex-1)] = nodeArray[(lIndex-1)];
					nodeArray[(lIndex-1)] = null;
					
					circleArr[(llIndex-1)] = circleArr[(lIndex-1)];
					circleArr[(lIndex-1)] = null;
					
					bfArray[(llIndex-1)] = 0;
					bfArray[(lIndex-1)] = null;
					
					changeChildrenArr[1] = circleArr[(llIndex-1)];
				}  
				
				kindOfCase = 2;
				
				changeNodeArr[tempIndex] = circleArr[(vIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(rIndex-1)];
				tempIndex++;
				changeNodeArr[tempIndex] = null;
				tempIndex++;
				changeNodeArr[tempIndex] = circleArr[(rrIndex-1)];
				
				//alert(tempIndex+"/"+kindOfCase+"/"+vTag+"/"+changeNodeArr);
				rotateTree.rotate(kindOfCase);     
			   
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(lIndex-1)] = nodeArray[(vIndex-1)];      
				nodeArray[(vIndex-1)] = nodeArray[(rIndex-1)];
				nodeArray[(rIndex-1)] = nodeArray[(rrIndex-1)];
				nodeArray[(rrIndex-1)] = null;
				
				bfArray[(lIndex-1)] = bfArray[(vIndex-1)] +2;
				bfArray[(vIndex-1)] = bfArray[(rIndex-1)] +1;
				bfArray[(rIndex-1)] = bfArray[(rrIndex-1)];
				bfArray[(rrIndex-1)] = null;
		
				circleArr[(lIndex-1)] = circleArr[(vIndex-1)];    
				circleArr[(vIndex-1)] = circleArr[(rIndex-1)];
				circleArr[(rIndex-1)] = circleArr[(rrIndex-1)];
				circleArr[(rrIndex-1)] = null;
				
				//Check right child of right child of right child whether empty or not.
				if( nodeArray[(((rrIndex*2)+1)-1)] != null || nodeArray[(((rrIndex*2)+1)-1)] != undefined ){
					nodeArray[(rrIndex-1)] = nodeArray[(((rrIndex*2)+1)-1)];
					nodeArray[(((rrIndex*2)+1)-1)] = null;
					
					circleArr[(rrIndex-1)] = circleArr[(((rrIndex*2)+1)-1)];
					circleArr[(((rrIndex*2)+1)-1)] = null;
					
					bfArray[(rrIndex-1)] = 0;
					bfArray[(((rrIndex*2)+1)-1)] = null;
					
					changeChildrenArr[0] = circleArr[(rrIndex-1)];
				}
				
				//Check left child of right child whether empty or not.
				if( nodeArray[(rlIndex-1)] != null || nodeArray[(rlIndex-1)] != undefined ){
					nodeArray[(lrIndex-1)] = nodeArray[(rlIndex-1)];
					nodeArray[(rlIndex-1)] = null;
					
					circleArr[(lrIndex-1)] = circleArr[(rlIndex-1)];
					circleArr[(rlIndex-1)] = null;
					
					bfArray[(lrIndex-1)] = 0;
					bfArray[(rlIndex-1)] = null;
					
					changeChildrenArr[2] = circleArr[(lrIndex-1)];
				}
				
				//Check left child of right child of right child whether empty or not.
				if( nodeArray[((rrIndex*2)-1)] != null || nodeArray[((rrIndex*2)-1)] != undefined ){
					nodeArray[(rlIndex-1)] = nodeArray[((rrIndex*2)-1)];
					nodeArray[((rrIndex*2)-1)] = null;
					
					circleArr[(rlIndex-1)] = circleArr[((rrIndex*2)-1)];
					circleArr[((rrIndex*2)-1)] = null;
					
					if( changeChildrenArr[0] != null ){	
						bfArray[(vIndex-1)] = bfArray[(vIndex-1)] +1; 
						bfArray[(lIndex-1)] = bfArray[(lIndex-1)] +1;   
						bfArray[((rrIndex*2)-1)] = null;
					}
					
					bfArray[(rlIndex-1)] = 0;
					
					changeChildrenArr[3] = circleArr[(rlIndex-1)];
				}
				if( changeChildrenArr.length != 0 ){
					rotateTree.rotateChildren(kindOfCase);
				}
			}
		}
		
		while( pIndex != 0 ){
			if( vIndex % 2 == 0 ){	    //L		
				bfArray[(pIndex-1)] = bfArray[(pIndex-1)] - 1;
			}
			else if( vIndex % 2 == 1 ){      //R            
				bfArray[(pIndex-1)] = bfArray[(pIndex-1)] + 1;
			}
			vIndex = pIndex;
			pIndex = Math.floor(vIndex/2);
		}
	
		console.log(bfArray);
		console.log(nodeArray);
		console.log(circleArr);
		
		//Change BF.
		for( var j = 0; j <= (circleArr.length-1); j++ ){
			if( circleArr[j] != null ){
				generate.changeBF(circleArr[j], bfArray[j]);
			}
		}
		
		//alert(kindOfCase);
		
		if( kindOfCase == 4 || kindOfCase == 3 ){
			var tempChange;
			tempChange = changeNodeArr[1];
			changeNodeArr[1] = changeNodeArr[3];
			changeNodeArr[3] = tempChange;
			rotateAgainTag = true;
			this.rotateTree(checkIndex);
			isRotate = true;
		}
		else{
			isRotate = false;
		}
	}
}

var show = new showAllTree();