//Compare correct answer with user's answer.

$(document).ready(function() {
	$( "#answerSVG" ).hide();
	$( "#bfTest" ).hide();
	$( "#Submit" ).hide();
	$( "#ans" ).hide();
})

var compareCorrectAnswer = function(){
	//Show blank for fill in BF.
	this.fillInBF = function(){		
		document.getElementById("positionTip").innerHTML = "請將BF填入空格中";	
		//Show blank to fill in BF.
		for( var presented = 1; presented <= userAnswer.length; presented++ ){
			if( userAnswer[(presented-1)] != null ){
				var currentX = Math.round(d3.select("#outline"+presented).attr("cx"));
				var currentY = Math.round(d3.select("#outline"+presented).attr("cy"));
	
				treeSVG.append("foreignObject").attr("width", 25).attr("height", 25)
				.html("<form><input type=text id=check"+presented+" style='border-width:3px;background-color:#F5F6CE;font-size:14px'/></form>")
				.attr("x", currentX+25 ).attr("y", currentY-10 )
			}	
		}
		$(document).ready(function() {
			$( "#bfTest" ).hide();
			$( "#Submit" ).fadeIn();
			$( "#fillIn" ).hide();
		})
	}
	
	//Compare correct answer.
	//kind = 1:BST; kind = 2:AVL; kind = 3:Reb-Black; kind = 4:preorder+inorder & postorder+inorder.
	this.compareAnswer = function(kind){
		var bfResult = null, treeResult = null, colorResult = null; 
		//var inputResult = null;
		
		//Remove empty outline.
		for( var j = 0; j <= userAnswer.length; j++ ){
			if( userAnswer[j] == null ){
				var removeIndex = j+1;
				d3.select("#outline"+removeIndex).remove();
				d3.select("#buildLine"+removeIndex).remove();	
			}
		}
		
		if( kind == 3 ){
			//Compare color.
			for( var presented = 1; presented <= userAnswer.length; presented++ ){
				if( colorArr[(presented-1)] != colorAnswer[(presented-1)] ){
					colorResult = false;
					break;
				}
				else{
					colorResult = true;
				}
				console.log(colorArr+'/'+colorAnswer[(presented-1)]+'/'+colorResult);
			}
		}
		/*else if( kind == 4 ){
			if( displayPrePost == true ){            //Preorder+Inorder
				for( var j = 0; j <= 6; j++ ){
					var no = "post"+j;
					var postorderInput = document.getElementById(no).value;
					alert(postArr[(j+1)]+'/'+postorderInput);
					if( postArr[(j+1)] != postorderInput ){
						inputResult = false;
						break;
					}
					else{
						inputResult = true;
					}
				}
			}
			else if( displayPrePost == false ){          //Postorder+Inorder
				for( var j = 0; j <= 6; j++ ){
					var no = "pre"+j;
					var preorderInput = document.getElementById(no).value;
					alert(preArr[j]+'/'+preorderInput);
					if( preArr[j] != preorderInput ){
						inputResult = false;
						break;
					}
					else{
						inputResult = true;
					}
				}
			}
		}*/
		
		//compare tree.
		for( var j = 1; j <= nodeArray.length-1; j++ ){
			if( nodeArray[j] != userAnswer[j] ){
				treeResult = false;
				bfResult = false;
				break;
			}
			else{
				treeResult = true;
				if( kind == 2 ){
					//Compare bf.
					for( var presented = 1; presented <= userAnswer.length; presented++ ){
						if( userAnswer[(presented-1)] != null ){
							var bfAnswer = document.getElementById("check"+presented).value;
							console.log(bfResult+'/'+bfArray+'/'+bfAnswer);
							if( bfAnswer == null ){
								bfResult = false;
								break;
							}
							else if( bfArray[(presented-1)] != bfAnswer ){
								bfResult = false;
								break;
							}
							else if( bfArray[(presented-1)] == bfAnswer ){
								bfResult = true;
							}
						}
					}
				}
			}
		}
		
		console.log("userAnswer:"+userAnswer);
		
		if( kind == 1 ){
			if( treeResult == true){              //All correct.
				document.getElementById("result").innerHTML = "☺ 全答對了！";	
			}
			else if( treeResult == false ){          //All wrong.
				document.getElementById("result").innerHTML = "☹ 答錯了!<br>請按 'Display correct answer' 按鈕,觀看正確答案";
			}
		}
		else if( kind == 2 ){
			//Show the result.
			if( bfResult == true && treeResult == true ){              //All correct.
				document.getElementById("result").innerHTML = "☺ 全答對了！";	
			}
			else if( bfResult != true && treeResult == true ){           //BF is wrong, tree is correct.
				document.getElementById("result").innerHTML = " 建立樹的部分答對,但是輸入Balance Factor的部分答錯";
			}
			else if( bfResult == true && treeResult != true ){
				document.getElementById("result").innerHTML = " 建立樹的部分答錯,但是輸入Balance Factor的部分答對";
			}
			else if( bfResult != true && treeResult != true ){          //All wrong.
				document.getElementById("result").innerHTML = "☹ 全答錯了!<br>請按 'Display correct answer' 按鈕,觀看過程";
			}
		}
		else if( kind == 3 ){
			//Show the result.
			if( colorResult == true && treeResult == true ){              //All correct.
				document.getElementById("result").innerHTML = "☺ 全答對了！";	
			}
			else if( colorResult != true && treeResult == true ){           //BF is wrong, tree is correct.
				document.getElementById("result").innerHTML = " 建立樹的部分答對,但是顏色的部分答錯<br>請再花點時間研讀改變顏色的規則";
			}
			else if( colorResult == true && treeResult != true ){
				document.getElementById("result").innerHTML = " 建立樹的部分答錯,但是顏色的部分答對(顏色的部分是矇對的吧...)";
			}
			else if( colorResult != true && treeResult != true ){          //All wrong.
				document.getElementById("result").innerHTML = "☹ 全錯了!<br>請按 'Display correct answer' 按鈕,觀看過程";
			}
		}
		
		$(document).ready(function(){
			$("#Submit").hide();
			$( "#ans" ).fadeIn();
		});
		
		//Clean array before display graph of correct tree.
		this.displayAnswer = function(kind){			
			while(nodeArray.length != 0){
				nodeArray.pop();
			}
			
			if( kind == 2 ){
				while(bfArray.length != 0){
					bfArray.pop();
				}
			}
			
			else if( kind == 3 ){
				while( colorArr.length != 0 ){
					colorArr.pop();
				}
			}
		}
	}
	
	this.color = function(){	
		$(function() {
			$( "#nullColor" ).dialog({
			   position: [0,0],
			   closeOnEscape: false,
			   open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
			 });
		});
	}
	
	//Display graph of correct tree.
	$(document).ready(function() { 
		$('#Submit').click(function() { 
			$(function() {
				$( "#nullSVG" ).dialog({
				   position: [0,0],
				   closeOnEscape: false,
				   open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
				 });
			});
		});
		
		$('#ans').click(function() { 
			$(function() {
				$( "#answerSVG" ).dialog().css("width","660")
			    .prev(".ui-dialog-titlebar").css("background","#FFAC55").css("margin-right","60px").css("width","660")
				.find('.ui-button').css("background","#FFAC55");
  			});
		});    
	});
}

var compare = new compareCorrectAnswer();