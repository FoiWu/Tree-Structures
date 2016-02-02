//For traversal.

var nodeArray = new Array();      //Array of nodes.
var colorArr = new Array();      //Array of color.
var currentIndexTra, rotationKindTra, vTagTra;	       //currentIndexTra:Current node; rotationKindTra:Determine what kind of rotation, 1:not has angle; 2:has angle; vTagTra:Record what kind of child of visit node.
var levelTra = 0, nodeRBTra;         //nodeRBTra:Node of has been presented; levelTra:Check whether the current position was empty or full.
var isRotateTra = false;
var pIndexTra = Math.floor(currentIndexTra/2);       
var gIndexTra = Math.floor(pIndexTra/2);           
var uIndexTra;           //gIndexTra:Index of grandparent; uIndexTra:Index of uncle; pIndexTra:Index of parent

//
//Build avl tree.
//	
var showAll = function(){
	//
	//Show all node at one time.
	this.buildTree = function(){
		var currentPos, data, index=1;      
		//index:Index of node, currentPos:Current position, data:Current data.
			
		for( nodeRBTra = 0; nodeRBTra <= 6; nodeRBTra++ ){
			//
			//Show nodes, besides first and second one.
			if( nodeRBTra >= 2 ){              	
				data = dataArray[nodeRBTra];    
				levelTra=1;
				index=1;            //Compare root first.
			
				while( levelTra >= 1 ){        //Keeping check current position when levelTra >=1.
					currentPos = nodeArray[(index-1)];     //Update be compared node.
					
					if( currentPos != null || currentPos != undefined ){
						if( data <= currentPos ){     //Left subtree.
							index = index*2;
						}
						else{       //Right subtree.
							index = (index*2)+1;
						}
						levelTra++;     //Check again.
					}
					else{
						nodeArray[(index-1)] = data;      //Put number into array.
						colorArr[(index-1)] = "Red";        //Record balance factor.							
					}
					levelTra--;      //Have checked current position.
				}
				currentIndexTra = index;
				this.checkColor(currentIndexTra);
			}
			
			//
			//Second node.
			else if( nodeRBTra == 1 ){           
				if( dataArray[nodeRBTra] < nodeArray[(index-1)] ){       //Left node.	
					index = index * 2;
				}
				else{          //Right node.	
					index = (index * 2)+1;
				}
				nodeArray[(index-1)] = dataArray[nodeRBTra];      //Second node be a left child of node of last levelTra.	
				colorArr[(index-1)] = "Red";         //Record color.		
			}
			
			//
			//Root.
			else if( nodeRBTra == 0 ){          			
				nodeArray[(index-1)] = dataArray[nodeRBTra];      //Put root into nodeArray[0].	
				colorArr[(index-1)] = "Black";        //Record color.
			}
			
			console.log(nodeArray);
			console.log(colorArr);
		}
	}
	
	//
	//Check color of node.
	this.checkColor = function(){
		var uncleTag;        //Record what kind of child of uncle.
		pIndexTra = Math.floor(currentIndexTra/2);
		gIndexTra = Math.floor(pIndexTra/2);
		
		//Determine the visit node is left child or right child? 
		if( currentIndexTra % 2 == 0 ){
			vTagTra = 0;      //visit node is right child. 
		}
		else{
			vTagTra = 1;     //visit node is left child. 	
		}
		
		//Determine the uncle is left child or right child? 
		if( pIndexTra % 2 == 0 ){
			uIndexTra = pIndexTra + 1;      //Uncle is right child of currentIndexTra. 
			uncleTag = 1;
		}
		else{
			uIndexTra = pIndexTra - 1;      //Uncle is left child of currentIndexTra. 
			uncleTag = 0;	
		}
		
		//If parent node is red, it need to be process.
		if( colorArr[(pIndexTra-1)] == "Red" ){
			if( colorArr[(uIndexTra-1)] == "Red" ){
			//If uncle node is red, parent and uncle change to black, grandparent change to red.
			rotateForTraversal.changeColor(1);
			}	
			else if( colorArr[(uIndexTra-1)] == "Black" || colorArr[(uIndexTra-1)] == null || colorArr[(uIndexTra-1)] == undefined ){
				if( (uncleTag == 1 && vTagTra == 0) || (uncleTag == 0 && vTagTra == 1) ){
				//Uncle node is black, and path of visit node to grandparent not has angle.
					rotationKindTra = 1;
					isRotateTra = true;
					rotateForTraversal.checkKind(rotationKindTra);
				}
				else if( (uncleTag == 1 && vTagTra == 1) || (uncleTag == 0 && vTagTra == 0) ){
				//Uncle node is black, and path of visit node to grandparent has angle.
					rotationKindTra = 2;
					isRotateTra = true;
					rotateForTraversal.checkKind(rotationKindTra);
				}
			}	
		}
	}
}

//
//Rotate the tree.
var rotateTreeForTraversal = function(){	
	//
	//Check the kind of the rotation. 
	this.checkKind = function(kind){
		//path of visit node to grandparent not has angle.
		if( kind == 1 ){
			this.rotateNoAngle();
		}
		//path of visit node to grandparent has angle.
		else{
			this.rotateAngle();
		}
	}
	
	//
	//
	this.rotateNoAngle = function(){
		if( vTagTra == 0 ){          //Visit node is left child, so the tree need right rotate.
			//uIndexTra = pIndexTra + 1;       //Index is right child of grandparent.
			
			nodeArray[((uIndexTra*2)+1)-1] = nodeArray[(uIndexTra-1)];			
		}
		else{            //Visit node is right child, so the tree need left rotate.
			//uIndexTra = pIndexTra - 1;        //Index is left child of grandparent.
			
			nodeArray[(uIndexTra*2)-1] = nodeArray[(uIndexTra-1)];
		}
		
		nodeArray[(uIndexTra-1)] = nodeArray[(gIndexTra-1)];
		nodeArray[(gIndexTra-1)] = nodeArray[(pIndexTra-1)];
		nodeArray[(pIndexTra-1)] = nodeArray[(currentIndexTra-1)];
		nodeArray[(currentIndexTra-1)] = null;
		
		this.changeColor(2);
	}
	
	//
	//
	this.rotateAngle = function(){
		if( vTagTra == 1 ){          //Visit node is right child, so the tree need right rotate.
			uIndexTra = pIndexTra + 1;       //Index is right child of grandparent.
			
			nodeArray[((pIndexTra*2)-1)] = nodeArray[(pIndexTra-1)];	
			
			vTagTra = 0;	
		}
		else{            //Visit node is left child, so the tree need left rotate.
			uIndexTra = pIndexTra - 1;        //Index is left child of grandparent.
			
			nodeArray[(((pIndexTra*2)+1)-1)] = nodeArray[(pIndexTra-1)];	
		
			vTagTra = 1;
		}
		nodeArray[(pIndexTra-1)] = nodeArray[(currentIndexTra-1)];
		nodeArray[(currentIndexTra-1)] = null;
		colorArr[(currentIndexTra-1)] = null;	 
		
		if( vTagTra == 0 ){          //Visit node is right child, so the tree need right rotate.
			currentIndexTra = pIndexTra*2;
		}
		else{            //Visit node is left child, so the tree need left rotate.
			currentIndexTra = (pIndexTra*2)+1;
		}
		
		this.rotateNoAngle();
	}
	
	//
	//Change color of tree.
	this.changeColor = function(colorCase){
		pIndexTra = Math.floor(currentIndexTra/2);       
		//Index of parent
		gIndexTra = Math.floor(pIndexTra/2);           
		//Index of grandparent
		
		if( colorCase == 1 ){
			colorArr[(gIndexTra-1)] = "Red";
			colorArr[(uIndexTra-1)] = "Black";
			colorArr[(pIndexTra-1)] = "Black";
			
			currentIndexTra = gIndexTra;
			
			allNode.checkColor();
		}
		else if( colorCase == 2 ){
			colorArr[(gIndexTra-1)] = "Black";
			colorArr[(uIndexTra-1)] = "Red";
			colorArr[(pIndexTra-1)] = "Red";
			colorArr[(currentIndexTra-1)] = null;
		}
		
		colorArr[0] = "Black";      //Root have to be set BLACK.
		
		console.log(nodeArray);
		console.log(colorArr);
		
		isRotateTra = false;
	}
}

var rotateForTraversal = new rotateTreeForTraversal();
var allNode = new showAll();