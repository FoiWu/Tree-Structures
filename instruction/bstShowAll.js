//Insert all nodes at the same time.
//For animation 

var nodeArray = new Array();      //Array of nodes.
var nodeNumber, currentData , nodeNumber = 0;
var circleArr = new Array();     //Record position of circles.

//
//Build a tree.
//	
var showAllOneTime = function(){
	//
	//Show all node at one time.
	this.oneTime = function(type){
		var index, repeat, currentPos, data, repeatTag, level=1, translation = false, lrTag = null;    
		//index:Index of node, 
		//repeat:Check whether the current position was empty or full,      
		//currentPos:Current position,
		//data:Current data.
		
		if( nodeNumber == 0 ){
			nodeArray[0] = dataArray[0];      //Put root into nodeArray[0].	 
			currentData = dataArray[0];
			generate.tree();
			nodeNumber++
		}
		if( nodeNumber > 0 ){
			for( nodeNumber = 1; nodeNumber < 7; nodeNumber++ ){
				data = dataArray[nodeNumber];
				currentData = data;
				repeat=1;
				index=1;
				level=1;
				
				while( repeat >= 1 ){        //Keeping check current position when repeat >=1.
					currentPos = nodeArray[(index-1)];     //Update be compared node.
					
					if( currentPos != null || currentPos != undefined ){
						if( data < currentPos ){     //Left subtree.
							if( lrTag == false ){
								translation = true;
							}
							else{
								translation = false;
							}
							lrTag = true;
							
							index = index*2;
							
							if( level == 1 ){
								xPosEnd = xPosEnd - 160;
								yPosEnd = yPosEnd + 20;
								xLineEnd = xLineEnd - 160;
							}	
							else if( level == 2 ){
								xPosEnd = xPosEnd - 80;
								xLineEnd = xLineEnd - 80;
								yLineEnd = yLineEnd - 50;
								yLine = yLine + 10;
								if( translation != true ){
									xLine = xLine - 160;	
								}
								else{
									xLine = xLine + 160;	
								}
							}
							else if( level == 3 ){
								xPosEnd = xPosEnd - 40;
								xLineEnd = xLineEnd - 40;
								yLineEnd = yLineEnd - 50;
								yLine = yLine - 10;
								if( translation != true ){
									xLine = xLine - 80;	
								}
								else{
									xLine = xLine + 80;	
								}
							}	
							else if( level == 4 ){
								xPosEnd = xPosEnd - 20;
								xLineEnd = xLineEnd - 20;
								yLineEnd = yLineEnd - 50;
								yLine = yLine - 10;
								if( translation != true ){
									xLine = xLine - 40;	
								}
								else{
									xLine = xLine + 40;	
								}
							}
							else if( level == 5 ){
								xPosEnd = xPosEnd - 10;
								xLineEnd = xLineEnd - 10;
								yLineEnd = yLineEnd - 50;
								yLine = yLine - 10;
								if( translation != true ){
									xLine = xLine - 20;	
								}
								else{
									xLine = xLine + 20;	
								}
							}
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
							
							if( level == 1 ){
								xPosEnd = xPosEnd + 160;
								yPosEnd = yPosEnd + 20;
								xLineEnd = xLineEnd + 160;
							}
							else if( level == 2 ){
								xPosEnd = xPosEnd + 80;
								xLineEnd = xLineEnd + 80;
								yLineEnd = yLineEnd - 50;
								yLine = yLine + 10;							
								if( translation != true ){
									xLine = xLine + 160;	
								}
								else{
									xLine = xLine - 160;	
								}
							}
							else if( level == 3 ){
								xPosEnd = xPosEnd + 40;
								xLineEnd = xLineEnd + 40;
								yLineEnd = yLineEnd - 50;
								yLine = yLine - 10;
								if( translation != true ){
									xLine = xLine + 80;	
								}
								else{
									xLine = xLine - 80;	
								}
							}
							else if( level == 4 ){
								xPosEnd = xPosEnd + 20;
								xLineEnd = xLineEnd + 20;
								yLineEnd = yLineEnd - 50;
								yLine = yLine - 10;
								if( translation != true ){
									xLine = xLine + 40;	
								}
								else{
									xLine = xLine - 40;	
								}
							}
							else if( level == 5 ){
								xPosEnd = xPosEnd + 10;
								xLineEnd = xLineEnd + 10;
								yLineEnd = yLineEnd - 50;
								yLine = yLine - 10;
								if( translation != true ){
									xLine = xLine + 20;	
								}
								else{
									xLine = xLine - 20;	
								}			
							} 
						}
						repeat++;     //Check again.
						level++;
						yPosEnd = yPosEnd + 50;
						yLine = yLine + 60;
						yLineEnd = yLineEnd + 100;
					}
					else{
						nodeArray[(index-1)] = data;      //Put number into array.	
						currentData = data; 
						generate.tree();
						circleArr[(index-1)] = nodeNumber;   
						xPos = 15, yPos = 20;
						xPosEnd = 350, yPosEnd = 35;
						xLine = 365, yLine = 10;
						xLineEnd = 365, yLineEnd = 10;	
					}
					repeat--;      //Have checked current position.
				}
			}
		}
		console.log(dataArray);
		console.log(nodeArray);
		console.log(circleArr);	
		
		//Press "Preorder+Inorder" button from BST_Simulation(Preorder+Inorder->Postorder & Inorder+Postorder->Preorder).html or BST_Test(Preorder+Inorder->Postorder &Inorder+Postorder->Preorder).html
		if( type == 1 ){
			$(document).ready(function(){
				$("#post").hide();
				$("#nextPreIn").show();
			});
		}
		//Press "Inorder+Postorder" button from BST_Simulation(Preorder+Inorder->Postorder & Inorder+Postorder->Preorder).html or BST_Test(Preorder+Inorder->Postorder &Inorder+Postorder->Preorder).html
		else if( type == 2 ){
			$(document).ready(function(){
				$("#pre").hide();
				$("#nextPostIn").show();
			});
		}
		//Press "Show All" button from BST_Simulation(show_all).html
		else if( type == 0 ){
			$(document).ready(function(){
				$(".Traversal").show();
				$("#ShowAll").hide();
				$(".inputBox").hide();
				$(".generateTip").hide();
				$(".describeInput").hide();
				$(".describeRandom").hide();
				$("#bstTip").show();
			});
		}
	}
} 


var allOneTime = new showAllOneTime();