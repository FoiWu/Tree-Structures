//
//Check position of node for generate nodes.
//For AVL Red-Black trees.
//kind==1:Rotation and change BF; kind==2:Generate BF.

var checkCalPosition = function(){
	//Check or calculate the position of node.
	this.nodePosition = function(kind){
		switch( level ){
			case 0:
				if( tree == 2 ){         //red-black tree.
					kind = 5;
				}
				generate.tree(kind);
				break;
				
			case 1:
				if( lastLevel == true ){
					if( tree == 2 ){         //red-black tree.
						kind = 5;
					}
					generate.tree(kind);
				}
				else{
					yPosEnd = yPosEnd + 40;
					yLineEnd = yLineEnd + 100;
					yLine = yLine + 60;
					if( lrTag == true ){       //Left child.
						xPosEnd = xPosEnd - 160;
						xLineEnd = xLineEnd - 160;
					}
					else{                      //Right child.
						xPosEnd = xPosEnd + 160;
						xLineEnd = xLineEnd + 160;
					}	
				}
				break;
				
			case 2:
				if( lastLevel == true ){
					if( tree == 2 ){         //red-black tree.
						kind = 5;
					}
					generate.tree(kind);
				}
				else{
					yPosEnd = yPosEnd + 50;
					if( lrTag == true ){       //Left child.
						xPosEnd = xPosEnd - 80;
						xLineEnd = xLineEnd - 80;
						yLineEnd = yLineEnd + 50;
						yLine = yLine + 60;
						if( translation != true ){
							xLine = xLine - 160;	
						}
						else{
							xLine = xLine + 160;	
						}
					}
					else{                      //Right child.
						xPosEnd = xPosEnd + 80;
						xLineEnd = xLineEnd + 80;
						yLineEnd = yLineEnd + 50;
						yLine = yLine + 60;							
						if( translation != true ){
							xLine = xLine + 160;	
						}
						else{
							xLine = xLine - 160;	
						}
					}  	
				}
				break;
			
			case 3:
				if( lastLevel == true ){
					if( tree == 2 ){         //red-black tree.
						kind = 5;
					}
					generate.tree(kind);
				}
				else{
					yPosEnd = yPosEnd + 50;
					if( lrTag == true ){       //Left child.
						xPosEnd = xPosEnd - 40;
						xLineEnd = xLineEnd - 40;
						yLineEnd = yLineEnd + 50;
						yLine = yLine + 50;
						if( translation != true ){
							xLine = xLine - 80;	
						}
						else{
							xLine = xLine + 80;	
						}
					}
					else{                      //Right child.
						xPosEnd = xPosEnd + 40;
						xLineEnd = xLineEnd + 40;
						yLineEnd = yLineEnd + 50;
						yLine = yLine + 50;
						if( translation != true ){
							xLine = xLine + 80;	
						}
						else{
							xLine = xLine - 80;	
						}
					}  	
				}
				break;
			
			case 4:
				if( lastLevel == true ){
					if( tree == 2 ){         //red-black tree.
						kind = 5;
					}
					generate.tree(kind);
				}
				else{
					yPosEnd = yPosEnd + 50;
					if( lrTag == true ){       //Left child.
						xPosEnd = xPosEnd - 20;
						xLineEnd = xLineEnd - 20;
						yLineEnd = yLineEnd + 50;
						yLine = yLine + 50;
						if( translation != true ){
							xLine = xLine - 40;	
						}
						else{
							xLine = xLine + 40;	
						}
					}
					else{                      //Right child.
						xPosEnd = xPosEnd + 20;
						xLineEnd = xLineEnd + 20;
						yLineEnd = yLineEnd + 50;
						yLine = yLine + 50;
						if( translation != true ){
							xLine = xLine + 40;	
						}
						else{
							xLine = xLine - 40;	
						}
					}  	
				}
				break;
		}
	}
}

//
//Change the node of position.
var changePosition = function(){	
	//Rotate  tree.
	this.rotate = function(kind){
		var temp;
		tempNodeNumber = nodeNumber;
		
		if( tree == 1 ){
			gIndex = checkIndex;
		}
		
		switch(kind){
			case 1:            //LL
				if( gIndex == 1 ){             //Level = 0.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 0 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 160;
							yPosEnd += 60;
							generate.rotateRBTree();
						}
						else if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 160;
							yPosEnd -= 60;
							generate.rotateRBTree();
							
							xLineEnd += 320;
							line.changeLinePos();
							
							document.getElementById("line"+tempNodeNumber).setAttribute("id","line"+changeNodeArr[0]);
							document.getElementById("line"+changeNodeArr[0]).setAttribute("id","line"+tempNodeNumber);  
						}
						else if( temp == 2 ){
							if( changeNodeArr[temp] != null ){
								tempNodeNumber = changeNodeArr[temp];
								generate.getCurrentPos(tempNodeNumber);
								xPosEnd += 80;
								yPosEnd +=50;
								generate.rotateRBTree();
								
								xLineEnd += 80;
								yLineEnd += 50;
								xLine += 80;
								yLine += 50;
								line.changeLinePos();
								}
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 80;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd += 80;
							yLineEnd -= 50;
							xLine += 160;
							yLine -= 60;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if(  (Math.floor(Math.log2(gIndex))) == 1 ){          //Level = 1.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 0 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 80;
							yPosEnd +=50;
							generate.rotateRBTree();
						}
						else if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							
							xPosEnd += 80;
							yPosEnd -= 50;
							generate.rotateRBTree();
							
							xLineEnd += 160;
							line.changeLinePos();	
							
							document.getElementById("line"+tempNodeNumber).setAttribute("id","line"+changeNodeArr[0]);
							document.getElementById("line"+changeNodeArr[0]).setAttribute("id","line"+tempNodeNumber);
						}
						else if( temp == 2 ){
							if( changeNodeArr[temp] != null ){
								tempNodeNumber = changeNodeArr[temp];
								generate.getCurrentPos(tempNodeNumber);
								xPosEnd += 40;
								yPosEnd +=50;
								generate.rotateRBTree();
								
								xLineEnd += 40;
								yLineEnd += 50;
								xLine += 40;
								yLine += 50;
								line.changeLinePos();
								}
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd += 40;
							yLineEnd -= 50;
							xLine += 80;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if(  (Math.floor(Math.log2(gIndex))) == 2 ){          //Level = 2.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 0 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 40;
							yPosEnd +=50;
							generate.rotateRBTree();
						}
						else if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							
							xPosEnd += 40;
							yPosEnd -= 50;
							generate.rotateRBTree();
							
							xLineEnd += 80;
							line.changeLinePos();
							
							document.getElementById("line"+tempNodeNumber).setAttribute("id","line"+changeNodeArr[0]);
							document.getElementById("line"+changeNodeArr[0]).setAttribute("id","line"+tempNodeNumber);	
						}
						else if( temp == 2 ){
							if( changeNodeArr[temp] != null ){
								tempNodeNumber = changeNodeArr[temp];
								generate.getCurrentPos(tempNodeNumber);
								xPosEnd += 20;
								yPosEnd +=50;
								generate.rotateRBTree();
								
								xLineEnd += 20;
								yLineEnd += 50;
								xLine += 40;
								yLine += 50;
								line.changeLinePos();
								}
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 20;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd += 20;
							yLineEnd -= 50;
							xLine += 40;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				break;
			case 2:            //RR
				if( gIndex == 1 ){              //Level = 0.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 0 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 160;
							yPosEnd +=60;
							generate.rotateRBTree();
						}
						else if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							
							xPosEnd -= 160;
							yPosEnd -= 60;
							generate.rotateRBTree();
							
							xLineEnd -= 320;
							line.changeLinePos();
							
							document.getElementById("line"+tempNodeNumber).setAttribute("id","line"+changeNodeArr[0]);
							document.getElementById("line"+changeNodeArr[0]).setAttribute("id","line"+tempNodeNumber);
						}
						else if( temp == 2 ){
							if( changeNodeArr[temp] != null ){
								tempNodeNumber = changeNodeArr[temp];
								generate.getCurrentPos(tempNodeNumber);
								xPosEnd += 80;
								yPosEnd +=50;
								generate.rotateRBTree();
								
								xLineEnd += 80;
								yLineEnd += 50;
								xLine += 80;
								yLine += 50;
								line.changeLinePos();
								}
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 80;
							yPosEnd -=50;
							generate.rotateRBTree();
								
							xLineEnd -= 80;
							yLineEnd -= 50;
							xLine -= 160;
							yLine -= 60;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if(  (Math.floor(Math.log2(gIndex))) == 1 ){          //Level = 1.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 0 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 80;
							yPosEnd +=50;
							generate.rotateRBTree();
						}
						else if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							
							xPosEnd -= 80;
							yPosEnd -= 50;
							generate.rotateRBTree();
							
							xLineEnd -= 160;
							line.changeLinePos();
							
							document.getElementById("line"+tempNodeNumber).setAttribute("id","line"+changeNodeArr[0]);
							document.getElementById("line"+changeNodeArr[0]).setAttribute("id","line"+tempNodeNumber);	
						}
						else if( temp == 2 ){
							if( changeNodeArr[temp] != null ){
								tempNodeNumber = changeNodeArr[temp];
								generate.getCurrentPos(tempNodeNumber);
								xPosEnd += 40;
								yPosEnd +=50;
								generate.rotateRBTree();
								
								xLineEnd += 40;
								yLineEnd += 50;
								xLine += 40;
								yLine += 50;
								line.changeLinePos();
								}
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 40;
							yLineEnd -= 50;
							xLine -= 80;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if(  (Math.floor(Math.log2(gIndex))) == 2 ){          //Level = 2.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 0 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 40;
							yPosEnd +=50;
							generate.rotateRBTree();
						}
						else if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							
							xPosEnd -= 40;
							yPosEnd -= 50;
							generate.rotateRBTree();
							
							xLineEnd -= 80;
							line.changeLinePos();
							
							document.getElementById("line"+tempNodeNumber).setAttribute("id","line"+changeNodeArr[0]);
							document.getElementById("line"+changeNodeArr[0]).setAttribute("id","line"+tempNodeNumber);	
						}
						else if( temp == 2 ){
							if( changeNodeArr[temp] != null ){
								tempNodeNumber = changeNodeArr[temp];
								generate.getCurrentPos(tempNodeNumber);
								xPosEnd += 20;
								yPosEnd +=50;
								generate.rotateRBTree();
								
								xLineEnd += 20;
								yLineEnd += 50;
								xLine += 40;
								yLine += 50;
								line.changeLinePos();
								}
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 20;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 20;
							yLineEnd -= 50;
							xLine -= 20;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				break;
			case 3:
				if( gIndex == 1 ){              //Level = 0.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 80;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd += 80;
							yLineEnd += 50;
							xLine += 160;
							yLine += 60;
							line.changeLinePos();
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 80;
							yPosEnd -=50;
							yLine -= 10;
							generate.rotateRBTree();
							
							xLineEnd += 80;
							yLineEnd -= 50;
							xLine -= 160;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if( (Math.floor(Math.log2(gIndex))) == 1 ){           //Level = 1.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 40;
							yPosEnd += 50;
							generate.rotateRBTree();
							
							xLineEnd += 40;
							yLineEnd += 50;
							xLine += 80;
							yLine += 50;
							line.changeLinePos();
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd += 40;
							yLineEnd -= 50;
							xLine -= 80;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if(  (Math.floor(Math.log2(gIndex))) == 2 ){          //Level = 2.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 20;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd += 20;
							yLineEnd += 50;
							xLine += 40;
							yLine += 50;
							line.changeLinePos();
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 20;
							yPosEnd -=50;
							yLine -= 10;
							generate.rotateRBTree();
							
							xLineEnd += 20;
							yLineEnd -= 50;
							xLine -= 40;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				break;
			case 4:              //LR
				if( gIndex == 1 ){            //Level = 0.
					for( temp = 1; temp <= 3; temp+=2 ){						
						if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 80;
							yPosEnd += 50;
							generate.rotateRBTree();
							
							xLineEnd -= 80;
							yLineEnd += 50;
							xLine -= 160;
							yLine += 60;
							line.changeLinePos();
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 80;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 80;
							yLineEnd -= 50;
							xLine += 160;
							yLine -= 60;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if(  (Math.floor(Math.log2(gIndex))) == 1 ){          //Level = 1.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 40;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd -= 40;
							yLineEnd += 50;
							xLine -= 80;
							yLine += 50;
							line.changeLinePos();
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 40;
							yLineEnd -= 50;
							xLine += 80;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				else if(  (Math.floor(Math.log2(gIndex))) == 2 ){          //Level = 2.
					for( temp = 0; temp <= 3; temp++ ){						
						if( temp == 1 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 20;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd -= 20;
							yLineEnd += 50;
							xLine -= 40;
							yLine += 50;
							line.changeLinePos();
						}
						else if( temp == 3 ){
							tempNodeNumber = changeNodeArr[temp];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 20;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 20;
							yLineEnd -= 50;
							xLine += 40;
							yLine -= 50;
							line.changeLinePos();
						}
					}
					this.init();
				}
				break;
		}
	}
	
	//Rotate position of children.
	this.rotateChildren = function(kind){
		switch(kind){
			case 1:              //LL
				for( var k = 0; k <= 4; k++ ){
					if( changeChildrenArr[k] != null ){
						if( k == 0 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd += 40;
							yLineEnd -= 50;
							xLine += 80;
							yLine -= 50;
							line.changeLinePos();
						}
						else if( k == 1 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 80;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd += 80;
							yLineEnd += 50;
							xLine += 160;
							yLine += 60;
							line.changeLinePos();
						}
						else if( k == 2 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 120;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd += 120;
							yLineEnd -= 50;
							xLine += 80;
							yLine -= 50;
							line.changeLinePos();
						}
						else if( k == 3 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 160;
							generate.rotateRBTree();
							
							xLineEnd += 160;
							xLine += 320;
							line.changeLinePos();
						}
						else if( k == 4 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 120;
							yPosEnd -= 50;
							generate.rotateRBTree();
							
							xLineEnd += 120;
							yLineEnd -= 50;
							xLine += 80;
							yLine -= 50;
							line.changeLinePos();
						}
					}	
				}
				//Clean changeChildrenArr.
				while( changeChildrenArr.length != 0 ){
					changeChildrenArr.pop();
				}
				this.init();
				break;
			case 2:               //RR
				for( var k = 0; k <= 4; k++ ){
					if( changeChildrenArr[k] != null ){
						if( k == 0 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 40;
							yLineEnd -= 50;
							xLine -= 80;
							yLine -= 50;
							line.changeLinePos();
						}
						else if( k == 1 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 80;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd -= 80;
							yLineEnd += 50;
							xLine -= 160;
							yLine += 50;
							line.changeLinePos();
						}
						else if( k == 2 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 160;
							generate.rotateRBTree();
							
							xLineEnd -= 160;
							xLine -= 320;
							yLine -= 10;
							line.changeLinePos();
						}
						else if( k == 3 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 120;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 120;
							yLineEnd -= 50;
							xLine -= 80;
							yLine -= 50;
							line.changeLinePos();
						}
						else if( k == 4 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 120;
							yPosEnd -= 50;
							generate.rotateRBTree();
							
							xLineEnd -= 120;
							yLineEnd -= 50;
							xLine -= 80;
							yLine -= 50;
							line.changeLinePos();
						}
					}	
				}
				//Clean changeChildrenArr.
				while( changeChildrenArr.length != 0 ){
					changeChildrenArr.pop();
				}
				this.init();
				break;
			case 3:               //RL
				for( var k = 0; k <= 3; k++ ){
					if( changeChildrenArr[k] != null ){
						if( k == 0 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 40;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd += 40;
							yLineEnd += 50;
							xLine += 80;
							yLine += 50;
							line.changeLinePos();
						}
						else if( k == 2 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd += 40;
							yLineEnd -= 50;
							xLine += 80;
							yLine -= 50;
							line.changeLinePos();
						}
						else if( k == 3 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd += 80;
							generate.rotateRBTree();
							
							xLineEnd += 80;
							xLine += 160;
							line.changeLinePos();
						}
					}	
				}
				this.init();
				break;
			case 4:              //LR
				for( var k = 0; k <= 3; k++ ){
					if( changeChildrenArr[k] != null ){
						if( k == 0 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 40;
							yPosEnd +=50;
							generate.rotateRBTree();
							
							xLineEnd -= 40;
							yLineEnd += 50;
							xLine -= 80;
							yLine += 50;
							line.changeLinePos();
						}
						else if( k == 2 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 80;
							generate.rotateRBTree();
							
							xLineEnd -= 80;
							xLine -= 160;
							line.changeLinePos();
						}
						else if( k == 3 ){
							tempNodeNumber = changeChildrenArr[k];
							generate.getCurrentPos(tempNodeNumber);
							xPosEnd -= 40;
							yPosEnd -=50;
							generate.rotateRBTree();
							
							xLineEnd -= 40;
							yLineEnd -= 50;
							xLine -= 80;
							yLine -= 50;
							line.changeLinePos();
						}
					}	
				}
				this.init();
				break;
		}
	}
	
	//Initial position.
	this.init = function(){
		xPos = 15;
		yPos = 20;
		xPosEnd = 350;
		yPosEnd = 65;
		xLine = 365;
		yLine = 10;
		xLineEnd = 365;
		yLineEnd = 10;
	}
}

var checkOrCal = new checkCalPosition();
var rotatePosition = new changePosition();
