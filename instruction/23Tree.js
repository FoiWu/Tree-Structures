//Generate 2-3 Tree at one time.(Only support level 3)
//A node generate a array: [Left element, Middle element, Right element, Child of left, Child of middle, Child of right, parent] 

var nodeArray = new Array(10);      //Array of nodes.
var checkIndex;	       //Index of be checked.
var level = 0, element23t;         //element23t:Element of has been presented; level:Check whether the current position was empty or full.
var isOverflow = false;
var arrNumber = 0;      //Array number.
var currentArr = 0;     //Current array.
var temp = new Array(3);          //For sort element.
var tempArr;              //tempArr:Record currentArr.

//
//Build 2-3 tree.
//	
var showAll = function(){
	//
	//Show all node at one time.
	this.buildTree = function(){
		var currentLeft, currentRight, data, index=1;      
		//index:Index of node, currentRight&currentLeft:Current position, data:Current data.
			
		$(document).ready(function(){
			$(".describeRandom").hide();
			$(".describeInput").hide();
			$(".inputBox").hide();
		});
		
		for( element23t = 0; element23t <= 9; element23t++ ){
			//
			//Show nodes, besides first and second one.
			if( element23t >= 2 ){
				currentArr = 0;
	
				//Not have children.
				if( eval( "nodeArr"+currentArr+"[3] =="+ null || "nodeArr"+currentArr+"[3] =="+ undefined ) ){
					//Have right element.
					if( eval("nodeArr"+currentArr+"[2] !="+ null || "nodeArr"+currentArr+"[2] !="+ undefined ) ){
						eval("nodeArr"+currentArr+"[1] ="+dataArray[element23t]);
						
						//Sort elements.
						for( var j = 0; j <= 2; j++){
							temp[j] = eval("nodeArr"+arrNumber+"[j]");	
						}
						temp.sort(function(a,b){return a-b});
						for( var j = 0; j <= 2; j++){
							eval("nodeArr"+arrNumber+"[j] = temp[j]");	
						}
						
						isOverflow = true;					
						solOverflow.separateElement();
					}
					//Not have right element.
					else if( eval("nodeArr"+currentArr+"[2] =="+ null || "nodeArr"+currentArr+"[2] =="+ undefined ) ){
						//Current data smaller than current node.
						if( dataArray[element23t] < eval("nodeArr"+currentArr+"[currentArr]") ){
							eval("nodeArr"+arrNumber+"[2] = nodeArr"+currentArr+"[currentArr]");
							eval("nodeArr"+currentArr+"[currentArr] ="+dataArray+"[element23t]");
						}
						else{           //Current data bigger than current node.
							eval("nodeArr"+currentArr+"[2] = dataArray[element23t]");
						}
					}
				}
				
				//Have children.
				else if( eval( "nodeArr"+currentArr+"[3]" != null ) ){
					data = dataArray[element23t];    
					level=1;         
				
					while( level >= 1 ){        //Keeping check current position when level >=1.																	
						if( currentArr != null ){
							currentLeft = eval("nodeArr"+currentArr+"[0]");     //Update be compared left node.
							currentRight = eval("nodeArr"+currentArr+"[2]");     //Update be compared right node.
							if( currentLeft != null || currentLeft != undefined ){         //Have left element.    
								if( currentRight != null || currentRight != undefined ){       //Have right element.    
									tempArr = currentArr;
									if( data < currentLeft ){        //Left subtree.
									currentArr = eval("nodeArr"+currentArr+"[3]");
									}
									else if( data < currentRight && data > currentLeft ){       //middle subtree.
										currentArr = eval("nodeArr"+currentArr+"[4]");
									}
									else if( data > currentRight ){       //Right subtree.
										currentArr = eval("nodeArr"+currentArr+"[5]");
									}
									level++;     //Check again.
								}
								else{           //Not have right element.
									tempArr = currentArr;
									if( data < currentLeft ){        //Left subtree.
										currentArr = eval("nodeArr"+currentArr+"[3]");
									}
									else{       //middle subtree.
										currentArr = eval("nodeArr"+currentArr+"[4]");
									}
									level++;     //Check again.
								}
							}
						}
						else{               
							currentArr = tempArr;
							currentLeft = eval("nodeArr"+currentArr+"[0]");     //Update be compared left node.
							currentRight = eval("nodeArr"+currentArr+"[2]");     //Update be compared right node.
							if( eval( "nodeArr"+currentArr+"[3] =="+ null || "nodeArr"+currentArr+"[3] =="+ undefined ) ){
								//Have right element.
								if( eval("nodeArr"+currentArr+"[2] !="+ null || "nodeArr"+currentArr+"[2] !="+ undefined ) ){
									eval("nodeArr"+currentArr+"[1] ="+data);
									
									//Sort elements.
									for( var j = 0; j <= 2; j++){
										temp[j] = eval("nodeArr"+currentArr+"["+j+"]");	
									}
									temp.sort(function(a,b){return a-b});
									for( var j = 0; j <= 2; j++){
										eval("nodeArr"+currentArr+"["+j+"] = temp["+j+"]");	
									}
											
									isOverflow = true;					
									solOverflow.separateElement();
								}
								//Not have right element.
								else if( eval("nodeArr"+currentArr+"[2] =="+ null || "nodeArr"+currentArr+"[2] =="+ undefined ) ){
									//Current data smaller than current node.
									if( dataArray[element23t] < eval("nodeArr"+currentArr+"[0]") ){
										eval("nodeArr"+currentArr+"[2] = nodeArr"+currentArr+"[0]");
										eval("nodeArr"+currentArr+"[0] = dataArray[element23t]");
									}
									else{           //Current data bigger than current node.
										eval("nodeArr"+currentArr+"[2] = dataArray[element23t]");
									}
								}
							}					
						}
						level--;      //Have checked current position.
					}				
				}
			}
			
			//
			//Second node.
			else if( element23t == 1 ){     
				//Put element into left.      
				if( dataArray[element23t] < eval("nodeArr"+arrNumber+"[0]") ){
					eval("nodeArr"+arrNumber+"[2] = nodeArr"+arrNumber+"[0]");
					eval("nodeArr"+arrNumber+"[0] ="+dataArray[element23t]);
				}
				//Put element into right. 
				else{
					eval("nodeArr"+arrNumber+"[2] ="+dataArray[element23t]);
				}
			}
			
			//
			//Root.
			else if( element23t == 0 ){          			
				eval("nodeArr"+arrNumber+"=["+dataArray[element23t]+","+null+","+null+","+null+","+null+","+null+","+null+"]");
			}
			
			for( var j = 0; j <= arrNumber; j++ ){
				console.log(eval("nodeArr"+j));
			}
		}
		
		//
		//Tip of rotate tree.
		/*else if( document.getElementById("ShowAll").innerHTML == "Solve Overflow" ){
			solOverflow.separateElement();
		} */
	}
}

//
//Solve overflow.
var solveOverflow = function(){
	var lEle;      //Left element. 
	var mEle;      //Middle element.
	var rEle;       //Right element.
	var parentArr;      //parent of current array.
	var parentRight;       //Right element of parent array.
	var childOfParent;       //What kind of child of parent array.
	var tempArrNumber1;
	var tempArrNumber2;
	var tempCurrentArr;
	var sepTwice = false;            //Separate twice.
	var parentLC,  parentMC, parentRC;

	//
	//Separate element in same node.
	this.separateElement = function(){
		lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
		mEle = eval("nodeArr"+currentArr+"[1]");      //Middle element.
		rEle = eval("nodeArr"+currentArr+"[2]");       //Right element.
		parentArr = eval("nodeArr"+currentArr+"[6]");      //parent of current array.
		isOverflow = false;
		
		if( parentArr != null ){            //Check right element of parent array whether exit.
			if( rEle == null ){
				parentRight =  false;
			}
			else{
				parentRight = true;
			}
			//Check kind of child of parent array.
			for( var j = 0; j <= 9; j++ ){
				if( eval("nodeArr"+parentArr+"[j]") == currentArr ){
					childOfParent = j;
					break;
				}
			}
			
			console.log("@"+childOfParent);
		}
		
		isOverflow = false;
		
		//Root node.
		if( currentArr == 0 ){
			this.rootArray();
		}
		//Not root node.
		else{
			this.notRootArray();
		}
	}
	
	//Process root array.
	this.rootArray = function(){		
		//Generate left array of current array.
		arrNumber++;
		eval("nodeArr"+arrNumber+"=["+lEle +","+null+","+null+","+null+","+null+","+null+",currentArr]");
		parentLC =  eval("nodeArr"+currentArr+"[3]");
		parentMC  =  eval("nodeArr"+currentArr+"[4]");
		parentRC =  eval("nodeArr"+currentArr+"[5]");
		eval("nodeArr"+currentArr+"[3] ="+arrNumber);      //Record left array in original array.
	
		//Generate right array of current array.
		arrNumber++;
		
		//Sort elements.
		for( var j = 0; j <= 2; j++){
			temp[j] = eval("nodeArr"+currentArr+"[j]");	
		}
		temp.sort(function(a,b){return a-b});
		for( var j = 0; j <= 2; j++){
			eval("nodeArr"+currentArr+"[j] = temp[j]");	
		}
		
		lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
		mEle = eval("nodeArr"+currentArr+"[1]");      //Middle element.
		rEle = eval("nodeArr"+currentArr+"[2]");       //Right element.
		parentArr = eval("nodeArr"+currentArr+"[6]");      //parent of current array.
		
		eval("nodeArr"+arrNumber+"=["+rEle+","+null+","+null+","+null+","+null+","+null+",currentArr]");
		eval("nodeArr"+currentArr+"[4] ="+arrNumber);     //Record middle array in original array.
		
		eval("nodeArr"+currentArr+"[5] ="+null);      
		
		//Change data from current array.
		eval("nodeArr"+currentArr+"[0] ="+mEle);           //Middle element change to left element.
		eval("nodeArr"+currentArr+"[1] ="+null);           //Clean middle and right elements.
		eval("nodeArr"+currentArr+"[2] ="+null);
	
		if( sepTwice == true ){
			if( childOfParent == 3 ){
				eval("nodeArr"+(arrNumber-2)+"[6]="+tempArrNumber1);
				eval("nodeArr"+tempCurrentArr+"[6] ="+tempArrNumber1); 
				
				eval("nodeArr"+tempArrNumber1+"[3] =" + tempCurrentArr);
				eval("nodeArr"+tempArrNumber1+"[4] =" + (arrNumber-2));   
				
				eval("nodeArr"+tempArrNumber2+"[3] =" +parentMC);
				eval("nodeArr"+tempArrNumber2+"[4] =" +parentRC);
				
				eval("nodeArr"+parentLC+"[6] =" +tempArrNumber1);
				eval("nodeArr"+parentMC+"[6] =" +tempArrNumber2);
				eval("nodeArr"+parentRC+"[6] =" +tempArrNumber2);	
			}
			else if( childOfParent == 4 ){
				eval("nodeArr"+(arrNumber-2)+"[6]="+tempArrNumber2);
				eval("nodeArr"+tempCurrentArr+"[6] ="+tempArrNumber1); 
				
				eval("nodeArr"+tempArrNumber1+"[4] =" + tempCurrentArr); 
				eval("nodeArr"+tempArrNumber2+"[3] =" + (arrNumber-2)); 
				
				eval("nodeArr"+tempArrNumber1+"[3] =" +parentLC);
				eval("nodeArr"+tempArrNumber2+"[4] =" +parentRC);		
				
				eval("nodeArr"+parentLC+"[6] =" +tempArrNumber1);
				eval("nodeArr"+parentMC+"[6] =" +tempArrNumber1);
				eval("nodeArr"+parentRC+"[6] =" +tempArrNumber2);			
			}
			else if( childOfParent == 5 ){
				eval("nodeArr"+(arrNumber-2)+"[6]="+tempArrNumber2);
				eval("nodeArr"+tempCurrentArr+"[6] ="+tempArrNumber2); 
			
				eval("nodeArr"+tempArrNumber2+"[3] =" + tempCurrentArr); 
				eval("nodeArr"+tempArrNumber2+"[4] =" + (arrNumber-2)); 
				
				eval("nodeArr"+tempArrNumber1+"[3] =" + parentLC);
				eval("nodeArr"+tempArrNumber1+"[4] =" + parentMC); 
				
				eval("nodeArr"+parentLC+"[6] =" +tempArrNumber1);
				eval("nodeArr"+parentMC+"[6] =" +tempArrNumber2);
				eval("nodeArr"+parentMC+"[6] =" +tempArrNumber1);	  
			}   
		}
		//For test.
		for( var j = 0; j <= arrNumber; j++ ){
			console.log(eval("nodeArr"+j));
		}
	}
	
	//Process array but not root.
	this.notRootArray = function(){
		lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
		mEle = eval("nodeArr"+currentArr+"[1]");      //Middle element.
		rEle = eval("nodeArr"+currentArr+"[2]");       //Right element.
		parentArr = eval("nodeArr"+currentArr+"[6]");      //parent of current array.
		
		if( childOfParent == 3 ){       //Left array of parent array.
			//Parent array not has right array.
			if( eval("nodeArr"+parentArr+"[2]") == null ){        //Generate left array of current array.
				eval("nodeArr"+parentArr+"[2]="+mEle);
			
				//Current data smaller than current node.
				if(  eval("nodeArr"+parentArr+"[0]") >  eval("nodeArr"+parentArr+"[2]") ){
					eval("nodeArr"+parentArr+"[1] = nodeArr"+parentArr+"[0]");
					eval("nodeArr"+parentArr+"[0] = nodeArr"+parentArr+"[2]");
					eval("nodeArr"+parentArr+"[2] = nodeArr"+parentArr+"[1]");
					eval("nodeArr"+parentArr+"[1] = "+null);
				}
			
				arrNumber++;
				eval("nodeArr"+arrNumber+"=["+rEle +","+null+","+null+","+null+","+null+","+null+",parentArr]");
				
				eval("nodeArr"+parentArr+"[5] = nodeArr"+parentArr+"[4]");      //Recordright array in original array.
				
				eval("nodeArr"+parentArr+"[4] ="+arrNumber);      //Record middle array in original array.
				
				//Change data from current array.
				eval("nodeArr"+currentArr+"[1] ="+null);           //Clean middle and right elements.
				eval("nodeArr"+currentArr+"[2] ="+null);
			}
			//Parent array has right array.
			else{
				arrNumber++;
				
				tempArrNumber1 = arrNumber+1;
				tempArrNumber2 = arrNumber+2;
				tempCurrentArr = currentArr;
				
				eval("nodeArr"+arrNumber+"=["+rEle +","+null+","+null+","+null+","+null+","+null+","+null+"]");

				eval("nodeArr"+parentArr+"[1] ="+mEle);     
				
				eval("nodeArr"+currentArr+"[1] ="+null);           //Clean middle and right elements.
				eval("nodeArr"+currentArr+"[2] ="+null);
				
				currentArr = parentArr;       //Update currentArr.
				
				//Sort elements.
				for( var j = 0; j <= 2; j++){
					temp[j] = eval("nodeArr"+currentArr+"[j]");	
				}
				temp.sort(function(a,b){return a-b});
				for( var j = 0; j <= 2; j++){
					eval("nodeArr"+currentArr+"[j] = temp[j]");	
				}
				
				lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
				mEle = eval("nodeArr"+currentArr+"[1]");      //Middle element.
				rEle = eval("nodeArr"+currentArr+"[2]");       //Right element.
				parentArr = eval("nodeArr"+currentArr+"[6]");      //parent of current array.
				if( currentArr == 0 ){
					sepTwice = true;
					this.rootArray();
				}
				else{
					this.notRootArray();
				}
			}
		}
		else if( childOfParent == 4 ){       //Middle array of parent array.
			
			if( eval("nodeArr"+parentArr+"[2]") == null ){        //Parent array not has right array.
				eval("nodeArr"+parentArr+"[2]=" + mEle) ;
			
				//Current data smaller than current node.
				if(  eval("nodeArr"+parentArr+"[0]") >  eval("nodeArr"+parentArr+"[2]") ){
					eval("nodeArr"+parentArr+"[1] = nodeArr"+parentArr+"[0]");
					eval("nodeArr"+parentArr+"[0] = nodeArr"+parentArr+"[2]");
					eval("nodeArr"+parentArr+"[2] = nodeArr"+parentArr+"[1]");
					eval("nodeArr"+parentArr+"[1] = "+null);
				}
			
				arrNumber++;
				eval("nodeArr"+arrNumber+"=["+rEle +","+null+","+null+","+null+","+null+","+null+",parentArr]");
				
				eval("nodeArr"+parentArr+"[5] ="+arrNumber);      //Record right array in original array.
				
				//Change data from current array.
				eval("nodeArr"+currentArr+"[1] ="+null);           //Clean middle and right elements.
				eval("nodeArr"+currentArr+"[2] ="+null);
			}
			//Parent array has right array.
			else{
				arrNumber++;
				
				tempArrNumber1 = arrNumber+1;
				tempArrNumber2 = arrNumber+2;
				tempCurrentArr = currentArr;
				
				eval("nodeArr"+arrNumber+"=["+rEle +","+null+","+null+","+null+","+null+","+null+","+null+"]");
				eval("nodeArr"+parentArr+"[1] ="+mEle);
 
				eval("nodeArr"+parentArr+"[1] ="+mEle);  
				
				eval("nodeArr"+currentArr+"[1] ="+null);           //Clean middle and right elements.
				eval("nodeArr"+currentArr+"[2] ="+null);
				
				currentArr = parentArr;       //Update currentArr.
				
				//Sort elements.
				for( var j = 0; j <= 2; j++){
					temp[j] = eval("nodeArr"+currentArr+"[j]");	
				}
				temp.sort(function(a,b){return a-b});
				for( var j = 0; j <= 2; j++){
					eval("nodeArr"+currentArr+"[j] = temp[j]");	
				}
				
				lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
				mEle = eval("nodeArr"+currentArr+"[1]");      //Middle element.
				rEle = eval("nodeArr"+currentArr+"[2]");       //Right element.
				parentArr = eval("nodeArr"+currentArr+"[6]");      //parent of current array.
				if( currentArr == 0 ){
					sepTwice = true;
					this.rootArray();
				}
				else{
					this.notRootArray();
				}
			}
		}
		else if( childOfParent == 5 ){       //Right array of parent array.
			arrNumber++;
			
			tempArrNumber1 = arrNumber+1;
			tempArrNumber2 = arrNumber+2;
			tempCurrentArr = currentArr;
			
			eval("nodeArr"+arrNumber+"=["+rEle +","+null+","+null+","+null+","+null+","+null+","+null+"]");

			eval("nodeArr"+parentArr+"[1] ="+mEle);
			
			eval("nodeArr"+currentArr+"[1] ="+null);           //Clean middle and right elements.
			eval("nodeArr"+currentArr+"[2] ="+null);
			
			currentArr = parentArr;       //Update currentArr.
			
			//Sort elements.
			for( var j = 0; j <= 2; j++){
				temp[j] = eval("nodeArr"+currentArr+"[j]");	
			}
			temp.sort(function(a,b){return a-b});
			for( var j = 0; j <= 2; j++){
				eval("nodeArr"+currentArr+"[j] = temp[j]");	
			}
			
			lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
			mEle = eval("nodeArr"+currentArr+"[1]");      //Middle element.
			rEle = eval("nodeArr"+currentArr+"[2]");       //Right element.
			parentArr = eval("nodeArr"+currentArr+"[6]");      //parent of current array.
			if( currentArr == 0 ){
				sepTwice = true;
				this.rootArray();
			}
			else{
				this.notRootArray();
			}
		}
	}	
}

var allNode = new showAll();
var solOverflow = new solveOverflow();