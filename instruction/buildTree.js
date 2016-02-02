//Build a BST.
//
var currentData;
var number = 0;
var treeSVG;    //SVG   
var userAnswer = new Array(63);      //Record user is answer.
var colorAnswer = new Array();       //Record user is color answer.
var placeTextId = new Array();     //Record the id of text that has been placed.
var outlineAppearArr = new Array();     //Record appeared outline.
var bfOrColorArr = new Array();       //Record BF or color.(For AVL tree and Reb-Black tree.)
var biggestIndex = 3;          //Record biggest index, for search the outline of been placed.		

var buildBstByDrag = function(){	
	this.generateDragNode = function(kind){
		currentData = dataArray[number];
		
		if(kind==1){          //Preorder+Inorder.
			if( document.getElementById("nextNode1").innerHTML == "Start" ){         //First node.
				treeSVG = d3.select("#treeGraph").append("svg:svg").attr("id", "svgBuild").attr("width", 1000).attr("height", 500);
	
				document.getElementById("nextNode1").innerHTML = "Next Node";
				
				nodeAndOutline.buildTree(1,number);
				number++;
			}
			else if( document.getElementById("nextNode1").innerHTML == "Next Node" ){       //Not first node.
				nodeAndOutline.buildTree(2,number);
				number++;
			}
		}
		else if(kind==2){          //Postorder+Inorder.
			if( document.getElementById("nextNode2").innerHTML == "Start" ){         //First node.
				treeSVG = d3.select("#treeGraph").append("svg:svg").attr("id", "svgBuild").attr("width", 1000).attr("height", 500);
	
				document.getElementById("nextNode2").innerHTML = "Next Node";
				
				nodeAndOutline.buildTree(1,number);
				number++;
			}
			else if( document.getElementById("nextNode2").innerHTML == "Next Node" ){       //Not first node.
				nodeAndOutline.buildTree(2,number);
				number++;
			}
		}
		else{
			if( document.getElementById("nextNode").innerHTML == "Start" ){         //First node.
				treeSVG = d3.select("#treeGraph").append("svg:svg").attr("id", "svgBuild").attr("width", 1000).attr("height", 500);
	
				document.getElementById("nextNode").innerHTML = "Next Node";
				
				nodeAndOutline.buildTree(1,number);
				number++;
			}
			else if( document.getElementById("nextNode").innerHTML == "Next Node" ){       //Not first node.
				nodeAndOutline.buildTree(2,number);
				number++;
			}
		}
		
		if( number == 7 ){
			$(document).ready(function(){
				$("#nextNode").hide();
				$("#nextNode1").hide();
				$("#nextNode2").hide();
				$("#Submit").fadeIn();
				$("#bfTest").fadeIn();
			});
		}
	}
	
	//Determine which outline is placed.
	this.calNextPosition = function(lastOutline, currentText){
		if( biggestIndex <= outlineIndex ){
			biggestIndex = outlineIndex;
		}
		//Display outline.
		for( var presented = 1; presented <= biggestIndex; presented++ ){
			if( lastOutline == "outline"+presented ){
				userAnswer[(presented-1)] = currentData;
				placeTextId[(presented-1)] = currentText;
				console.log(userAnswer+'/'+placeTextId);
				var outlineLevel = Math.floor(Math.log2(presented));
				if( outlineLevel <= 4 ){
					nodeAndOutline.outlinePresented(presented, outlineLevel);
				}
				break;
			}	
		}
	}
}

var buildTree = new buildBstByDrag();