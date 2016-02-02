//Compare answer of traversal.

var compareCorrectAnswer = function(){
	this.compareAnswer = function(){
		var flag0 = 0, flag1 = 0, flag2 = 0, flag3 = 0;
		
		for ( var i = 0; i <= 6; i++ ){
			//check pre-order answer is true or false.
			var no = "pre"+i;
			if (preArr[i] != document.getElementById(no).value){
				//If standard answer different from input answer,the color of block changes to red,true sample changes to false sample.  
				document.getElementById(no).style.backgroundColor="#f88";
				pre = "Pre-order traversal: Visit --> Left tree --> Right tree";
				var preTF = document.getElementById("tORfPre").innerHTML = "✘";
				flag0 = 1;
			}	
		}
		//check in-order answer is true or false.
		for ( var i = 0; i <= 6; i++ ){
			var no = "in"+i;
			if (inArr[i] != document.getElementById(no).value){
				//If standard answer different from input answer,the color of block changes to red,true sample changes to false sample.  
				document.getElementById(no).style.backgroundColor="#f88";
				ino="In-order traversal: Left tree --> Visit --> Right tree";
				var inTF = document.getElementById("tORfIn").innerHTML = "✘";
				flag1 = 1;			
			}	
		}
		//check post-order answer is true or false.
		for ( var i = 1; i <= 7; i++ ){
			var no = "post"+i;
			if (postArr[i] != document.getElementById(no).value){
				//If standard answer different from input answer,the color of block changes to red,true sample changes to false sample.  
				document.getElementById(no).style.backgroundColor="#f88";
				post="Post-order traversal: Left tree --> Right tree --> Visit";
				var postTF =document.getElementById("tORfPost").innerHTML = "✘";
				flag2 = 1;
			}	
		}
		//check Breadth first traversal answer is true or false.
		for ( var i = 0; i <= 6; i++ ){
			var no = "b"+i;
			if (noNullArr[i] != document.getElementById(no).value){
				//If standard answer different from input answer,the color of block changes to red,true sample changes to false sample.  
				document.getElementById(no).style.backgroundColor="#f88";
				bre="Breadth first traversal: From left to right,top to bottom,travels all nodes of a level first, then travels all nodes of next level.";	
				var postTF =document.getElementById("tORfBr").innerHTML = "✘";
				flag3 = 1;
			}	
		}
		
		//Produces different suggested by each situations.
		if (flag0 == 1 && flag1 == 1 && flag2 == 1 && flag3 == 1){
			document.getElementById("suggest").innerHTML=pre+"<br />"+ino+"<br />"+post+"<br />"+bre;	
		}
		else if (flag0 == 0 && flag1 == 0 && flag2 == 0 && flag3 == 0){
			document.getElementById("suggest").innerHTML="全答對了";
		}
		else if (flag0 == 1 && flag1 == 1 && flag2 == 1 && flag3 == 0){
			document.getElementById("suggest").innerHTML=pre+"<br />"+ino+"<br />"+post;	
		}
		else if (flag0 == 1 && flag1 == 1 && flag2 == 0 && flag3 == 1){
			document.getElementById("suggest").innerHTML=pre+"<br />"+ino+"<br />"+bre;		
		}
		else if (flag0 == 1 && flag1 == 0 && flag2 == 1 && flag3 == 1){
			document.getElementById("suggest").innerHTML=pre+"<br />"+post+"<br />"+bre;		
		}
		else if (flag0 == 0 && flag1 == 1 && flag2 == 1 && flag3 == 1){
			document.getElementById("suggest").innerHTML=ino+"<br />"+post+"<br />"+bre;	
		}
		else if (flag0 == 0 && flag1 == 0 && flag2 == 1 && flag3 == 1){
			document.getElementById("suggest").innerHTML=post+"<br />"+bre;	
		}
		else if (flag0 == 0 && flag1 == 1 && flag2 == 0 && flag3 == 1){
			document.getElementById("suggest").innerHTML=ino+"<br />"+bre;		
		}
		else if (flag0 == 1 && flag1 == 0 && flag2 == 0 && flag3 == 1){
			document.getElementById("suggest").innerHTML=pre+"<br />"+bre;		
		}
		else if (flag0 == 0 && flag1 == 1 && flag2 == 1 && flag3 == 0){
			document.getElementById("suggest").innerHTML=ino+"<br />"+post;	
		}
		else if (flag0 == 1 && flag1 == 0 && flag2 == 1 && flag3 == 0){
			document.getElementById("suggest").innerHTML=pre+"<br />"+post;		
		}
		else if (flag0 == 0 && flag1 == 0 && flag2 == 0 && flag3 == 1){
			document.getElementById("suggest").innerHTML=bre;	
		}
		else if (flag0 == 0 && flag1 == 0 && flag2 == 1 && flag3 == 0){
			document.getElementById("suggest").innerHTML=post;	
		}
		else if (flag0 == 0 && flag1 == 1 && flag2 == 0 && flag3 == 0){
			document.getElementById("suggest").innerHTML=ino;	
		}
		else if (flag0 == 1 && flag1 == 0 && flag2 == 0 && flag3 == 0){
			document.getElementById("suggest").innerHTML=pre;	
		}
		else if (flag0 == 1 && flag1 == 1 && flag2 == 0 && flag3 == 0){
			document.getElementById("suggest").innerHTML=pre+"<br />"+ino;	
		}	
			$(document).ready(function(){
			$("#tORfBr").fadeIn();
			$("#tORfIn").fadeIn();
			$("#tORfPost").fadeIn();
			$("#tORfPre").fadeIn();
			$(".traversalAns").fadeIn();
			$("#Submit").hide();
			$("#suggest").fadeIn();
		});
	}
}

var compare = new compareCorrectAnswer();