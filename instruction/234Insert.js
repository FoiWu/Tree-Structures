//Generate 2-3-4 Tree step by step.(Only support level 3)
//A node generate a array:
//[0]:Left element; [1]:Center-left element( If [1] has element, means that node is overflowing. (overflow tag)); [2]:Right element; [3]: Center-right element; [4]:Left child; [5]:Center-left child; [6]:Right child; [7]Center-right child; [8]:parent. 

var nodeArray = new Array(13);      //Array of nodes.
var checkIndex;	       //Index of be checked.
var level = 0, element234t = 0;         //element234t:Element of has been presented; level:Check whether the current position was empty or full.
var isOverflow = false;
var arrNumber = 0;      //Array number.
var currentArr = 0;     //Current array.
var temp = new Array(4);          //For sort element.
var tempArr;              //tempArr:Record currentArr.

//
//Build 2-3-4 tree.
//	
var showAll = function(){
	var currentLeft, currentRight, data, index=1;      
	//index:Index of node, currentRight&currentLeft:Current position, data:Current data.
	
	//
	//Show all node at one time.
	this.buildTree = function(){
		$(document).ready(function(){
			$(".describeRandom").hide();
			$(".describeInput").hide();
			$(".inputBox").hide();
		});
		
		if( document.getElementById("ShowAll").innerHTML == "Show 2-3-4 Tree" ){
			//
			//Show nodes, besides first and second one.
			if( element234t >= 2 ){
				currentArr = 0;
	
				//Not have children.
				if( eval( "nodeArr"+currentArr+"[4] =="+ null || "nodeArr"+currentArr+"[4] =="+ undefined ) ){
					//Have right element.
					if( eval("nodeArr"+currentArr+"[3] !="+ null || "nodeArr"+currentArr+"[3] !="+ undefined ) ){
						//Have center-right element.
						if( eval("nodeArr"+currentArr+"[2] !="+ null || "nodeArr"+currentArr+"[2] !="+ undefined ) ){						
							eval("nodeArr"+currentArr+"[1] ="+dataArray[element234t]);
						
							//Sort elements.
							for( var j = 0; j <= 3; j++){
								temp[j] = eval("nodeArr"+arrNumber+"[j]");	
							}
							temp.sort(function(a,b){return a-b});
							for( var j = 0; j <= 3; j++){
								eval("nodeArr"+arrNumber+"[j] = temp[j]");	
							}
							
							isOverflow = true;					
							document.getElementById("ShowAll").innerHTML = "Solve Overflow";
						}
							
						//Not have center-right element.
						else{
							if( dataArray[element234t] < eval("nodeArr"+currentArr+"[0]") ){
								eval("nodeArr"+currentArr+"[2] = nodeArr"+currentArr+"[0]");
								eval("nodeArr"+currentArr+"[0] ="+dataArray[element234t]);
							}
							else if( dataArray[element234t] > eval("nodeArr"+currentArr+"[0]") && dataArray[element234t] < eval("nodeArr"+currentArr+"[3]") ){
								eval("nodeArr"+currentArr+"[2] ="+dataArray[element234t]);
							}
							else if( dataArray[element234t] > eval("nodeArr"+currentArr+"[3]") ){
								eval("nodeArr"+currentArr+"[2] = nodeArr"+currentArr+"[3]");
								eval("nodeArr"+currentArr+"[3] ="+dataArray[element234t]);
							}
						}
					}
					
					//Not have right element.
					else if( eval("nodeArr"+currentArr+"[3] =="+ null || "nodeArr"+currentArr+"[3] =="+ undefined ) ){
						//Current data smaller than current node.
						if( dataArray[element234t] < eval("nodeArr"+currentArr+"[currentArr]") ){
							eval("nodeArr"+currentArr+"[3] = nodeArr"+currentArr+"[currentArr]");
							eval("nodeArr"+currentArr+"[currentArr] ="+dataArray+"[element234t]");
						}
						else{           //Current data bigger than current node.
							eval("nodeArr"+currentArr+"[3] = dataArray[element234t]");
						}
					}
				}
				
				//Have children.
				else if( eval( "nodeArr"+currentArr+"[4]" != null ) ){
					data = dataArray[element234t];    
					level=1;         
				
					while( level >= 1 ){        //Keeping check current position when level >=1.																	
						if( currentArr != null ){
							currentLeft = eval("nodeArr"+currentArr+"[0]");     //Update be compared left node.
							currentCenterR = eval("nodeArr"+currentArr+"[2]");     //Update be compared Center-righht node.
							currentRight = eval("nodeArr"+currentArr+"[3]");     //Update be compared right node.
							if( currentLeft != null || currentLeft != undefined ){         //Have left element.    
								if( currentRight != null || currentRight != undefined ){       //Have right element.    
									if( currentCenterR != null || currentCenterR != undefined ){       //Have center-righht element.    
										tempArr = currentArr;
										if( data < currentLeft ){        //Left subtree.
											currentArr = eval("nodeArr"+currentArr+"[4]");
										}
										else if( data < currentCenterR && data > currentLeft ){       //Center-left subtree.
											currentArr = eval("nodeArr"+currentArr+"[5]");
										}
										else if( data < currentRight && data > currentCenterR ){       //Center-right subtree.
											currentArr = eval("nodeArr"+currentArr+"[6]");
										}
										else if( data > currentRight ){       //Right subtree.
											currentArr = eval("nodeArr"+currentArr+"[7]");
										}
										level++;     //Check again.
									}
									else{        //Not have center-right element.
										tempArr = currentArr;
										if( data < currentLeft ){        //Left subtree.
											currentArr = eval("nodeArr"+currentArr+"[4]");
										}
										else if( data < currentRight && data > currentLeft ){       //Center-left subtree.
											currentArr = eval("nodeArr"+currentArr+"[5]");
										}
										else if( data > currentRight ){        //Center-right subtree.
											currentArr = eval("nodeArr"+currentArr+"[6]");
										}
										level++;     //Check again.
									}
								}
								else{           //Not have right element.
									tempArr = currentArr;
									if( data < currentLeft ){        //Left subtree.
										currentArr = eval("nodeArr"+currentArr+"[4]");
									}
									else{
										currentArr = eval("nodeArr"+currentArr+"[5]");	
									}
									level++;     //Check again.
								}
							}
						}
						else{               
							currentArr = tempArr;
							currentLeft = eval("nodeArr"+currentArr+"[0]");     //Update be compared left node.
							currentCenterR = eval("nodeArr"+currentArr+"[2]");     //Update be compared Center-righht node.
							currentRight = eval("nodeArr"+currentArr+"[3]");     //Update be compared right node.
							if( eval( "nodeArr"+currentArr+"[4] =="+ null || "nodeArr"+currentArr+"[4] =="+ undefined ) ){
								//Have right element.
								if( eval("nodeArr"+currentArr+"[3] !="+ null || "nodeArr"+currentArr+"[3] !="+ undefined ) ){
									//Have center-right element.
									if( eval("nodeArr"+currentArr+"[2] !="+ null || "nodeArr"+currentArr+"[2] !="+ undefined ) ){						
										eval("nodeArr"+currentArr+"[1] ="+dataArray[element234t]);
									
										//Sort elements.
										for( var j = 0; j <= 3; j++){
											temp[j] = eval("nodeArr"+currentArr+"[j]");	
										}
										temp.sort(function(a,b){return a-b});
										for( var j = 0; j <= 3; j++){
											eval("nodeArr"+currentArr+"[j] = temp[j]");	
										}
										
										isOverflow = true;					
										document.getElementById("ShowAll").innerHTML = "Solve Overflow";
									}
										
									//Not have center-right element.
									else{
										if( dataArray[element234t] < eval("nodeArr"+currentArr+"[0]") ){
											eval("nodeArr"+currentArr+"[2] = nodeArr"+currentArr+"[0]");
											eval("nodeArr"+currentArr+"[0] ="+dataArray[element234t]);
										}
										else if( dataArray[element234t] < eval("nodeArr"+currentArr+"[3]") && dataArray[element234t] > eval("nodeArr"+currentArr+"[0]") ){
											eval("nodeArr"+currentArr+"[2] ="+dataArray[element234t]);
										}
										else if( dataArray[element234t] > eval("nodeArr"+currentArr+"[3]") ){
											eval("nodeArr"+currentArr+"[2] = nodeArr"+currentArr+"[3]");
											eval("nodeArr"+currentArr+"[3] ="+dataArray[element234t]);
										}
									}
								}
								//Not have right element.
								else if( eval("nodeArr"+currentArr+"[3] =="+ null || "nodeArr"+currentArr+"[3] =="+ undefined ) ){
									//Current data smaller than current node.
									if( dataArray[element234t] < eval("nodeArr"+currentArr+"[0]") ){
										eval("nodeArr"+currentArr+"[3] = nodeArr"+currentArr+"[0]");
										eval("nodeArr"+currentArr+"[0] ="+dataArray[element234t]);
									}
									else{           //Current data bigger than current node.
										eval("nodeArr"+currentArr+"[3] = dataArray[element234t]");
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
			else if( element234t == 1 ){     
				//Put element into left.      
				if( dataArray[element234t] < eval("nodeArr"+arrNumber+"[0]") ){
					eval("nodeArr"+arrNumber+"[3] = nodeArr"+arrNumber+"[0]");
					eval("nodeArr"+arrNumber+"[0] ="+dataArray[element234t]);
				}
				//Put element into right. 
				else{
					eval("nodeArr"+arrNumber+"[3] ="+dataArray[element234t]);
				}
			}
			
			//
			//Root.
			else if( element234t == 0 ){          			
				eval("nodeArr"+arrNumber+"=["+dataArray[element234t]+","+null+","+null+","+null+","+null+","+null+","+null+","+null+","+null+"]");
			}
			
			for( var j = 0; j <= arrNumber; j++ ){
				console.log(eval("nodeArr"+j));
			}
			
			element234t++;      //Next element.
		}
		
		//
		//Tip of rotate tree.
		else if( document.getElementById("ShowAll").innerHTML == "Solve Overflow" ){
			solOverflow.separateElement();
		} 
	
		//
		////Press "Show All" button from BST_Simulation(show_all).html.
		if( element234t >= 13 ){
			$(document).ready(function(){
				$("#TraversalOrder").fadeIn();
				$("#ShowAll").hide();
			});
		}
		if( isOverflow == true ){
			$("#ShowAll").fadeIn();
		}
	}
}

//
//Solve overflow.
var solveOverflow = function(){
	var lEle;      //Left element. 
	var mlEle;      //Center-left element. 
	var mrEle;      //Center-right element. 
	var rEle;       //Right element.
	var parentArr;      //parent of current array.
	var childOfParent;       //What kind of child of parent array.
	var tempArrNumber1;
	var tempArrNumber2;
	var tempCurrentArr;
	var sepTwice = false;            //Separate twice.
	var parentLC,  parentMLC, parentMRC, parentRC;

	//
	//Separate element in same node.
	this.separateElement = function(){
		lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
		mlEle  = eval("nodeArr"+currentArr+"[1]");     //Center-left element. 
		mrEle = eval("nodeArr"+currentArr+"[2]");     //Center-right element. 
		rEle = eval("nodeArr"+currentArr+"[3]");       //Right element.
		parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.
		isOverflow = false;
		
		if( parentArr != null ){            //Check right element of parent array whether exit.
			//Check kind of child of parent array.
			for( var j = 4; j <= 12; j++ ){
				if( eval("nodeArr"+parentArr+"[j]") == currentArr ){
					childOfParent = j;
					break;
				}
			}
			
			console.log("@"+childOfParent);
		}
		
		isOverflow = false;
		document.getElementById("ShowAll").innerHTML = "Show 2-3-4 Tree";	
		
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
		parentLC =  eval("nodeArr"+currentArr+"[4]");
		parentMLC =  eval("nodeArr"+currentArr+"[5]");
		parentMRC  =  eval("nodeArr"+currentArr+"[6]");
		parentRC =  eval("nodeArr"+currentArr+"[7]");
		
		parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.

		//Sort elements.
		for( var j = 0; j <= 3; j++){
			temp[j] = eval("nodeArr"+currentArr+"[j]");	
		}
		temp.sort(function(a,b){return a-b});
		for( var j = 0; j <= 3; j++){
			eval("nodeArr"+currentArr+"[j] = temp[j]");	
		}
	
		//Generate left array of current array.
		arrNumber++;
		eval("nodeArr"+arrNumber+"=["+lEle +","+null+","+null+","+null+","+null+","+null+","+null+","+null+",currentArr]");
		eval("nodeArr"+currentArr+"[4] ="+arrNumber);      //Record left array in original array.
	
		lEle = eval("nodeArr"+currentArr+"[0]");      //Left element.
		mlEle = eval("nodeArr"+currentArr+"[1]");      //Center-left element. 
		mrEle = eval("nodeArr"+currentArr+"[2]");      //Center-right element. 
		rEle = eval("nodeArr"+currentArr+"[3]");       //Right element.
		parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.
		
		//Generate right array of current array.
		arrNumber++;
		eval("nodeArr"+arrNumber+"=["+mrEle+","+null+","+null+","+rEle+","+null+","+null+","+null+","+null+",currentArr]");
		eval("nodeArr"+currentArr+"[5] ="+arrNumber);     //Record Center-left array in original array.
		
		eval("nodeArr"+currentArr+"[7] ="+null);         //???????????????????
		
		//Change data from current array.
		eval("nodeArr"+currentArr+"[0] ="+mlEle);           //Center-left element change to left element.
		eval("nodeArr"+currentArr+"[1] ="+null);
		eval("nodeArr"+currentArr+"[2] ="+null);           //Clean center-right and right elements.
		eval("nodeArr"+currentArr+"[3] ="+null);
	
		if( sepTwice == true ){
			console.log(arrNumber+"/"+tempArrNumber1+"/"+tempCurrentArr+"/"+parentLC+"/"+parentMLC+"/"+parentMRC+"/"+parentRC+"/"+lEle+"/"+mlEle+"/"+mrEle+"/"+rEle);
			if( childOfParent == 4 ){
				eval("nodeArr"+(arrNumber-2)+"[8]="+tempArrNumber1);
				eval("nodeArr"+tempCurrentArr+"[8] ="+tempArrNumber1); 
				eval("nodeArr"+tempCurrentArr+"[1] ="+null); 
			
				eval("nodeArr"+tempArrNumber1+"[4] =" + parentLC); 
				eval("nodeArr"+tempArrNumber1+"[5] =" + (arrNumber-2)); 
				eval("nodeArr"+tempArrNumber1+"[6] =" + null); 
				
				eval("nodeArr"+tempArrNumber2+"[4] =" + parentMLC);
				eval("nodeArr"+tempArrNumber2+"[5] =" + parentMRC); 
				eval("nodeArr"+tempArrNumber2+"[6] =" + parentRC);
				eval("nodeArr"+tempArrNumber2+"[7] =" + null);
				
				eval("nodeArr"+parentMLC+"[8] =" +tempArrNumber2);
				eval("nodeArr"+parentMRC+"[8] =" +tempArrNumber2);
				eval("nodeArr"+parentRC+"[8] =" +tempArrNumber2);
				
				nodeArr0[6] = null;	
			}
			else if( childOfParent == 5 ){
				eval("nodeArr"+(arrNumber-2)+"[8]="+tempArrNumber2);
				eval("nodeArr"+tempCurrentArr+"[8] ="+tempArrNumber1); 
				eval("nodeArr"+tempCurrentArr+"[1] ="+null); 
			
				eval("nodeArr"+tempArrNumber1+"[4] =" + parentLC); 
				eval("nodeArr"+tempArrNumber1+"[5] =" + parentMLC); 
				eval("nodeArr"+tempArrNumber1+"[6] =" + null); 
				
				eval("nodeArr"+tempArrNumber2+"[4] =" + (arrNumber-2));
				eval("nodeArr"+tempArrNumber2+"[5] =" + parentMRC); 
				eval("nodeArr"+tempArrNumber2+"[6] =" + parentRC);
				eval("nodeArr"+tempArrNumber2+"[7] =" + null);
				
				eval("nodeArr"+parentLC+"[8] =" +tempArrNumber1); 
				eval("nodeArr"+parentMLC+"[8] =" +tempArrNumber1);
				eval("nodeArr"+parentMRC+"[8] =" +tempArrNumber2);
				eval("nodeArr"+parentRC+"[8] =" +tempArrNumber2);
				
				nodeArr0[6] = null;	
			}
			else if( childOfParent == 6 ){
				eval("nodeArr"+(arrNumber-2)+"[8]="+tempArrNumber2);
				eval("nodeArr"+tempCurrentArr+"[8] ="+tempArrNumber2);    /////// //////////////1 or 2
				eval("nodeArr"+tempCurrentArr+"[1] ="+null); 
			
				eval("nodeArr"+tempArrNumber1+"[4] =" + parentLC); 
				eval("nodeArr"+tempArrNumber1+"[5] =" + parentMLC); 
				eval("nodeArr"+tempArrNumber1+"[6] =" + null); 
				
				eval("nodeArr"+tempArrNumber2+"[4] =" + parentMRC);
				eval("nodeArr"+tempArrNumber2+"[5] =" + (arrNumber-2));
				eval("nodeArr"+tempArrNumber2+"[6] =" + parentRC);
				eval("nodeArr"+tempArrNumber2+"[7] =" + null);
				
				eval("nodeArr"+parentLC+"[8] =" +tempArrNumber1);
				eval("nodeArr"+parentMLC+"[8] =" +tempArrNumber1);
				eval("nodeArr"+parentMRC+"[8] =" +tempArrNumber2);
				eval("nodeArr"+parentRC+"[8] =" +tempArrNumber2);
				
				nodeArr0[6] = null;		  
			}   
			else if( childOfParent == 7 ){
				eval("nodeArr"+(arrNumber-2)+"[8]="+tempArrNumber2);
				eval("nodeArr"+tempCurrentArr+"[8] ="+tempArrNumber2); 
				eval("nodeArr"+tempCurrentArr+"[1] ="+null); 
			
				eval("nodeArr"+tempArrNumber2+"[4] =" + parentMRC); 
				eval("nodeArr"+tempArrNumber2+"[5] =" + tempCurrentArr); 
				eval("nodeArr"+tempArrNumber2+"[6] =" + (arrNumber-2)); 
				
				eval("nodeArr"+tempArrNumber1+"[4] =" + parentLC);
				eval("nodeArr"+tempArrNumber1+"[5] =" + parentMLC); 
				eval("nodeArr"+tempArrNumber1+"[6] =" + null);
				eval("nodeArr"+tempArrNumber1+"[7] =" + null);
				
				eval("nodeArr"+parentLC+"[8] =" +tempArrNumber1);
				eval("nodeArr"+parentMLC+"[8] =" +tempArrNumber1);
				eval("nodeArr"+parentMRC+"[8] =" +tempArrNumber2);	
				
				nodeArr0[6] = null;
				//eval("nodeArr"+parentArr+"[6] =" +null);	  
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
		mlEle  = eval("nodeArr"+currentArr+"[1]");     //Center-left element. 
		mrEle = eval("nodeArr"+currentArr+"[2]");     //Center-right element. 
		rEle = eval("nodeArr"+currentArr+"[3]");       //Right element.
		parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.
		
		console.log(arrNumber+"/"+tempArrNumber1+"/"+tempCurrentArr+"/"+parentLC+"/"+"/"+parentMLC+"/"+parentMRC+"/"+parentRC+"/"+lEle+"/"+mlEle+"/"+mrEle+"/"+rEle);
			
		if( childOfParent == 4 ){       //Left array of parent array.			
			if( eval("nodeArr"+parentArr+"[3]") == null ){       //Parent array not has right array.			 
				eval("nodeArr"+parentArr+"[3]="+mlEle);    //Generate right array of current array.
			
				//Current data smaller than current node.
				if(  eval("nodeArr"+parentArr+"[0]") >  eval("nodeArr"+parentArr+"[3]") ){
					eval("nodeArr"+parentArr+"[1] = nodeArr"+parentArr+"[0]");
					eval("nodeArr"+parentArr+"[0] = nodeArr"+parentArr+"[3]");
					eval("nodeArr"+parentArr+"[3] = nodeArr"+parentArr+"[1]");
					eval("nodeArr"+parentArr+"[1] = "+null);
				}
			
				arrNumber++;
				eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
				
				eval("nodeArr"+parentArr+"[6] = nodeArr"+parentArr+"[5]");      //Recordright array in original array.
				eval("nodeArr"+parentArr+"[5] ="+arrNumber);      //Record middle array in original array.
				
				//Change data from current array.
				eval("nodeArr"+currentArr+"[1] ="+null);               //Clean middle and right elements.
				eval("nodeArr"+currentArr+"[2] ="+null);          
				eval("nodeArr"+currentArr+"[3] ="+null);
			}
			else if( eval("nodeArr"+parentArr+"[3]") != null ){         //Parent array has right array.
				if( eval("nodeArr"+parentArr+"[2]") == null ){       //Parent array not has center-right array.
					if( mlEle < eval("nodeArr"+parentArr+"[0]") ){
						eval("nodeArr"+parentArr+"[2]= nodeArr"+parentArr+"[0]");
						eval("nodeArr"+parentArr+"[0]=" + mlEle);
					}
					else if( mlEle > eval("nodeArr"+parentArr+"[0]") && mlEle < eval("nodeArr"+parentArr+"[3]") ){
						eval("nodeArr"+parentArr+"[2]=" + mlEle);
					}
					else if( mlEle > eval("nodeArr"+parentArr+"[3]") ){
						eval("nodeArr"+parentArr+"[2]= nodeArr"+parentArr+"[3]");
						eval("nodeArr"+parentArr+"[3]=" + mlEle);
					}
					eval("nodeArr"+currentArr+"[1] ="+null);
					eval("nodeArr"+currentArr+"[2] ="+null);
					eval("nodeArr"+currentArr+"[3] ="+null);
					arrNumber++;
					//eval("nodeArr"+parentArr+"[7]=" + arrNumber);
					eval("nodeArr"+parentArr+"[7] = nodeArr"+parentArr+"[6]"); 
					eval("nodeArr"+parentArr+"[6] = nodeArr"+parentArr+"[5]");
					eval("nodeArr"+parentArr+"[5] ="+ arrNumber);
					eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
				}
				else if( eval("nodeArr"+parentArr+"[2]") != null ){
					arrNumber++;
					
					tempArrNumber1 = arrNumber+1;
					tempArrNumber2 = arrNumber+2;
					tempCurrentArr = currentArr;
					
					eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
					//eval("nodeArr"+parentArr+"[2] ="+mrEle);
	 
					eval("nodeArr"+parentArr+"[1] ="+mlEle); 
					
					//Change data from current array.
					eval("nodeArr"+currentArr+"[1] ="+null);               //Clean middle and right elements.
					eval("nodeArr"+currentArr+"[2] ="+null);          
					eval("nodeArr"+currentArr+"[3] ="+null);
					
					currentArr = parentArr;       //Update currentArr.
					
					//Sort elements.
					for( var j = 0; j <= 3; j++){
						temp[j] = eval("nodeArr"+currentArr+"[j]");	
					}
					temp.sort(function(a,b){return a-b});
					for( var j = 0; j <= 3; j++){
						eval("nodeArr"+currentArr+"[j] = temp[j]");	
					}
					
					lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
					mlEle  = eval("nodeArr"+currentArr+"[1]");     //Center-left element. 
					mrEle = eval("nodeArr"+currentArr+"[2]");     //Center-right element. 
					rEle = eval("nodeArr"+currentArr+"[3]");       //Right element.
					parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.
					
					if( currentArr == 0 ){
						sepTwice = true;
						this.rootArray();
					}
					else{
						this.notRootArray();
					}
				}
			}
			//eval("nodeArr"+parentArr+"[7] ="+ parentArr+"[6]"); 
			//eval("nodeArr"+parentArr+"[6] ="+ parentArr+"[5]");
			//eval("nodeArr"+parentArr+"[5] ="+ arrNumber);
		}
		else if( childOfParent == 5 ){       //Center-left element.  array of parent array.	
			if( eval("nodeArr"+parentArr+"[3]") == null ){        //Parent array not has right array.
				eval("nodeArr"+parentArr+"[3]=" + mlEle) ;
			
				//Current data smaller than current node.
				if(  eval("nodeArr"+parentArr+"[0]") >  eval("nodeArr"+parentArr+"[3]") ){
					eval("nodeArr"+parentArr+"[2] = nodeArr"+parentArr+"[0]");
					eval("nodeArr"+parentArr+"[0] = nodeArr"+parentArr+"[3]");
					eval("nodeArr"+parentArr+"[3] = nodeArr"+parentArr+"[2]");
					eval("nodeArr"+parentArr+"[2] = "+null);
				}
			
				arrNumber++;
				eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
				
				//eval("nodeArr"+parentArr+"[6] = nodeArr"+parentArr+"[5]");      //Recordright array in original array.
				eval("nodeArr"+parentArr+"[6] ="+arrNumber);      //Record middle array in original array.
				
				//Change data from current array.
				eval("nodeArr"+currentArr+"[1] ="+null);               //Clean middle and right elements.
				eval("nodeArr"+currentArr+"[2] ="+null);          
				eval("nodeArr"+currentArr+"[3] ="+null);
			}
			//Parent array has right array.
			else if( eval("nodeArr"+parentArr+"[3]") != null ){   
				if( eval("nodeArr"+parentArr+"[2]") == null ){       //Parent array not has center-right array.
					if( mlEle < eval("nodeArr"+parentArr+"[0]") ){
						eval("nodeArr"+parentArr+"[2]= nodeArr"+parentArr+"[0]");
						eval("nodeArr"+parentArr+"[0]=" + mlEle);
					}
					else if( mlEle > eval("nodeArr"+parentArr+"[0]") && mlEle < eval("nodeArr"+parentArr+"[3]") ){
						eval("nodeArr"+parentArr+"[2]=" + mlEle);
					}
					else if( mlEle > eval("nodeArr"+parentArr+"[3]") ){
						eval("nodeArr"+parentArr+"[2]= nodeArr"+parentArr+"[3]");
						eval("nodeArr"+parentArr+"[3]=" + mlEle);
					}
					eval("nodeArr"+currentArr+"[1] ="+null);
					eval("nodeArr"+currentArr+"[2] ="+null);
					eval("nodeArr"+currentArr+"[3] ="+null);
					arrNumber++;
					eval("nodeArr"+parentArr+"[7] = nodeArr"+parentArr+"[6]"); 
					eval("nodeArr"+parentArr+"[6] ="+ arrNumber);
					//eval("nodeArr"+parentArr+"[7]=" + arrNumber);
					eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
				}
				else if( eval("nodeArr"+parentArr+"[2]") != null ){
					arrNumber++;
					
					tempArrNumber1 = arrNumber+1;
					tempArrNumber2 = arrNumber+2;
					tempCurrentArr = currentArr;
					
					eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
					//eval("nodeArr"+parentArr+"[2] ="+mrEle);
	   
					eval("nodeArr"+parentArr+"[1] ="+mlEle);  
					
					//Change data from current array.
					eval("nodeArr"+currentArr+"[1] ="+null);               //Clean middle and right elements.
					eval("nodeArr"+currentArr+"[2] ="+null);          
					eval("nodeArr"+currentArr+"[3] ="+null);
					
					currentArr = parentArr;       //Update currentArr.
					
					//Sort elements.
					for( var j = 0; j <= 3; j++){
						temp[j] = eval("nodeArr"+currentArr+"[j]");	
					}
					temp.sort(function(a,b){return a-b});
					for( var j = 0; j <= 3; j++){
						eval("nodeArr"+currentArr+"[j] = temp[j]");	
					}
					
					lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
					mlEle  = eval("nodeArr"+currentArr+"[1]");     //Center-left element. 
					mrEle = eval("nodeArr"+currentArr+"[2]");     //Center-right element. 
					rEle = eval("nodeArr"+currentArr+"[3]");       //Right element.
					parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.
					
					if( currentArr == 0 ){
						sepTwice = true;
						this.rootArray();
					}
					else{
						this.notRootArray();
					}
				}
			}
			//eval("nodeArr"+parentArr+"[7] ="+ parentArr+"[6]"); 
			//eval("nodeArr"+parentArr+"[6] ="+ arrNumber);
		}
		else if( childOfParent == 6 ){       //Center-right element.  array of parent array.			
			if( eval("nodeArr"+parentArr+"[3]") == null ){        //Parent array not has right array.
				eval("nodeArr"+parentArr+"[3]=" + mlEle) ;
			
				//Current data smaller than current node.
				if(  eval("nodeArr"+parentArr+"[0]") >  eval("nodeArr"+parentArr+"[3]") ){
					eval("nodeArr"+parentArr+"[2] = nodeArr"+parentArr+"[0]");
					eval("nodeArr"+parentArr+"[0] = nodeArr"+parentArr+"[3]");
					eval("nodeArr"+parentArr+"[3] = nodeArr"+parentArr+"[2]");
					eval("nodeArr"+parentArr+"[2] = "+null);
				}
			
				arrNumber++;
				eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
				
				eval("nodeArr"+parentArr+"[6] = nodeArr"+parentArr+"[5]");      //Recordright array in original array.
				eval("nodeArr"+parentArr+"[5] ="+arrNumber);      //Record middle array in original array.
				
				//Change data from current array.
				eval("nodeArr"+currentArr+"[1] ="+null);               //Clean middle and right elements.
				eval("nodeArr"+currentArr+"[2] ="+null);          
				eval("nodeArr"+currentArr+"[3] ="+null);
			}
			//Parent array has right array.
			else if( eval("nodeArr"+parentArr+"[3]") != null ){  
				if( eval("nodeArr"+parentArr+"[2]") == null ){       //Parent array not has center-right array.
					if( mlEle < eval("nodeArr"+parentArr+"[0]") ){
						eval("nodeArr"+parentArr+"[2]= nodeArr"+parentArr+"[0]");
						eval("nodeArr"+parentArr+"[0]=" + mlEle);
					}
					else if( mlEle > eval("nodeArr"+parentArr+"[0]") && mlEle < eval("nodeArr"+parentArr+"[3]") ){
						eval("nodeArr"+parentArr+"[2]=" + mlEle);
					}
					else if( mlEle > eval("nodeArr"+parentArr+"[3]") ){
						eval("nodeArr"+parentArr+"[2]= nodeArr"+parentArr+"[3]");
						eval("nodeArr"+parentArr+"[3]=" + mlEle);
					}
					eval("nodeArr"+currentArr+"[1] ="+null);
					eval("nodeArr"+currentArr+"[2] ="+null);
					eval("nodeArr"+currentArr+"[3] ="+null);
					arrNumber++;
					eval("nodeArr"+parentArr+"[7]=" + arrNumber);
					eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
				}
				else if( eval("nodeArr"+parentArr+"[2]") != null ){ 
					arrNumber++;
					
					tempArrNumber1 = arrNumber+1;
					tempArrNumber2 = arrNumber+2;
					tempCurrentArr = currentArr;
					
					eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
					//eval("nodeArr"+parentArr+"[2] ="+mrEle);
	   
					eval("nodeArr"+parentArr+"[1] ="+mlEle);  
					
					//Change data from current array.
					eval("nodeArr"+currentArr+"[1] ="+null);               //Clean middle and right elements.
					eval("nodeArr"+currentArr+"[2] ="+null);          
					eval("nodeArr"+currentArr+"[3] ="+null);
					
					currentArr = parentArr;       //Update currentArr.
					
					//Sort elements.
					for( var j = 0; j <= 3; j++){
						temp[j] = eval("nodeArr"+currentArr+"[j]");	
					}
					temp.sort(function(a,b){return a-b});
					for( var j = 0; j <= 3; j++){
						eval("nodeArr"+currentArr+"[j] = temp[j]");	
					}
					
					lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
					mlEle  = eval("nodeArr"+currentArr+"[1]");     //Center-left element. 
					mrEle = eval("nodeArr"+currentArr+"[2]");     //Center-right element. 
					rEle = eval("nodeArr"+currentArr+"[3]");       //Right element.
					parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.
					
					if( currentArr == 0 ){
						sepTwice = true;
						this.rootArray();
					}
					else{
						this.notRootArray();
					}
				}
			}
			//eval("nodeArr"+parentArr+"[7] ="+ arrNumber);
		}
		else if( childOfParent == 7 ){       //Right array of parent array.
			arrNumber++;
			
			tempArrNumber1 = arrNumber+1;
			tempArrNumber2 = arrNumber+2;
			tempCurrentArr = currentArr;
			
			eval("nodeArr"+arrNumber+"=["+mrEle +","+null+","+null+","+rEle +","+null+","+null+","+null+","+null+",parentArr]");
     		//eval("nodeArr"+parentArr+"[2] ="+mrEle);
	 
			eval("nodeArr"+parentArr+"[1] ="+mlEle);
			
			eval("nodeArr"+currentArr+"[2] ="+null);           //Clean middle and right elements.
			eval("nodeArr"+currentArr+"[3] ="+null);
			
			currentArr = parentArr;       //Update currentArr.
			
			//Sort elements.
			for( var j = 0; j <= 3; j++){
				temp[j] = eval("nodeArr"+currentArr+"[j]");	
			}
			temp.sort(function(a,b){return a-b});
			for( var j = 0; j <= 3; j++){
				eval("nodeArr"+currentArr+"[j] = temp[j]");	
			}
			
			lEle = eval("nodeArr"+currentArr+"[0]");      //Left element. 
			mlEle  = eval("nodeArr"+currentArr+"[1]");     //Center-left element. 
			mrEle = eval("nodeArr"+currentArr+"[2]");     //Center-right element. 
			rEle = eval("nodeArr"+currentArr+"[3]");       //Right element.
			parentArr = eval("nodeArr"+currentArr+"[8]");      //parent of current array.
			
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