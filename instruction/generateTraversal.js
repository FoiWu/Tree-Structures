//Generate pre-order, in-order, post-order and breadth first traversal.

var noNullArr = new Array();      //noNullArr and nodeArray are the same, but without null.
var leftArr = new Array(7);       //Left children of values of noNullArr.
var rightArr = new Array(7);       //Right children of values of noNullArr.
var preArr = new Array();      //Put pre-order into PreArr.
var inArr = new Array();        //Put in-order into inArr.
var postArr = new Array();      //Put post-order into PostArr.

$(document).ready(function(){
	$("#tORfBr").hide();
	$("#tORfIn").hide();
	$("#tORfPost").hide();
	$("#tORfPre").hide();
	$(".traversalAns").hide();
	$("#suggest").hide();
	$( "#preSVG" ).hide();
  	$( "#inSVG" ).hide();
  	$( "#postSVG" ).hide();
  	$( "#breSVG" ).hide();
});

//Display null.
$(document).ready(function() { 
	$('#ShowAll').click(function() { 
		 $(function() {
			$( "#nullSVG" ).dialog({
			   position: [0,0],
			   closeOnEscape: false,
			   open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
             });
		});
	});
});

//Display tip of preorder.
$(document).ready(function() { 
	$('#tipPreorder').click(function() { 
		 $(function() {
			$( "#preSVG" ).dialog()
			    .prev(".ui-dialog-titlebar").css("background","#FFAC55").css("margin-right","60px")
				.find('.ui-button').css("background","#FFAC55");
		});
	});
});

//Display tip of inorder.
$(document).ready(function() { 
	$('#tipInorder').click(function() { 
		 $(function() {
			$( "#inSVG" ).dialog()
				.prev(".ui-dialog-titlebar").css("background","#FFAC55").css("margin-right","60px")
				.find('.ui-button').css("background","#FFAC55");
		});
	});    
});

//Display tip of postorder.
$(document).ready(function() { 
	$('#tipPostorder').click(function() { 
		 $(function() {
			$( "#postSVG" ).dialog()
				.prev(".ui-dialog-titlebar").css("background","#FFAC55").css("margin-right","60px")
				.find('.ui-button').css("background","#FFAC55");
		});
		
	});    
});

//Display tip of breadth first.
$(document).ready(function() { 
	$('#tipBre').click(function() { 
		 $(function() {
			$( "#breSVG" ).dialog()
				.prev(".ui-dialog-titlebar").css("background","#FFAC55").css("margin-right","60px")
				.find('.ui-button').css("background","#FFAC55");
		});
	});    
});

//
//Preparation of generate pre-order, in-order, post-order and breadth first traversal.
//
var TraversalPreparation = function(){	
	//
	//Generate leftArr, rightArr and  noNullArr.
	//
	this.putLRchildren = function(page){        
		var index, leftIndex, rightIndex, arrPos = 0;
		
		//Put the left children and right children of values of noNullArr into leftArr and rightArr respectively.
		for( var j = 0; j <= (nodeArray.length-1); j++ ){
			if( nodeArray[j] != undefined || nodeArray[j] != null ){
				index = j+1;
				leftIndex = 2*index;
				rightIndex = (2*index)+1;
				leftArr[arrPos] = nodeArray[(leftIndex-1)];
				rightArr[arrPos] = nodeArray[(rightIndex-1)];
				arrPos++;
			}
		}
		
		//Generate nodeArray without null.( noNullArr )
		for( var k = 0; k <= (nodeArray.length-1); k++ ){
			if( nodeArray[k] != null || nodeArray[k] != undefined ){
				noNullArr.push(nodeArray[k]);
			}
		}
		
		$(document).ready(function(){
 			$("#TraversalOrder").hide();
		});
		
		//
		//page = 1:BST_Simulation(show_all).html & BST_Test(Traversal).html; 2:Preorder+Inorder & Inorder+Postorder. 
		if( page == 1 ){
			TraOrder.preOrder(1);
			TraOrder.inOrder(1);
			TraOrder.postOrder(1);
			TraOrder.breadthFirst(1);
		}
		else if( page == 2 ){
			TraOrder.preOrder(2);
			TraOrder.inOrder(2);
			TraOrder.postOrder(2);
		}
	}
}
	
	
//
//Generate pre-order, in-order, post-order and breadth first traversal.
//
var TraversalOrder = function(){
	//
	//Generate pre-order traversal.
	//
	this.preOrder = function(page){        
		var tempArr = new Array();      //Put right children of current node first, then put left children of current node.
		var pos = 0; order = 0;       //pos:position of Array; order:Order of pre-order.
		var prePage1, prePage2;
		
		while( order <= 6 ){
			if( rightArr[pos] != null || rightArr[pos] != undefined ){
				tempArr.push(rightArr[pos]);
			}
			if( leftArr[pos] != null || leftArr[pos] != undefined ){
				tempArr.push(leftArr[pos]);
			}
			
			preArr[order] = noNullArr[pos];
			temp = tempArr.pop();
			order++;
			preArr[order] = temp;
			
			for( var k = 1; k <= (nodeArray.length-1); k++ ){
				if( temp == noNullArr[k] ){
					pos = k;
					break;
				}
			}
		}
		
		//
		//page = 1:BST_Simulation(show_all).html & BST_Test(Traversal).html; 2:Preorder+Inorder & Inorder+Postorder. 
		if( page == 1 ){
			prePage1 = document.getElementById("traverseDepthPre");
			prePage1.innerHTML = preArr.toString();
		}
		else if( page == 2 ){
			for( var j = 0; j <= 6; j++ ){
				prePage2 = document.getElementById("pre"+j);
				//console.log(prePage2);
				prePage2.innerHTML = preArr[j]+",";	
			}
		} 
		
		console.log(preArr); 
	}
	
	//
	//Generate in-order traversal.
	//
	this.inOrder = function(page){
		var inPage1, inPage2;
		
		//Put values of noNullArr into inArr.
		for( var k = 0; k <= 6; k++ ){      
			inArr[k] = 	noNullArr[k];
		}
		
		//
		//page = 1:BST_Simulation(show_all).html & BST_Test(Traversal).html; 2:Preorder+Inorder & Inorder+Postorder. 
		
		//page = 1:For numbers; 2:For alphabet.
		if( page == 1 ){
			inArr.sort(function(a,b){return a-b});       //Ascending order.
		}
		else if( page == 2 ){
			inArr.sort();       //Ascending order.
		}
		
		//
		if( page == 1 ){
			inPage1 = document.getElementById("traverseDepthIn");
			inPage1.innerHTML = inArr.toString();
		}
		else if( page == 2 ){
			for( var j = 0; j <= 6; j++ ){
				inPage2 = document.getElementById("i"+j);
				inPage2.innerHTML = inArr[j]+",";	
			}
		}  
		
		console.log(inArr);     
	}
	
	//
	//Generate post-order traversal.
	//
	this.postOrder = function(page){
		var tempArr = new Array();      //Put left children of current node first, then put right children of current node.
		var pos = 0; order = 0;       //pos:position of Array; order:Order of pre-order.
		var postPage1, postPage2;
		
		while( order <= 6 ){
			if( leftArr[pos] != null || leftArr[pos] != undefined ){
				tempArr.push(leftArr[pos]);
			}
			if( rightArr[pos] != null || rightArr[pos] != undefined ){
				tempArr.push(rightArr[pos]);
			}
			
			postArr[order] = noNullArr[pos];
			temp = tempArr.pop();
			order++;
			postArr[order] = temp;
			
			for( var k = 1; k <= (nodeArray.length-1); k++ ){
				if( temp == noNullArr[k] ){
					pos = k;
					break;
				}
			}
		}
		postArr.reverse();
		
		//
		//page = 1:BST_Simulation(show_all).html & BST_Test(Traversal).html; 2:Preorder+Inorder & Inorder+Postorder. 
		if( page == 1 ){
			postPage1 = document.getElementById("traverseDepthPost");
			postPage1.innerHTML = postArr.toString();
			$("#traverseBreadth").fadeIn();
			$("#traverseDepthIn").fadeIn();
			$("#traverseDepthPost").fadeIn();
			$("#traverseDepthPre").fadeIn();
		}
		else if( page == 2 ){
			for( var j = 0; j <= 6; j++ ){
				postPage2 = document.getElementById("post"+j);
				postPage2.innerHTML = postArr[(j+1)]+",";	
			}
		}
		
		console.log(postArr);
	}
	
	//
	//Generate breadth first traversal.
	//It can be presented by nodeArray without null (= noNullArr).
	this.breadthFirst = function(){
		var bre = document.getElementById("traverseBreadth");
		bre.innerHTML = noNullArr.toString(); 
		console.log(noNullArr);
	}
}

var TraPrepare= new TraversalPreparation();
var TraOrder= new TraversalOrder();

