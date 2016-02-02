//
//Check position of node for generate nodes.
//For 2-3, 2-3-4 trees.

//
//2-3 tree.
var check23TreePosition = function(){
	//Check or calculate the position of middle node(Root).
	this.nodeMiddleRoot = function(){
		//alert(currentArr);
		initial.initNode();
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+currentArr+"[0]") ){
				if( dataArray[j] < dataArray[element23t] ){
					xPosEnd += 25;
				}
				else if( dataArray[j] > dataArray[element23t] ){
					xPosEnd -= 25;
				}
			}
		}
		generate.tree();
	}
	
	//Check or calculate the position of middle node(Not root).
	this.nodeMiddle = function(kind){
		if( kind == 1 ){        //Left subtree.
			xPosEnd  -= 310;
			yPosEnd  += 260;
			generate.changeEleSec();
		}
		else if( kind == 2 ){         //middle subtree.
			yPosEnd  += 260;
			generate.changeEleSec();
		}
		else if( kind == 3 ){         //middle subtree.
			xPosEnd  += 310;
			yPosEnd  += 260;
			generate.changeEleSec();
		}
	}
	
	//Separate the node which is overflow.
	//kind==1:Root node; kind==3:Not root node(Separate left subtree); kind==4:Not root node(Separate middle subtree); kind==5:Not root node(Separate right subtree).
	this.separation = function(kind){
		if( kind == 1 ){
			//Separate node by animation.
			for(var lastEle = 0; lastEle <= 7; lastEle++){
				if( dataArray[lastEle] == eval("nodeArr"+arrNumber+"[0]") ){
					initial.initNode();
					xRectEnd -= 310;
					yRectEnd += 120;
					generate.rect((arrNumber+1));
					generate.getCurrentPos(lastEle);
					xPosEnd  -= 310;
					yPosEnd  += 120;
					generate.changeElePos(lastEle);
					tempNodeNumber = nodeNumber;
					nodeNumber = arrNumber+1;
					line.tree();
					nodeNumber = tempNodeNumber;
				}
				else if( dataArray[lastEle] == eval("nodeArr"+arrNumber+"[1]") ){         //Lift. 
					generate.getCurrentRect(arrNumber);
					yRectEnd -= 100;
					generate.changeRectPos(arrNumber);
					generate.getCurrentPos(lastEle);
					yPosEnd  -= 100;
					xPosEnd  -= 25;
					generate.changeElePos(lastEle);
				}
				else if( dataArray[lastEle] == eval("nodeArr"+arrNumber+"[2]") ){        //Generate a right node.
					initial.initNode();
					yRectEnd += 120;
					generate.rect((arrNumber+2));
					generate.getCurrentPos(lastEle);
					yPosEnd  += 120;
					xPosEnd  -= 50;
					generate.changeElePos(lastEle);
					xLine += 50;
					xLineEnd += 310;
					tempNodeNumber = nodeNumber;
					nodeNumber = arrNumber+2;
					line.tree();
					nodeNumber = tempNodeNumber;
				}
			}
		}
		else if( kind == 3 ){
			//Middle element move to left element of parent node.
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[1]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd += 285;
			yPosEnd -= 220;
			generate.changeElePos(lastEle);
			
			//Left element of parent node move to right element of parent node.
			parentNode = (eval("nodeArr"+currentArr+"[6]"));
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd += 50;
			generate.changeElePos(lastEle);
			
			//Middle node move to right node.
			parentNode = (eval("nodeArr"+currentArr+"[6]"));
			parentNode = (eval("nodeArr"+parentNode+"[4]"));
			initial.initNode();
			generate.getCurrentRect(parentNode);
			xRectEnd  += 310;
			generate.changeRectPos(parentNode);
			tempNodeNumber = parentNode;
			xLine += 100;
			xLineEnd += 620;
			line.changeLinePos();
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd += 310;
			generate.changeElePos(lastEle);
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd += 310;
			generate.changeElePos(lastEle);
			
			//Generate middle node(rectangle) and right element move to middle node.
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[2]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(currentArr);
			xRectEnd  += 310;
			generate.rect(arrNumber);
			generate.getCurrentPos(lastEle);
			xPosEnd += 260;
			generate.changeElePos(lastEle);
			tempNodeNumber = nodeNumber;
			nodeNumber = arrNumber;
			xLine += 50;
			xLineEnd += 310;
			line.tree();
			nodeNumber = tempNodeNumber;
		}
		else if( kind == 4 ){
			//Middle element move to left element of parent node.
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[1]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd += 25;
			yPosEnd -= 220;
			generate.changeElePos(lastEle);
			
			//Generate right node(rectangle) and right element move to right node.
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[2]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(currentArr);
			xRectEnd  += 310;
			generate.rect(arrNumber);
			generate.getCurrentPos(lastEle);
			xPosEnd += 260;
			generate.changeElePos(lastEle);
			tempNodeNumber = nodeNumber;
			nodeNumber = arrNumber;
			xLine += 100;
			xLineEnd += 620;
			line.tree();
			nodeNumber = tempNodeNumber;
		}
	}
	
	//Separate the node which is overflow first time.
	//kind==3:Not root node(Separate left subtree); kind==4:Not root node(Separate middle subtree); kind==5:Not root node(Separate right subtree).
	this.separateFirst = function(kind){
		if( kind == 3 ){
			//Middle element move to left element of parent node.
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[1]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd += 280;
			yPosEnd -= 220;
			generate.changeElePos(lastEle);
			parentNode = (eval("nodeArr"+currentArr+"[6]"));
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd += 25;
			generate.changeElePos(lastEle);
			
			//Middle node move to right (with it's element).
			parentNode = (eval("nodeArr"+currentArr+"[6]"));
			parentNode = (eval("nodeArr"+parentNode+"[4]"));
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(parentNode);
			xRectEnd += 110;
			generate.changeRectPos(parentNode);
			generate.getCurrentPos(lastEle);
			xPosEnd += 110;
			generate.changeElePos(lastEle);
			tempNodeNumber = parentNode;
			xLine += 60;
			xLineEnd += 420;
			line.changeLinePos();
			
			if( eval("nodeArr"+parentNode+"[2]") != null ){
				for(var j = 0; j <= 7; j++){
					if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
						lastEle = j;
						break;
					}
				}
				generate.getCurrentPos(lastEle);
				xPosEnd += 110;
				generate.changeElePos(lastEle);
			}
			
			//Generate new node(with right element).
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+arrNumber+"[0]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(currentArr);
			xRectEnd += 200;
			generate.rect(arrNumber);
			generate.getCurrentPos(lastEle);
			xPosEnd += 150;
			generate.changeElePos(lastEle);
			tempNodeNumber = nodeNumber;
			nodeNumber = arrNumber;
			xLine += 40;
			xLineEnd += 205;
			line.tree();
			nodeNumber = tempNodeNumber;
		}
		else if( kind == 4 ){
			//Middle element move to middle element of parent node.
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[1]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			yPosEnd -= 220;
			generate.changeElePos(lastEle);
			
			//Middle node move to left (with it's element).
			parentNode = (eval("nodeArr"+currentArr+"[6]"));
			parentNode = (eval("nodeArr"+parentNode+"[4]"));
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[0]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(parentNode);
			xRectEnd -= 120;
			generate.changeRectPos(parentNode);
			generate.getCurrentPos(lastEle);
			xPosEnd -= 120;
			generate.changeElePos(lastEle);
			tempNodeNumber = parentNode;
			xLine += 30;
			xLineEnd += 190;
			line.changeLinePos();
			
			//Generate new node(with right element).
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+arrNumber+"[0]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(currentArr);
			xRectEnd += 240;
			generate.rect(arrNumber);
			generate.getCurrentPos(lastEle);
			xPosEnd += 70;
			generate.changeElePos(lastEle);
			tempNodeNumber = nodeNumber;
			nodeNumber = arrNumber;
			xLine += 70;
			xLineEnd += 430;
			line.tree();
			nodeNumber = tempNodeNumber;
		}
		else if( kind == 5 ){
			//Middle element move to middle element of parent node.
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[1]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd -= 280;
			yPosEnd -= 220;
			generate.changeElePos(lastEle);
			parentNode = (eval("nodeArr"+currentArr+"[6]"));
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
					lastEle = j;
					break;
				}
			}
			generate.getCurrentPos(lastEle);
			xPosEnd -= 25;
			generate.changeElePos(lastEle);
			
			//Middle node move to left (with it's element).
			parentNode = (eval("nodeArr"+currentArr+"[6]"));
			parentNode = (eval("nodeArr"+parentNode+"[4]"));
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(parentNode);
			xRectEnd -= 120;
			generate.changeRectPos(parentNode);
			generate.getCurrentPos(lastEle);
			xPosEnd -= 120;
			generate.changeElePos(lastEle);
			tempNodeNumber = parentNode;
			xLine += 30;
			xLineEnd += 190;
			line.changeLinePos();
			
			if( eval("nodeArr"+parentNode+"[2]") != null ){
				for(var j = 0; j <= 7; j++){
					if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
						lastEle = j;
						break;
					}
				}
				
				generate.getCurrentPos(lastEle);
				xPosEnd -= 120;
				generate.changeElePos(lastEle);
			}
			
			//Right node move to left (with it's element).
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+currentArr+"[0]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(currentArr);
			xRectEnd -= 180;
			generate.changeRectPos(currentArr);
			generate.getCurrentPos(lastEle);
			xPosEnd -= 180;
			generate.changeElePos(lastEle);
			tempNodeNumber = currentArr;
			xLine += 70;
			xLineEnd += 440;
			line.changeLinePos();
			
			//Generate new node(with right element).
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+arrNumber+"[0]") ){
					lastEle = j;
					break;
				}
			}
			initial.initNode();
			generate.getCurrentRect(currentArr);
			xRectEnd += 200;
			generate.rect(arrNumber);
			generate.getCurrentPos(lastEle);
			xPosEnd -= 30;
			generate.changeElePos(lastEle);
			tempNodeNumber = nodeNumber;
			nodeNumber = arrNumber;
			xLine += 100;
			xLineEnd += 640;
			line.tree();
			nodeNumber = tempNodeNumber;
		}
	}
	//Separate again.
	this.separateSecond = function(){
		level3Tag = true;
		//Generate two new nodes.
		initial.initNode();
		generate.getCurrentRect(0);          //According to the position of root.
		xRectEnd -= 345;
		yRectEnd += 88;
		generate.rect(5);
		tempNodeNumber = nodeNumber;
		nodeNumber = 5;
		xLineEnd -= 38;
		yLineEnd -= 132;
		line.tree();
		nodeNumber = tempNodeNumber;
		
		initial.initNode();
		yRectEnd -= 12;
		generate.rect(6);
		tempNodeNumber = nodeNumber;
		nodeNumber = 6;
		xLine += 50;
		xLineEnd += 310;
		yLineEnd -= 132;
		line.tree();
		nodeNumber = tempNodeNumber;	
		
		//Move location of root's elements.
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == nodeArr5[0] ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 345;
		yPosEnd += 88;
		generate.changeElePos(lastEle);
			
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == nodeArr6[0] ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 55;
		yPosEnd += 88;
		generate.changeElePos(lastEle);	
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == nodeArr0[0] ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 25;
		generate.changeElePos(lastEle);	
		
		//Move the node on the far left.(with it's element).
		parentNode = nodeArr5[3];
		initial.initNode();
		generate.getCurrentRect(parentNode);
		xRectEnd -= 150;
		generate.changeRectPos(parentNode);
		tempNodeNumber = parentNode;
		xLine -= 345;
		xLineEnd -= 150;
		yLine += 88;
		line.changeLinePos();
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 150;
		generate.changeElePos(lastEle);
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 150;
		generate.changeElePos(lastEle);
		
		//Move the second node from the left.(with it's element).
		parentNode = nodeArr5[4];
		initial.initNode();
		generate.getCurrentRect(parentNode);
		xRectEnd -= 225;
		generate.changeRectPos(parentNode);
		tempNodeNumber = parentNode;
		xLine -= 295;
		xLineEnd -= 35;
		yLine += 88;
		line.changeLinePos();
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 225;
		generate.changeElePos(lastEle);
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 225;
		generate.changeElePos(lastEle);
		
		//Move the second node from the right.(with it's element).
		parentNode = nodeArr6[3];
		initial.initNode();
		generate.getCurrentRect(parentNode);
		xRectEnd -= 255;
		generate.changeRectPos(parentNode);
		tempNodeNumber = parentNode;
		xLineEnd += 180;
		yLine += 88;
		line.changeLinePos();
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 255;
		generate.changeElePos(lastEle);
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 255;
		generate.changeElePos(lastEle);
		
		//Move the one on the far right.(with it's element).
		parentNode = nodeArr6[4];
		initial.initNode();
		generate.getCurrentRect(parentNode);
		xRectEnd -= 320;
		generate.changeRectPos(parentNode);
		tempNodeNumber = parentNode;
		xLine += 50;
		xLineEnd += 310;
		yLine += 88;
		line.changeLinePos();
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 320;
		generate.changeElePos(lastEle);
		
		for(var j = 0; j <= 7; j++){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
				lastEle = j;
				break;
			}
		}
		generate.getCurrentPos(lastEle);
		xPosEnd -= 320;
		generate.changeElePos(lastEle);
	}
	
	//Move position of node.
	//Kind==1:Insert smallest element in root node; kind==2:Insert biggest element in root node.
	//Kind==3:Insert smallest element not in root node; kind==4:Insert biggest element not in root node.
	//kind==5:Move to subtree.
	this.movePosition = function(kind){
		if( kind==1 ){
			generate.getCurrentPos(lastEle);
			xPosEnd += 25;
			generate.changeElePos(lastEle);
			initial.initNode();
			generate.tree();
		}
		else if( kind==2 ){
			generate.getCurrentPos(lastEle);
			xPosEnd -= 25;
			generate.changeElePos(lastEle);
			initial.initNode();
			xPosEnd += 50;
			generate.tree();
		}
		if( kind==3 ){
			generate.getCurrentPos(lastEle);
			xPosEnd += 25;
			generate.changeElePos(lastEle);
			xPosEnd  -= 25;
			generate.changeEleSec();
		}
		else if( kind==4 ){
			generate.getCurrentPos(lastEle);
			xPosEnd -= 25;
			generate.changeElePos(lastEle);
			xPosEnd  += 25;
			generate.changeEleSec(lastEle);
		}
		else if( kind==5 ){
			for( var j = 0; j <= 7; j++ ){
				if( dataArray[j] == eval("nodeArr0[0]") ){
					currentLeft = dataArray[j];
				}
				else if( dataArray[j] == eval("nodeArr0[2]") ){
					currentRight = dataArray[j];
				}
			}
			if( currentRight == null ){
				if( dataArray[element23t] < currentLeft ){        //Left subtree.
					xPosEnd  -= 310;
					yPosEnd  += 220;
					generate.changeEleSec();
				}
				else if( dataArray[element23t] > currentLeft ){         //middle subtree.
					yPosEnd  += 220;
					generate.changeEleSec();
				}
			}
			else{
				if( dataArray[element23t] < currentLeft ){        //Left subtree.
					xPosEnd  -= 310;
					yPosEnd  += 220;
					generate.changeEleSec();
				}
				else if( dataArray[element23t] > currentLeft && dataArray[element23t] < currentRight ){         //middle subtree.
					yPosEnd  += 220;
					generate.changeEleSec();
				}
				else if( dataArray[element23t] > currentRight ){         //middle subtree.
					xPosEnd  += 310;
					yPosEnd  += 220;
					generate.changeEleSec();
				}
			}
			this.compareEle();
		}
	}
	//Move nodes when tree is 3 level.
	this.moveNode3Level = function(arrayIndex){
		if( arrayIndex >= 5 ){
			for( var j = 0; j <= 7; j++ ){
				if( dataArray[j] == eval("nodeArr0[0]") ){
					currentLeft = dataArray[j];
				}
			}
			if( dataArray[element23t] < currentLeft ){        //Left subtree.
				xPosEnd  -= 345;
				yPosEnd  += 90;
				generate.changeEleSec();
			}
			else if( dataArray[element23t] > currentLeft ){         //middle subtree.
				yPosEnd  += 90;
				generate.changeEleSec();
			}
		}
		this.compareEle3Level();
	}
	//Compare element.
	this.compareEle = function(){
		if( dataArray[element23t] < eval("nodeArr"+tempArr+"[0]") ){
			xPosEnd  -= 25;
			yPosEnd  += 40;
			generate.compareEleSec();
			xPosEnd  += 50;
			for(var j = 0; j <= 7; j++){
				if( dataArray[j] == eval("nodeArr"+tempArr+"[0]") ){
					compareNode = j;
					break;
				}
			}
			//alert(dataArray+'/'+compareNode+'/'+(eval("nodeArr"+tempArr+"[0]")));
			generate.compareEle();	
		}
		else{
			xPosEnd  += 25;
			yPosEnd  += 40;
			generate.compareEleSec();	
		}
	}
	//Compare element when tree is 3 level.
	this.compareEle3Level = function(){
		for( var j = 0; j <= 7; j++ ){
			if( dataArray[j] == eval("nodeArr"+currentArr+"[0]") ){
				currentLeft = dataArray[j];
			}
			if( dataArray[j] == eval("nodeArr"+currentArr+"[2]") ){
				currentRight = dataArray[j];
			}
		}
		
		if( currentRight != null ){
			if( dataArray[element23t] < currentLeft ){        //Left subtree.
				xPosEnd  -= 115;
				yPosEnd  += 130;
				generate.compareEleSec();
				
				parentNode = (eval("nodeArr"+currentArr+"[3]"));
			}
			else if( dataArray[element23t] > currentLeft && dataArray[element23t] < currentRight ){         //middle subtree.
				yPosEnd  += 130;
				generate.compareEleSec();
				
				parentNode = (eval("nodeArr"+currentArr+"[4]"));
			}
			else if( dataArray[element23t] > currentRight ){         //right subtree.
				xPosEnd  += 115;
				yPosEnd  += 130;
				generate.compareEleSec();
				
				parentNode = (eval("nodeArr"+currentArr+"[5]"));
			}
		}
		else{
			if( dataArray[element23t] < currentLeft ){        //Left subtree.
				xPosEnd  -= 115;
				yPosEnd  += 130;
				generate.compareEleSec();
				
				parentNode = (eval("nodeArr"+currentArr+"[3]"));
			}
			else if( dataArray[element23t] > currentLeft ){         //middle subtree.
				yPosEnd  += 130;
				generate.compareEleSec();
				
				parentNode = (eval("nodeArr"+currentArr+"[4]"));
			}	
		}
		
		for( var j = 0; j <= 7; j++ ){
			if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
				currentLeft = dataArray[j];
			}
			if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
				currentRight = dataArray[j];
			}
		}
		if( currentRight != null ){			
			if( dataArray[element23t] < currentLeft ){        //Left subtree.
				xPosEnd  -= 25;
				yPosEnd  += 40;
				generate.compareEleThi();
				
				for(var j = 0; j <= 7; j++){
					if( dataArray[j] == currentLeft ){
						lastEle = j;
						break;
					}
				}
				generate.getCurrentPos(lastEle);
				xPosEnd += 25;
				generate.changeElePos(lastEle);
			}
			else if( dataArray[element23t] > currentLeft && dataArray[element23t] < currentRight ){         //middle subtree.
				yPosEnd  += 40;
				generate.compareEleThi();
			}
			else if( dataArray[element23t] > currentRight ){         //right subtree.
				xPosEnd  += 25;
				yPosEnd  += 40;
				generate.compareEleThi();
				
				for(var j = 0; j <= 7; j++){
					if( dataArray[j] == currentRight ){
						lastEle = j;
						break;
					}
				}
				generate.getCurrentPos(lastEle);
				xPosEnd += 25;
				generate.changeElePos(lastEle);
			}
		}
		else{
			for( var j = 0; j <= 7; j++ ){
				if( dataArray[j] == eval("nodeArr"+parentNode+"[0]") ){
					currentLeft = dataArray[j];
				}
				if( dataArray[j] == eval("nodeArr"+parentNode+"[2]") ){
					currentRight = dataArray[j];
				}
			}
			
			if( dataArray[element23t] < currentLeft ){        //Left subtree.
				xPosEnd  -= 25;
				yPosEnd  += 40;
				generate.compareEleThi();
				
				for(var j = 0; j <= 7; j++){
					if( dataArray[j] == currentLeft ){
						lastEle = j;
						break;
					}
				}
				generate.getCurrentPos(lastEle);
				xPosEnd += 50;
				generate.changeElePos(lastEle);
			}
			else if( dataArray[element23t] > currentLeft ){         //right subtree.
				xPosEnd  += 25;
				yPosEnd  += 40;
				generate.compareEleThi();
			}	
		}
	}
}

var init = function(){
	this.initNode = function(){
		xPos = 20;
		yPos = 20;
		xPosEnd = 500;
		yPosEnd = 160;
		xRect = 415;
		yRect = 130;
		xRectEnd= 475;
		yRectEnd = 142;
		xLine = 475;
		yLine = 80;
	    xLineEnd = 215;
		yLineEnd = 260;
	}
}

var cal23tree = new check23TreePosition();
var initial = new init();
