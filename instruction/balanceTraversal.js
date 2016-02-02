//For traversal.

var nodeArray = new Array();      //Array of nodes.
var bfArray = new Array();      //Array of balance factor.
var checkBFArr = new Array();      //BF of be checked.
var checkIndex;	       //Index of be checked.
var levelTra = 0, nodeAVLTra = 0;         //nodeAVLTra:Node of has been presented; levelTra:Check whether the current position was empty or full.

//
//Build avl tree.
//	
var showAll = function(){
	var currentPosTra, dataTra, indexTra=1;      
	//indexTra:Index of node, currentPosTra:Current position, dataTra:Current data.
	//
	//Show all node at one time.
	this.buildTree = function(){
		for( nodeAVLTra = 0; nodeAVLTra <= 6; nodeAVLTra++ ){
			if( nodeAVLTra >= 2 ){              	
				dataTra = dataArray[nodeAVLTra];    
				levelTra=1;
				indexTra=1;            //Compare root first.
			
				while( levelTra >= 1 ){        //Keeping check current position when levelTra >=1.
					currentPosTra = nodeArray[(indexTra-1)];     //Update be compared node.
					
					if( currentPosTra != null || currentPosTra != undefined ){
						if( dataTra <= currentPosTra ){     //Left subtree.
							indexTra = indexTra*2;
						}
						else{       //Right subtree.
							indexTra = (indexTra*2)+1;
						}
						levelTra++;     //Check again.
					}
					else{
						nodeArray[(indexTra-1)] = dataTra;      //Put number into array.
						bfArray[(indexTra-1)] = 0;        //Record balance factor.							
					}
					levelTra--;      //Have checked current position.
				}
				this.changeBF(indexTra);
			}
			
			//
			//Second node.
			else if( nodeAVLTra == 1 ){           
				if( dataArray[nodeAVLTra] < nodeArray[(indexTra-1)] ){       //Left node.
					bfArray[(indexTra-1)] = 1;        //Record balance factor of node of last level.	
					indexTra = indexTra * 2;
				}
				else{          //Right node.
					bfArray[(indexTra-1)] = -1;        //Record balance factor of node of last level.	
					indexTra = (indexTra * 2)+1;
				}
				nodeArray[(indexTra-1)] = dataArray[nodeAVLTra];      //Second node be a left child of node of last level.	
				bfArray[(indexTra-1)] = 0;        //Record balance factor.		
			}
			
			//
			//Root.
			else if( nodeAVLTra == 0 ){          			
				nodeArray[(indexTra-1)] = dataArray[nodeAVLTra];      //Put root into nodeArray[0].	
				bfArray[(indexTra-1)] = 0;        //Record balance factor.
			}
			
			console.log("t:"+nodeArray);
			console.log("t:"+bfArray);
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
			parentIndex = Math.floor(currentIndex/2);
		}
		
		//
		//Check Balance Factor.
		while( checkBFArr.length != 0 ){
			checkIndex = checkBFArr.shift();
			if( bfArray[(checkIndex-1)] == 2 || bfArray[(checkIndex-1)] == -2 ){					
				this.rotateTree(checkIndex);       //if balance factor is 2 or -2, the tree need be rotated.
				break;
			}	
		}
	}
	
	this.processParentBF = function(parentIndex){
		while( parentIndex != 1 ){
			if( parentIndex % 2 == 0 ){
				parentIndex = Math.floor(parentIndex/2);
				bfArray[(parentIndex-1)] = bfArray[(parentIndex-1)] + 1;
			}
			else if( parentIndex % 2 == 1 ){
				parentIndex = Math.floor(parentIndex/2);
				bfArray[(parentIndex-1)] = bfArray[(parentIndex-1)] - 1;
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
		var kindOfCase=null;
		
		if( bfArray[(vIndex-1)] == 2 ){       //L
			//
			//LL 
			if( bfArray[(lIndex-1)] == 1 || bfArray[(lIndex-1)] == 2 ){ 
				//Check right child whether empty or not.
				if( nodeArray[(rIndex-1)] != null || nodeArray[(rIndex-1)] != undefined ){
					nodeArray[(rrIndex-1)] = nodeArray[(rIndex-1)];
					nodeArray[(rIndex-1)] = null;
					
					bfArray[(rrIndex-1)] = 0;
					bfArray[(rIndex-1)] = null;
				}  
				
				kindOfCase = 1;    
				
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(rIndex-1)] = nodeArray[(vIndex-1)];      
				nodeArray[(vIndex-1)] = nodeArray[(lIndex-1)];
				nodeArray[(lIndex-1)] = nodeArray[(llIndex-1)];
				nodeArray[(llIndex-1)] = null;
				
				bfArray[(rIndex-1)] = bfArray[(vIndex-1)] -2;
				bfArray[(vIndex-1)] = bfArray[(lIndex-1)] -1;
				bfArray[(lIndex-1)] = bfArray[(llIndex-1)];
				bfArray[(llIndex-1)] = null;
				
				//Check the left child of left child of left child whether empty or not.
				if( nodeArray[((llIndex*2)-1)] != null || nodeArray[((llIndex*2)-1)] != undefined ){
					nodeArray[(llIndex-1)] = nodeArray[((llIndex*2)-1)];
					nodeArray[((llIndex*2)-1)] = null;
					
					bfArray[(llIndex-1)] = 0;
					bfArray[((llIndex*2)-1)] = null;
				}
				//check right child of left child empty or not.
				if( nodeArray[(lrIndex-1)] != null || nodeArray[(lrIndex-1)] != undefined ){
					nodeArray[(rlIndex-1)] = nodeArray[(lrIndex-1)];
					nodeArray[(lrIndex-1)] = null;
					
					bfArray[(rlIndex-1)] = 0;
					bfArray[(lrIndex-1)] = null;
				} 
				
				//Check right child of left child of left child whether empty or not.
				if( nodeArray[(((llIndex*2)+1)-1)] != null || nodeArray[(((llIndex*2)+1)-1)] != undefined ){
					nodeArray[(lrIndex-1)] = nodeArray[(((llIndex*2)+1)-1)];
					nodeArray[(((llIndex*2)+1)-1)] = null;
					
					if( nodeArray[(vIndex-1)] != null ){	
						bfArray[(vIndex-1)] = bfArray[(vIndex-1)] -1; 
						bfArray[(rIndex-1)] = bfArray[(rIndex-1)] -1;  
						bfArray[(((llIndex*2)+1)-1)] = null;
					}
					
					bfArray[(lrIndex-1)] = 0;	
				}
			}
			
			//
			//LR 
			else if( bfArray[(lIndex-1)] == -1 ){       
				//Check left child of left child whether empty or not.
				if( nodeArray[(llIndex-1)] != null || nodeArray[(llIndex-1)] != undefined ){
					nodeArray[((llIndex*2)-1)] = nodeArray[(llIndex-1)];
					
					bfArray[((llIndex*2)-1)] = 0;
				} 
				//Check right child of left child whether empty or not.
				if( nodeArray[((lrIndex*2)-1)] != null || nodeArray[((lrIndex*2)-1)] != undefined ){
					nodeArray[(((llIndex*2)+1)-1)] = nodeArray[((lrIndex*2)-1)];
					nodeArray[((lrIndex*2)-1)] = null;
					
					bfArray[(((llIndex*2)+1)-1)] = 0;
					bfArray[((lrIndex*2)-1)] = null;
				}		
				
				kindOfCase = 4;
				
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(llIndex-1)] = nodeArray[(lIndex-1)];      
				nodeArray[(lIndex-1)] = nodeArray[(lrIndex-1)];
				nodeArray[(lrIndex-1)] = null;
				
				bfArray[(llIndex-1)] = 0;
				bfArray[(lIndex-1)] = bfArray[(lrIndex-1)] +1;
				bfArray[(lrIndex-1)] = null;
				
				//Check right child of right child of left child whether empty or not.
				if( nodeArray[(((lrIndex*2)+1)-1)] != null || nodeArray[(((lrIndex*2)+1)-1)] != undefined ){
					nodeArray[(lrIndex-1)] = nodeArray[(((lrIndex*2)+1)-1)];
					nodeArray[(((lrIndex*2)+1)-1)] = null;
					
					bfArray[(lrIndex-1)] = 0;
					bfArray[(llIndex-1)] = bfArray[(lIndex-1)] +1;
					bfArray[(lIndex-1)] = bfArray[(lrIndex-1)] +1;
					bfArray[(((lrIndex*2)+1)-1)] = null;
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
					
					bfArray[(((rrIndex*2)+1)-1)] = 0;
				}
				
				kindOfCase = 3;
				
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(rrIndex-1)] = nodeArray[(rIndex-1)];      
				nodeArray[(rIndex-1)] = nodeArray[(rlIndex-1)];
				nodeArray[(rlIndex-1)] = null;
				
				bfArray[(rrIndex-1)] = 0;
				bfArray[(rIndex-1)] = bfArray[(rlIndex-1)] -1;
				bfArray[(rlIndex-1)] = null;
				
				//Check left child of left child of right child whether empty or not.
				if( nodeArray[((rlIndex*2)-1)] != null || nodeArray[((rlIndex*2)-1)] != undefined ){
					nodeArray[(rlIndex-1)] = nodeArray[((rlIndex*2)-1)];
					nodeArray[((rlIndex*2)-1)] = null;
					
					bfArray[(rlIndex-1)] = 0;
					bfArray[(rrIndex-1)] = bfArray[(rIndex-1)] -1;
					bfArray[(rIndex-1)] = bfArray[(rlIndex-1)] -1;
					bfArray[((rlIndex*2)-1)] = null;
				} 
				
				//Check right child of left child of right child whether empty or not.
				if( nodeArray[(((rlIndex*2)+1)-1)] != null || nodeArray[(((rlIndex*2)+1)-1)] != undefined ){
					nodeArray[((rrIndex*2)-1)] = nodeArray[(((rlIndex*2)+1)-1)];
					nodeArray[(((rlIndex*2)+1)-1)] = null;
					
					bfArray[((rrIndex*2)-1)] = 0;
					bfArray[(((rlIndex*2)+1)-1)] = null;
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
					
					bfArray[(llIndex-1)] = 0;
					bfArray[(lIndex-1)] = null;
				} 
				
				kindOfCase = 2; 
			   
				//Change position of vIndex, lIndex and rIndex.
				nodeArray[(lIndex-1)] = nodeArray[(vIndex-1)];      
				nodeArray[(vIndex-1)] = nodeArray[(rIndex-1)];
				nodeArray[(rIndex-1)] = nodeArray[(rrIndex-1)];
				nodeArray[(rrIndex-1)] = null;
				
				bfArray[(lIndex-1)] = bfArray[(vIndex-1)] +2;
				bfArray[(vIndex-1)] = bfArray[(rIndex-1)] +1;
				bfArray[(rIndex-1)] = bfArray[(rrIndex-1)];
				bfArray[(rrIndex-1)] = null;
				
				//Check right child of right child of right child whether empty or not.
				if( nodeArray[(((rrIndex*2)+1)-1)] != null || nodeArray[(((rrIndex*2)+1)-1)] != undefined ){
					nodeArray[(rrIndex-1)] = nodeArray[(((rrIndex*2)+1)-1)];
					nodeArray[(((rrIndex*2)+1)-1)] = null;
					
					bfArray[(rrIndex-1)] = 0;
					bfArray[(((rrIndex*2)+1)-1)] = null;
				}
				
				//Check left child of right child whether empty or not.
				if( nodeArray[(rlIndex-1)] != null || nodeArray[(rlIndex-1)] != undefined ){
					nodeArray[(lrIndex-1)] = nodeArray[(rlIndex-1)];
					nodeArray[(rlIndex-1)] = null;
					
					bfArray[(lrIndex-1)] = 0;
					bfArray[(rlIndex-1)] = null;
				}
				
				//Check left child of right child of right child whether empty or not.
				if( nodeArray[((rrIndex*2)-1)] != null || nodeArray[((rrIndex*2)-1)] != undefined ){
					nodeArray[(rlIndex-1)] = nodeArray[((rrIndex*2)-1)];
					nodeArray[((rrIndex*2)-1)] = null;
					
					if( nodeArray[(vIndex-1)] != null ){	
						bfArray[(vIndex-1)] = bfArray[(vIndex-1)] +1; 
						bfArray[(lIndex-1)] = bfArray[(lIndex-1)] +1;   
						bfArray[((rrIndex*2)-1)] = null;
					}
					
					bfArray[(rlIndex-1)] = 0;
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
		
		console.log(kindOfCase+"/"+bfArray);
		console.log(nodeArray);
		
		this.rotationAgain(kindOfCase);
		
		console.log(kindOfCase+"//"+bfArray);
		console.log(nodeArray);
	}
	
	this.rotationAgain = function(kindOfCase){
		if( kindOfCase == 4 || kindOfCase == 3 ){
			console.log(kindOfCase);
			var newVIndex
			if( kindOfCase == 4 ){          //LR rotate again.
				for( var j = (bfArray.length-1); j >= 0; j-- ){
					if( bfArray[j] == 2 && bfArray[((j+1)*2)-1] != 0 ){
						newVIndex = j+1;
						break;
					}
				}
				console.log("v4"+newVIndex+"/"+bfArray[(newVIndex-1)]);
				this.rotateTree(newVIndex);
			}
			else if( kindOfCase == 3 ){      //RL rotate again.
				for( var j = (bfArray.length-1); j >= 0; j-- ){
					if( bfArray[j] == -2 && bfArray[((j+1)*2)] != 0 ){
						newVIndex = j+1;
						break;
					}
				}
				console.log("v3"+newVIndex+"/"+bfArray[(newVIndex-1)]);
				this.rotateTree(newVIndex);
			}
		}
	}
}

var allNode = new showAll();