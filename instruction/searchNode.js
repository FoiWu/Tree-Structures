//
//Search node.(kind==1:AVL; kind==2:Red-Black)
//For BST, AVL, Red-Black tree.

var pathNodeArray = new Array();      //Array of search's node.
var pathIndexArray = new Array();      //Array of index of search's node.

var searchBstAvlRbTree = function(){
	this.searchANode = function(kind){		
		var index ,searchId = null, circleId;
		var input = parseInt(document.getElementById("tree-input").value);      //input:Number by user input.
		var leftRightArr = new Array();          //left is true; right is false.
		
		//Initial the node which be searched.
		for( var j = pathIndexArray.length-1; j >= 0; j-- ){
			searchId = pathIndexArray[j];
			circleId = circleArr[(searchId-1)];
			if( kind == 1 ){                 //AVL
				d3.select("#nodeCircle"+circleId).transition().duration(1000).attr("fill", "#8EC68F");
			}
			else if( kind == 2 ){               //Red-Black      
				/////////////////////////////////////////////////////////
				/////////////////////////////////////////////////////////
			}

			if( j == 0 ){
				if( kind == 1 ){             //AVL
					d3.select("#nodeText"+circleId).transition().duration(1000).attr("fill", "black").attr("font-size", "16px");	
				}
				else if( kind == 2 ){           //Red-Black
					d3.select("#nodeText"+circleId).transition().duration(1000).attr("fill", "lightyellow").attr("font-size", "16px");	
				}
			}
		}
		
		while (pathNodeArray.length != 0 ){      //Clean pathNodeArray and pathIndexArray first.
			pathNodeArray.pop();
			pathIndexArray.pop();
		}
		
		for( var j = 0; j <= (nodeArray.length-1); j++ ){     //Search node from nodeArray. 
			if( input == nodeArray[j] ){       
				index = j+1;
				pathNodeArray.push(nodeArray[j]);
				pathIndexArray.push(index);
				index = Math.floor(index/2);
				
				while( index > 0 ){
					pathNodeArray.push(nodeArray[(index-1)]);
					pathIndexArray.push(index);
					index = Math.floor(index/2);
				}
			}
		}
		
		for( var k = 0; k < pathIndexArray.length; k++ ){
			if( input > pathNodeArray[k] ){
				leftRightArr[k] = false;
			}
			else if( input < pathNodeArray[k] ){
				leftRightArr[k] = true;
			}
		}
		
		//console.log(pathIndexArray);
		//console.log(pathNodeArray);
		//console.log(leftRightArr);
		
		for( var j = pathIndexArray.length-1; j >= 0; j-- ){
			searchId = pathIndexArray[j];
			circleId = circleArr[(searchId-1)];
			d3.select("#nodeCircle"+circleId).transition().duration(2000).attr("fill", "#DC7100");
			if( j == 0 ){
				if( kind == 1 ){             //AVL
					d3.select("#nodeText"+circleId).transition().delay(1000).duration(2000).attr("fill", "#FEFFAF").attr("font-size", "21px");	
				}
				else if( kind == 2 ){           //Red-Black
					d3.select("#nodeText"+circleId).transition().delay(1000).duration(2000).attr("fill", "#009100").attr("font-size", "21px");	
				}
			}
			/*if( leftRightArr != null || leftRightArr != undefined ){
				var stat = leftRightArr.pop;
				var compareNode = pathNodeArray[j];
				//alert(pathNodeArray+'/'+compareNode+'/'+j);
				if( stat == true ){
					document.getElementById("stat").innerHTML = input+"<"+compareNode+", so "+input+" put into left subtree.";
				}
				else{
					document.getElementById("stat").innerHTML = input+">"+compareNode+", so "+input+" put into right subtree.";

				}
			}*/
		}
	}
}

var searchNode = new searchBstAvlRbTree();