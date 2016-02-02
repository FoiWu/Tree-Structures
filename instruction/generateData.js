//Generate 8 numbers or alphabets by random or input.

var randomArray = new Array(50);     //Numbers of 1~50.
var dataArray = new Array(7);      //Selected numbers.

var generateNumbers = function(){
	//
	//Generate 8 numbers by random when user press the "Random Data" button.
	//
	this.getNodes = function(page){ 
	
		//Clean all datas from nodeArray, and clean all datas from bfArray when button is "Show AVL Tree". 
		for( var j = 0; j <= (nodeArray.length-1); j++ ){
			nodeArray[j] = null;
			if( document.getElementById("ShowAll").innerHTML == "Show AVL Tree" ){
				bfArray[j] = null;
			}
		}
	   
		$(document).ready(function(){
			$(".inputBox").hide();
		});
		
		var i,j=0,k=0;　
		for(i=0; i<49; i++){
			randomArray[i]=i+1;
		}
		
	　　	for(i=1; i<=100; i++){
	　　　　	j=Math.floor(Math.random()*49);
	　	　　	k=Math.floor(Math.random()*49);
	　　	　　	randomArray[49]=randomArray[j];
	　　	　　	randomArray[j]=randomArray[k];
	　　	　　	randomArray[k]=randomArray[49];
		}
		
		//Clean dataArray first.
		for(var i = 0; i <= 6; i++){ 
			dataArray[i] = null;
		}	
		
		for(i = 0; i <= 6; i++){
			dataArray[i] = randomArray[i];
		}
		
		//
		//page = 1:"BST_Simulation(show_all).html".
		if( page == 1 ){
			document.getElementById("rawData").innerHTML = dataArray.toString();
			$(document).ready(function() {
				$("#ShowAll").fadeIn();
				$("#getStep").fadeIn();
			});	
		}
		//page = 2:"BST_Test(Traversal).html" or "BST_Test(BuildATree).html".
		else if( page == 2 ){
			document.getElementById("rawData").innerHTML = dataArray.toString();
		}
	}
	
	//
	//Generate 8 alphabets by random.
	//
	this.getAlphabetNodes = function(page){        
		var randomArray = ["F", "O", "I", "E", "L", "Y", "N", "W", "S", "H", "R", "K", "B", "Z", "M", "V", "X", "G", "P", "C", "U", "D", "A", "Q", "J", "T"];
		var i,j=0,k=0;　
		
	　　	for(i=1; i<=60; i++){
	　　　　	j=Math.floor(Math.random()*25);
	　	　　	k=Math.floor(Math.random()*25);
	　　	　　	randomArray[25]=randomArray[j];
	　　	　　	randomArray[j]=randomArray[k];
	　　	　　	randomArray[k]=randomArray[25];
		}
		
		//Clean dataArray first.
		for(var i=0; i <= 6; i++){ 
			dataArray[i] = null;
		}	
		
		for(i=0; i<=6; i++){
			dataArray[i] = randomArray[i];
		}
		//page = 2:"BST_Test(Traversal).html" or "BST_Test(BuildATree).html".
		if( page == 2 ){
			document.getElementById("rawData").innerHTML = dataArray.toString();
		}
	}
	
	//
	//Generate 8 numbers by input
	//
	this.inputData = function(){
		$(document).ready(function() {
			$(".inputBox").fadeIn();
		});
		
		//Clean input box.
		for(var i=0; i <= 6; i++)  { 
			var no = "n"+i;
			document.getElementById(no).value = "";
		}
		
		//Clean dataArray first.
		for(var i=0; i <= 6; i++){ 
			dataArray[i] = null;
		}	
	}
	
	//
	//Sumbit these numbers that user input.
	//
	this.submitIt = function(){
		var rawData = document.getElementById("rawData"); 
		rawData.innerHTML = ("");	  //Clean old data. 
				
		for(var i=0; i <= 6; i++)  { 
			var no = "n"+i;
			//If input wrong value,will alert user.
			if( document.getElementById(no).value == undefined || document.getElementById(no).value == ""){
				alert("Wrong input");
				$(document).ready(function() {
					$("#ShowAll").hide();
				});
				break;
			}
			
			//Puts value into array.
			else{
				var h = parseInt(document.getElementById(no).value);
				dataArray[i] = h;
				rawData.innerHTML = dataArray.toString();	     //Show new data.
				
				$(document).ready(function() {
					$("#ShowAll").fadeIn();
					$("#getStep").fadeIn();
				});
			}
		}	
	}
}

var genNumbers = new generateNumbers();