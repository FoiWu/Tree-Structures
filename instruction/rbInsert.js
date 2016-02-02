//Generate a tree step by step.

var nodeArray = new Array();      //Array of nodes.
var colorArr = new Array();      //Array of color.
var circleArr = new Array();     //Record position of circles.
var changeColorArr = new Array();        //Record color that need be changed.
var changeNodeArr = new Array();       //Record position of node that need be changed.
var currentIndex, rotationKind, vTag;	       //currentIndex:Current node; rotationKind:Determine what kind of rotation, 1:not has angle; 2:has angle; vTag:Record what kind of child of visit node.
var repeat = 0, nodeRB = 0;         //nodeRB:Node of has been presented; repeat:Check whether the current position was empty or full.
var isRotate = false;
var pIndex = Math.floor(currentIndex/2);       
var gIndex = Math.floor(pIndex/2);           
var uIndex;           //gIndex:Index of grandparent; uIndex:Index of uncle; pIndex:Index of parent
var currentData, nodeNumber = 0, lrTag = null, translation = false, level = 0, lastLevel, bfChangedNode = 0, tree = 2, tempNodeNumber;

//
//Build avl tree.
//	
var showTreeStep = function(){
	var currentPos, data, index=1, tree = 2;      
	//index:Index of node, currentPos:Current position, data:Current data.
	
	//
	//Show all node at one time.
	this.buildTree = function(){	
		$(document).ready(function(){
			$(".describeRandom").hide();
			$(".describeInput").hide();
			$(".generateTip").hide();
			$(".inputBox").hide();
			
			$("#ShowAll").click(function(){
				if( nodeRB >= 3 && nodeRB <= 6 ){	
					$("#ShowAll").hide().delay(2800).show(0);
				}
				else if( nodeRB <= 2 ){	
					$("#ShowAll").hide().delay(1300).show(0);
				}
				if( nodeRB >= 7 && (document.getElementById("ShowAll").innerHTML == "Show RB Tree") ){
					$("#ShowAll").remove();
				}
			});
			
			$("#getStep").click(function(){
				html2canvas($("#tree"), {
					onrendered: function(canvas) {
						$("#previous").empty();
						$("<img />", { src: canvas.toDataURL("image/png") }).appendTo("#previous").attr("id", "preFig");
						$("#preFig").css({"width":460, "height":190});		
					},
				});
			});
		});
			
		if( document.getElementById("ShowAll").innerHTML == "Show RB Tree" ){
			//
			//Show nodes, besides first and second one.
			if( nodeRB >= 2 ){              	
				data = dataArray[nodeRB];    
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
						checkOrCal.nodePosition();		
					}
					else{
						nodeArray[(index-1)] = data;      //Put number into array.
						currentData = dataArray[nodeRB];
						colorArr[(index-1)] = "Red";        //Record balance factor.
						lastLevel = true;	
						checkOrCal.nodePosition();							
					}
					repeat--;      //Have checked current position.
				}
				currentIndex = index;
				this.checkColor(currentIndex);
			}
			
			//
			//Second node.
			else if( nodeRB == 1 ){           
				if( dataArray[nodeRB] < nodeArray[(index-1)] ){       //Left node.	
					index = index * 2;
					lrTag = true;
				}
				else{          //Right node.	
					index = (index * 2)+1;
					lrTag = false;
				}
				nodeArray[(index-1)] = dataArray[nodeRB];      //Second node be a left child of node of last level.	
				colorArr[(index-1)] = "Red";         //Record color.	
				currentData = dataArray[nodeRB];	
				checkOrCal.nodePosition();	
				lastLevel = true;
				checkOrCal.nodePosition();	
			}
			
			//
			//Root.
			else if( nodeRB == 0 ){          			
				nodeArray[(index-1)] = dataArray[nodeRB];      //Put root into nodeArray[0].	
				currentData = dataArray[nodeRB];
				colorArr[(index-1)] = "Black";        //Record color.
				generate.tree(5);
			}
			
			console.log(nodeArray);
			console.log(colorArr);
			
			circleArr[(index-1)] = nodeRB;   
			nodeRB++;      //Next node.
			level++
			nodeNumber = nodeRB;
			
			xPos = 15;
			yPos = 20;
			xPosEnd = 350;
			yPosEnd = 65;
			xLine = 365;
			yLine = 10;
			xLineEnd = 365;
			yLineEnd = 10;
		}
		
		//
		//Tip of rotate tree.
		else if( document.getElementById("ShowAll").innerHTML == "Rotate Tree" ){
			rotate.checkKind(rotationKind);
		} 
		
		else if( document.getElementById("ShowAll").innerHTML == "Rotate Tree Again" ){
			rotate.rotateNoAngle();
		}
		
		else if( document.getElementById("ShowAll").innerHTML == "Change Color" ){
			rotate.changeColor(1);
			isRotate = false;
			document.getElementById("destroyProperty").innerHTML = "none";
			document.getElementById("ShowAll").innerHTML = "Show RB Tree";	
		} 
		else if( document.getElementById("ShowAll").innerHTML == "Change color" ){
			rotate.changeColor(2);
			isRotate = false;
			document.getElementById("destroyProperty").innerHTML = "none";
			document.getElementById("ShowAll").innerHTML = "Show RB Tree";	
		}
		
		//
		//Press "Show All" button from RB_Simulation(Insert).html.
		if( nodeRB >= 7 && document.getElementById("ShowAll").innerHTML == "Show RB Tree" ){
			$(document).ready(function(){
				$(".Traversal").fadeIn();
				$("#ShowAll").hide();
			});
		}
		if( isRotate == true ){
			$("#ShowAll").fadeIn();
		} 
	}
	
	//
	//Check color of node.
	this.checkColor = function(){
		var uncleTag;        //Record what kind of child of uncle.
		pIndex = Math.floor(currentIndex/2);
		gIndex = Math.floor(pIndex/2);
		
		//Determine the visit node is left child or right child.
		if( currentIndex % 2 == 0 ){
			vTag = 0;      //visit node is right child. 
		}
		else{
			vTag = 1;     //visit node is left child. 	
		}
		
		//Determine the uncle is left child or right child? 
		if( pIndex % 2 == 0 ){
			uIndex = pIndex + 1;      //Uncle is right child of currentIndex. 
			uncleTag = 1;
		}
		else{
			uIndex = pIndex - 1;      //Uncle is left child of currentIndex. 
			uncleTag = 0;	
		}
		
		//If parent node is red, it need to be process.
		if( colorArr[(pIndex-1)] == "Red" ){
			if( colorArr[(uIndex-1)] == "Red" ){
			//If uncle node is red, parent and uncle change to black, grandparent change to red.
				document.getElementById("ShowAll").innerHTML = "Change Color"; 
				document.getElementById("destroyProperty").innerHTML = data+" 的parent node 以及 uncle node 皆為紅色";
			}	
			else if( colorArr[(uIndex-1)] == "Black" ){
				if( (uncleTag == 0 && vTag == 1) ){
				//Uncle node is black, and path of visit node to grandparent not has angle.
					rotationKind = 1;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為黑色<br>(ii)parent node 為 ancestor node 右節點, 且 "+data+" 也是parent node的右節點(ancestor node到 "+data+" 的路徑上沒有轉彎)";
				}
				else if( (uncleTag == 1 && vTag == 0) ){
				//Uncle node is black, and path of visit node to grandparent not has angle.
					rotationKind = 1;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為黑色<br>(ii)parent node 為 ancestor node 左節點, 且 "+data+" 也是parent node的左節點(ancestor node到 "+data+" 的路徑上沒有轉彎)";
				}
				else if( (uncleTag == 0 && vTag == 0) ){
				//Uncle node is black, and path of visit node to grandparent has angle.
					rotationKind = 2;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為黑色<br>(ii)parent node 為 ancestor node 右節點, 但 "+data+" 卻是parent node的左節點(ancestor node到 "+data+" 的路徑上有轉彎)";
				}
				else if( (uncleTag == 1 && vTag == 1) ){
				//Uncle node is black, and path of visit node to grandparent has angle.
					rotationKind = 2;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為黑色<br>(ii)parent node 為 ancestor node 左節點, 但 "+data+" 卻是parent node的右節點(ancestor node到 "+data+" 的路徑上有轉彎)";
				}
			}	
			else if( colorArr[(uIndex-1)] == null || colorArr[(uIndex-1)] == undefined ){
				if( (uncleTag == 0 && vTag == 1) ){
				//Uncle node is black, and path of visit node to grandparent not has angle.
					rotationKind = 1;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為null<br>(ii)parent node 為 ancestor node 右節點, 且 "+data+" 也是parent node的右節點(ancestor node到 "+data+" 的路徑上沒有轉彎)";
				}
				else if( (uncleTag == 1 && vTag == 0) ){
				//Uncle node is black, and path of visit node to grandparent not has angle.
					rotationKind = 1;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為null<br>(ii)parent node 為 ancestor node 左節點, 且 "+data+" 也是parent node的左節點(ancestor node到 "+data+" 的路徑上沒有轉彎)";
				}
				else if( (uncleTag == 0 && vTag == 0) ){
				//Uncle node is black, and path of visit node to grandparent has angle.
					rotationKind = 2;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為null<br>(ii)parent node 為 ancestor node 右節點, 但 "+data+" 卻是parent node的左節點(ancestor node到 "+data+" 的路徑上有轉彎)";
				}
				else if( (uncleTag == 1 && vTag == 1) ){
				//Uncle node is black, and path of visit node to grandparent has angle.
					rotationKind = 2;
					isRotate = true;
					document.getElementById("ShowAll").innerHTML = "Rotate Tree"; 
					document.getElementById("destroyProperty").innerHTML = "(i) "+data+" 的parent node 為紅色, uncle node 為null<br>(ii)parent node 為 ancestor node 左節點, 但 "+data+" 卻是parent node的右節點(ancestor node到 "+data+" 的路徑上有轉彎)";
				}
			}	
		}
	}
}

//
//Rotate the tree.
var rotateTree = function(){
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
		var tempIndex=0, kindOfCase=null;
		//kindOfCase==0:Visit is left chile(no angle) ;kindOfCase==1:Visit is right chile(no angle).
		
		if( vTag == 0 ){          //Visit node is left child, so the tree need right rotate.			
			nodeArray[((uIndex*2)+1)-1] = nodeArray[(uIndex-1)];		
			kindOfCase = 1;
		}
		else{            //Visit node is right child, so the tree need left rotate.
			nodeArray[(uIndex*2)-1] = nodeArray[(uIndex-1)];			
			kindOfCase = 2;
		}
		
		changeNodeArr[tempIndex] = circleArr[(gIndex-1)];
		tempIndex++;
		changeNodeArr[tempIndex] = circleArr[(pIndex-1)];
		tempIndex++;
		changeNodeArr[tempIndex] = circleArr[(uIndex-1)];
		tempIndex++;
		changeNodeArr[tempIndex] = circleArr[(currentIndex-1)];
		
		//alert(tempIndex+"/"+kindOfCase+"/"+vTag+"/"+changeNodeArr);
		rotatePosition.rotate(kindOfCase);
		
		nodeArray[(uIndex-1)] = nodeArray[(gIndex-1)];
		nodeArray[(gIndex-1)] = nodeArray[(pIndex-1)];
		nodeArray[(pIndex-1)] = nodeArray[(currentIndex-1)];
		nodeArray[(currentIndex-1)] = null;
		
		if( kindOfCase == 1 ){
			circleArr[((uIndex*2)+1)-1] = circleArr[(uIndex-1)];
		}
		else if( kindOfCase == 2 ){
			circleArr[(uIndex*2)-1] = circleArr[(uIndex-1)];
		}
		
		circleArr[(uIndex-1)] = circleArr[(gIndex-1)];
		circleArr[(gIndex-1)] = circleArr[(pIndex-1)];
		circleArr[(pIndex-1)] = circleArr[(currentIndex-1)];
		circleArr[(currentIndex-1)] = null;
		
		document.getElementById("ShowAll").innerHTML = "Change color"; 
	}
	
	//
	//
	this.rotateAngle = function(){
		var tempIndex=0, kindOfCase=null;
		//kindOfCase==3:Visit is left chile(has angle) ;kindOfCase==4:Visit is right chile(has angle).
		
		if( vTag == 1 ){          //Visit node is right child, so the tree need right rotate.
			uIndex = pIndex + 1;       //Index is right child of grandparent.
			
			nodeArray[((pIndex*2)-1)] = nodeArray[(pIndex-1)];	
			circleArr[((pIndex*2)-1)] = circleArr[(pIndex-1)];
			
			kindOfCase = 4;
			vTag = 0;	
		}
		else{            //Visit node is left child, so the tree need left rotate.
			uIndex = pIndex - 1;        //Index is left child of grandparent.
			
			nodeArray[(((pIndex*2)+1)-1)] = nodeArray[(pIndex-1)];	
			circleArr[(((pIndex*2)+1)-1)] = circleArr[(pIndex-1)];
		
			kindOfCase = 3;
			vTag = 1;
		}
		
		changeNodeArr[tempIndex] = circleArr[(gIndex-1)];
		tempIndex++;
		changeNodeArr[tempIndex] = circleArr[(pIndex-1)];
		tempIndex++;
		changeNodeArr[tempIndex] = circleArr[(uIndex-1)];
		tempIndex++;
		changeNodeArr[tempIndex] = circleArr[(currentIndex-1)];
		
		rotatePosition.rotate(kindOfCase);
		
		nodeArray[(pIndex-1)] = nodeArray[(currentIndex-1)];
		nodeArray[(currentIndex-1)] = null;
		colorArr[(currentIndex-1)] = null;	
		
		circleArr[(pIndex-1)] = circleArr[(currentIndex-1)];
		circleArr[(currentIndex-1)] = null; 
		
		if( vTag == 0 ){          //Visit node is right child, so the tree need right rotate.
			currentIndex = pIndex*2;
		}
		else{            //Visit node is left child, so the tree need left rotate.
			currentIndex = (pIndex*2)+1;
		}
		
		document.getElementById("ShowAll").innerHTML = "Rotate Tree Again"; 
	}
	
	//
	//Change color of tree.
	this.changeColor = function(colorCase){
		pIndex = Math.floor(currentIndex/2);       
		//Index of parent
		gIndex = Math.floor(pIndex/2);           
		//Index of grandparent
		var tempIndex=0;
		
		//Since parent node and uncle node are both red.
		if( colorCase == 1 ){
			colorArr[(gIndex-1)] = "Red";
			colorArr[(uIndex-1)] = "Black";
			colorArr[(pIndex-1)] = "Black";
			
			currentIndex = gIndex;
			
			changeColorArr[tempIndex] = circleArr[(gIndex-1)];
			tempIndex++;
			changeColorArr[tempIndex] = circleArr[(pIndex-1)];
			tempIndex++;
			changeColorArr[tempIndex] = circleArr[(uIndex-1)];
			
			generate.changeColor(colorCase);
			
			if( gIndex == 1 ){
				generate.changeColor(0);
			}	
			
			showStep.checkColor();
		}
		//After rotation.
		else if( colorCase == 2 ){
			colorArr[(gIndex-1)] = "Black";
			colorArr[(uIndex-1)] = "Red";
			colorArr[(pIndex-1)] = "Red";
			colorArr[(currentIndex-1)] = null;
			
			currentIndex = gIndex;
			
			changeColorArr[tempIndex] = circleArr[(gIndex-1)];
			tempIndex++;
			changeColorArr[tempIndex] = circleArr[(pIndex-1)];
			tempIndex++;
			changeColorArr[tempIndex] = circleArr[(uIndex-1)];
			
			generate.changeColor(colorCase);
		}
		
		colorArr[0] = "Black";      //Root have to be set BLACK.	
		
		console.log(nodeArray);
		console.log(colorArr);
		
		isRotate = false;
		document.getElementById("destroyProperty").innerHTML = "none";
		document.getElementById("ShowAll").innerHTML = "Show RB Tree"; 
	}
}

var rotate = new rotateTree();
var showStep = new showTreeStep();