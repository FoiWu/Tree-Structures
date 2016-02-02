//Preorder+Inorder->Postorder or Postorder+Inorder->Preorder.
//Generate tree step by step.

var nodeArray = new Array();      //Array of nodes.
var preorderArr = new Array();
var inorderArr = new Array();
var postorderArr = new Array();
var orderArr = new Array();
var nodeNo1 = 0;      //nodeNo1:Node of has been parented (for this.preAndIn)
var nodeNo2 = 6;      //nodeNo2:Node of has been parented (for this.postAndIn)
var temp = 0;       //Current index of node.
var indexTra = 0;  
var tempTraversalArr = new Array();         //According to nodeArray to store position of node. 

var generatePrePostTree = function(){
	this.randomTraversal = function(kind){            
		//Generate random traversal.
		//kind=1:Rondom preorder traversal; kind=2:Rondom postorder traversal.
		var preRondom, inRondom, postRondom, currentVal;
		
		if( kind == 1 ){             //Display preorder traversal. 
			$(document).ready(function(){
				$("#post").hide();
				$("#postAndIn").hide();
				$("#preAndIn").hide();
				$("#nextPreIn").show();
			});
			for( var j = 0; j <= 6; j++ ){
				preRondom = document.getElementById("pre"+j);
				preRondom.innerHTML = dataArray[j]+",";	
				preorderArr[j] = dataArray[j];
			}
		}
		else if( kind == 2 ){         //Display postorder traversal.
			$(document).ready(function(){
				$("#pre").hide();
				$("#postAndIn").hide();
				$("#preAndIn").hide();
				$("#nextPostIn").show();
			});
			for( var j = 0; j <= 6; j++ ){
				postRondom = document.getElementById("post"+j);
				postRondom.innerHTML = dataArray[j]+",";
				postorderArr[j] = dataArray[j];	
			}
			
			postorderArr.reverse(); 
		}
		
		//Romdon inorder traversal.
		for(i=1; i<=10; i++){
	　　　　	var j=Math.floor(Math.random()*7);
	　		var k=Math.floor(Math.random()*7);
			var swapTemp;
		
			swapTemp = dataArray[j];
			dataArray[j] = dataArray[k]
			dataArray[k] = swapTemp;
		}
		//Display inorder traversal.
		for( var j = 0; j <= 6; j++ ){
			inRondom = document.getElementById("i"+j);
			inRondom.innerHTML = dataArray[j]+",";
			inorderArr[j] = dataArray[j];	
		}
		
		//Place the index of location into orderArr.
		if( kind == 1 ){
			for( var i = 0; i <= 6; i++ ){
				currentVal = preorderArr[i];
				for( var j = 0; j <= 6; j++ ){
					if( currentVal == inorderArr[j] ){
						orderArr[i] = j;
						break;
					}
				}
			}
		}
		else if( kind == 2 ){
			for( var i = 6; i >= 0; i-- ){
				currentVal = postorderArr[i];
				for( var j = 0; j <= 6; j++ ){
					if( currentVal == inorderArr[j] ){
						orderArr[i] = j;
						break;
					}
				}
			}
		}
		console.log(orderArr);
	}
	
	//Preorder+Inorder->Postorder
	this.preInTree = function(){
		var recordingArr = new Array();   
		//recordingArr:Record node of has been parented.
		
		while( nodeNo1 <= 6 ){
			if( recordingArr[nodeNo1] == null || recordingArr[nodeNo1] == undefined ){
				recordingArr[nodeNo1] = dataArray[nodeNo1];
				nodeNo1 ++;	
				break;
			} 
		}
		
		for( var k = 0; k <= (nodeArray.length-1); k++ ){
			if( nodeArray[k] == preorderArr[(nodeNo1-1)] ){
				indexTra = k+1;
			}
		}
		
		currentData = preorderArr[(nodeNo1-1)];
		document.getElementById("pre"+(nodeNo1-1)).style.background = "#ffde0d";
		if( (nodeNo1-2) >= 0){
			document.getElementById("pre"+(nodeNo1-2)).style.background = "white";
		}
		
		for( var g = 0; g <= 6; g++ ){
			if( preorderArr[((nodeNo1-1)-1)] == inorderArr[g] && preorderArr[((nodeNo1-1)-1)] != null ){
				document.getElementById("i"+g).style.background = "#D7F5EF";		
			}
		}
		
		this.calPos();
		
		for( var g = 0; g <= 6; g++ ){
			if( inorderArr[g] == currentData ){
				document.getElementById("i"+g).style.background = "#76EDCE";	
			}
		}
	}
	
	//Postorder+Inorder->Preorder
	this.postInTree = function(){
		var recordingArr = new Array();   
		//recordingArr:Record node of has been parented.
		
		while( nodeNo2 >= 0 ){
			if( recordingArr[nodeNo2] == null || recordingArr[nodeNo2] == undefined ){
				recordingArr[nodeNo2] = dataArray[nodeNo2];
				nodeNo2--;	
				break;
			} 
		}
		
		for( var k = (nodeArray.length-1); k >= 0; k-- ){
			if( nodeArray[k] == postorderArr[(nodeNo2+2)] ){
				indexTra = k+1;
			}
		}
		
		currentData = postorderArr[nodeNo1];
		document.getElementById("post"+(nodeNo2+1)).style.background = "#ffde0d";
		document.getElementById("post"+(nodeNo2+2)).style.background = "white";
		for( var g = 0; g <= 6; g++ ){
			if( postorderArr[(nodeNo1-1)] == inorderArr[g] && postorderArr[(nodeNo1-1)] != null ){
				document.getElementById("i"+g).style.background = "#D7F5EF";	
			}
		}
		
		nodeNo1++;
		
		this.calPos();
		
		for( var g = 0; g <= 6; g++ ){
			if( inorderArr[g] == currentData ){
				document.getElementById("i"+g).style.background = "#76EDCE";
			}
		}
	}
	
	//Calculate the node of position.
	this.calPos = function(){
		var comparePosIndex=0, repeat=1, currentPos, level=1, translation = false, lrTag = null;     
		//Not root.
		if( temp > 0 ){
			currentPos = orderArr[temp];          //Current position of node.
			while( repeat >= 1 ){
				if( nodeArray[comparePosIndex] != null || nodeArray[comparePosIndex] != undefined ){         
					if( currentPos < tempTraversalArr[comparePosIndex] ){             //Current node is left subtree of parent node.
						if( lrTag == false ){
							translation = true;
						}
						else{
							translation = false;
						}
						lrTag = true;
						
						comparePosIndex = ((comparePosIndex+1)*2)-1;
						
						if( level == 1 ){
							xPosEnd = xPosEnd - 160;
							xLineEnd = xLineEnd - 160;
							yPosEnd = yPosEnd + 20;
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
						repeat++;     //Check again.
						level++;
						yPosEnd = yPosEnd + 50;
						yLine = yLine + 60;
						yLineEnd = yLineEnd + 100;
					}
					else{             //Current node is right subtree of parent node.
						if( lrTag == true ){
							translation = true;
						}
						else{
							translation = false;
						}
						lrTag = false;	
						
						comparePosIndex = (((comparePosIndex+1)*2)+1)-1;
						
						if( level == 1 ){
							xPosEnd = xPosEnd + 160;
							xLineEnd = xLineEnd + 160;
							yPosEnd = yPosEnd + 20;
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
						repeat++;     //Check again.
						level++;
						yPosEnd = yPosEnd + 50;
						yLine = yLine + 60;
						yLineEnd = yLineEnd + 100;
					}
				}
				else{            //Generate circle of node.
					nodeArray[comparePosIndex] = currentData;
					tempTraversalArr[comparePosIndex] = orderArr[temp];
					generate.tree();  
					nodeNumber++;	
					
					xPos = 15;
					yPos = 20;
					xPosEnd = 350;
					yPosEnd = 35;
					xLine = 365;
					yLine = 10;
					xLineEnd = 365;
					yLineEnd = 10;			
				}
				repeat--;      //Have checked current position.	
			}
		}
		//Root.
		else if( temp == 0 ){
			nodeArray[0] = currentData;
			tempTraversalArr[0] = orderArr[0];
			nodeNumber = temp;
			generate.tree();
			nodeNumber++;	
		}
		
		//tempTraversalArr[(indexTra-1)] = currentData;
		temp++;
		//console.log(":"+tempTraversalArr+'/'+temp);
		
		if( temp >= 7 ){
			$(document).ready(function(){
				$("#nextPostIn").hide();
				$("#nextPreIn").hide();
			});
			console.log(nodeArray);
		}
	}
}

var traversalTree = new generatePrePostTree();