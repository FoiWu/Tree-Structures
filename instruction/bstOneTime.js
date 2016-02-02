//For traversal. 

var nodeArray = new Array();      //Array of nodes.
var nodeNumber;
var displayPrePost;

//
//Build a tree.
//	
var showAll = function(){
	//
	//Show all node at one time.
	this.oneTime = function(type){
		var index, level, currentPos, data;
		//index:Index of node, 
		//level:Check whether the current position was empty or full,      
		//currentPos:Current position,
		//data:Current data.
		
		nodeArray[0] = dataArray[0];      //Put root into nodeArray[0].	 
		
		for( nodeNumber = 1; nodeNumber <= 6; nodeNumber++ ){
			data = dataArray[nodeNumber];
			level=1;
			index=1;
			
			while( level >= 1 ){        //Keeping check current position when level >=1.
				currentPos = nodeArray[(index-1)];     //Update be compared node.
				
				if( currentPos != null || currentPos != undefined ){
					if( data <= currentPos ){     //Left subtree.
						index = index*2;
					}
					else{       //Right subtree.
						index = (index*2)+1;
					}
					level++;     //Check again.
				}
				else{
					nodeArray[(index-1)] = data;      //Put number into array.	
				}
				level--;      //Have checked current position.
			}
		} 
		console.log(dataArray);
		console.log(nodeArray);
		
		//Press "Preorder+Inorder" button from BST_Simulation(Preorder+Inorder->Postorder & Inorder+Postorder->Preorder).html or BST_Test(Preorder+Inorder->Postorder &Inorder+Postorder->Preorder).html
		if( type == 1 ){
			displayPrePost = true;
			$(document).ready(function(){
				$("#post").hide();
				$("#nextPreIn").show();
				$("#postAndIn").hide();
				$("#preAndIn").hide();
				$("#nextNode").show();
			});
		}
		//Press "Inorder+Postorder" button from BST_Simulation(Preorder+Inorder->Postorder & Inorder+Postorder->Preorder).html or BST_Test(Preorder+Inorder->Postorder &Inorder+Postorder->Preorder).html
		else if( type == 2 ){
			displayPrePost = false;
			$(document).ready(function(){
				$("#pre").hide();
				$("#nextPostIn").show();
				$("#postAndIn").hide();
				$("#preAndIn").hide();
				$("#nextNode").show();
			});
		}
		//Press "Show All" button from BST_Simulation(show_all).html
		else if( type == 0 ){
			$(document).ready(function(){
				$("#TraversalOrder").show();
				$("#ShowAll").hide();
				$("#GetNodes").hide();
				$("#InputNodes").hide();
			});
		}
	}
}
 
var allNode = new showAll();