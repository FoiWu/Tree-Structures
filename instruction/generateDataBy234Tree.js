//Generate 8 numbers or alphabets by random or input.

var randomArray = new Array(50);     //Numbers of 1~50.
var dataArray = new Array(13);      //Selected numbers.

var generateNumbers = function(){
	//
	//Generate 8 numbers by random when user press the "Random Data" button.
	//
	this.getNodes = function(page){ 
		if( page != 2){
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
		}
		
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
		for(var i = 0; i <= 12; i++){ 
			dataArray[i] = null;
		}	
		
		for(i = 0; i <= 12; i++){
			dataArray[i] = randomArray[i];
		}
		
		//
		//page = 1:"BST_Simulation(show_all).html".
		if( page == 1 ){
			document.getElementById("rawData").innerHTML = dataArray.toString();
			$(document).ready(function() {
				$("#ShowAll").fadeIn();
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
	this.getAlphabetNodes = function(){        
		var randomArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		var i,j=0,k=0;　
		
	　　	for(i=1; i<=60; i++){
	　　　　	j=Math.floor(Math.random()*25);
	　	　　	k=Math.floor(Math.random()*25);
	　　	　　	randomArray[25]=randomArray[j];
	　　	　　	randomArray[j]=randomArray[k];
	　　	　　	randomArray[k]=randomArray[25];
		}
		
		//Clean dataArray first.
		for(var i=0; i <= 12; i++){ 
			dataArray[i] = null;
		}	
		
		for(i=0; i<=12; i++){
			dataArray[i] = randomArray[i];
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
		for(var i=0; i <= 12; i++)  { 
			var no = "n"+i;
			document.getElementById(no).value = "";
		}
		
		//Clean dataArray first.
		for(var i=0; i <= 12; i++){ 
			dataArray[i] = null;
		}	
	}
	
	//
	//Sumbit these numbers that user input.
	//
	this.submitIt = function(){
		var rawData = document.getElementById("rawData"); 
		rawData.innerHTML = ("");	  //Clean old data. 
				
		for(var i=0; i <= 12; i++)  { 
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
				var h = document.getElementById(no).value;
				dataArray[i] = h;
				rawData.innerHTML = dataArray.toString();	     //Show new data.
				
				$(document).ready(function() {
					$("#ShowAll").fadeIn();
				});
			}
		}	
	}
}

var genNumbers = new generateNumbers();