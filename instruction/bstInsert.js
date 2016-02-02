 //Insert node step by step.
//

//index:Index of node, 
//repeat:Check whether the current position was empty or full,      
//currentPos:Current position,
//repeatTag:Check whether the input is an integer.
//level:Level number.
//translation:Tag of translation( left->right or right->left ).
//lrTag:Record left child or right child( true:Left, false:Right ).

var nodeArray = new Array();     //Array of node.  
var input, currentData , nodeNumber = 1;
var circleArr = new Array();     //Record position of circles.
var searchPathArr = new Array();      //Puts search's node.

//
//Inesrt node step by step.
//	 
var addNode = function(){
	this.insert = function(){
		var index=1, repeat=1, currentPos, repeatTag, level=1, translation = false, lrTag = null;     
		
		input = parseInt(document.getElementById("tree-input").value);      //input:Number by user input.
		if(input){        //Check whether the input is an integer.
			//Initial the node which be searched.
			for( var j = pathIndexArray.length-1; j >= 0; j-- ){
				searchId = pathIndexArray[j];
				circleId = circleArr[(searchId-1)];
				d3.select("#nodeCircle"+circleId).transition().duration(1000).attr("fill", "#8EC68F");
				
				if( j == 0 ){
					d3.select("#nodeText"+circleId).transition().duration(1000).attr("fill", "black").attr("font-size", "16px");	
				}
			}
			
			for( var j = 0; j <= nodeArray.length; j++ ){      //Check whether the input is repeat.
				if( input == nodeArray[j] ){
					alert("Please do not input repeat number.");
					repeatTag = true; 
					break;
				}
				else{
					repeatTag = false;			
				}
			}
			while( repeat >= 1 && repeatTag == false ){        //Keeping check current position when repeat >=1. 
				currentPos = nodeArray[(index-1)];     //Starting at root.
	
				if( currentPos != null || currentPos != undefined ){
					if( input < currentPos ){     //Left subtree.
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
						}
					}
					repeat++;     //Check again.
					level++;
					yPosEnd = yPosEnd + 50;
					yLine = yLine + 60;
					yLineEnd = yLineEnd + 100;
				}
				else{
					if( level == 6 ){
						alert("Please not surpass 5 level.");	
					}
					else{
						nodeArray[(index-1)] = input;      //Put number into array.	
						currentData = input;
						generate.tree();
						circleArr[(index-1)] = nodeNumber;    
						nodeNumber++;	
					}
					xPos = 15;
					yPos = 20;
					xPosEnd = 350;
					yPosEnd = 65;
					xLine = 365;
					yLine = 10;
					xLineEnd = 365;
					yLineEnd = 10;
				}
				repeat--;      //Have checked current position.
			}
			console.log(nodeArray);
			console.log(circleArr);
		}
		else{
			//alert user.
			alert("Wrong input");
		}	
	}
}

var insertNode = new addNode();