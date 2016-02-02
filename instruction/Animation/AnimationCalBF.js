var line1X, line2X, line3X, line1XEnd, line2XEnd, line3XEnd, line4X, line5X, line6X, line4XEnd, line5XEnd, line6XEnd;
var line1Y, line2Y, line3Y, line1YEnd, line2YEnd, line3YEnd, line4Y, line5Y, line6Y, line4YEnd, line5YEnd, line6YEnd;
var lBF, rBF, correctBF;
var text11x, text12x, text11y, text12y;
var text21x, text22x, text21y, text22y;

var bfCalculate = function(){	
	//Generate line to tag height of subtree.
	this.subtreeHeight = function(){
		svgSelection = d3.select("#bfTree");
		
		//Left subtree
		svgSelection.append("text").text("高度為").attr("x", text11x).attr("y", text11y).attr("id", "lHeight").style("writing-mode","tb").style("fill","red");
		svgSelection.append("text").text(lBF).attr("x",text12x).attr("y", text12y).attr("id", "lHeight").style("fill","red");
		
		svgSelection.append('line').attr("id", "lineHeight").style("stroke", "red").style('stroke-width', 2)
		.attr({
		  x1: line1X, y1: line1Y, x2: line1X, y2: line1Y
		})
		.transition().duration(1000).ease('elastic')
		.attr({
		  x2: line1XEnd, y2: line1YEnd
		});
		
		svgSelection.append('line').attr("id", "lineHeight").style("stroke", "red").style('stroke-width', 2)
		.attr({
		  x1: line2X, y1: line2Y, x2: line2X, y2: line2Y
		})
		.transition().duration(1000).ease('elastic')
		.attr({
		  x2: line2XEnd, y2: line2YEnd
		});
		
		svgSelection.append('line').attr("id", "lineHeight").style("stroke", "red").style('stroke-width', 2)
		.attr({
		  x1: line3X, y1: line3Y, x2: line3X, y2: line3Y
		})
		.transition().duration(1000).ease('elastic')
		.attr({
		  x2: line3XEnd, y2: line3YEnd
		});
		
		//Right subtree.
		svgSelection.append("text").text("高度為").attr("x", text21x).attr("y", text21y).attr("id", "rHeight").style("writing-mode","tb").style("fill","#FF8800");
		svgSelection.append("text").text(rBF).attr("x", text22x).attr("y", text22y).attr("id", "rHeight").style("fill","#FF8800");
		
		svgSelection.append('line').attr("id", "lineHeight").style("stroke", "#FF8800").style('stroke-width', 2)
		.attr({
		  x1: line4X, y1: line4Y, x2: line4X, y2: line4Y
		})
		.transition().duration(1000).ease('elastic')
		.attr({
		  x2: line4XEnd, y2: line4YEnd
		});
		
		svgSelection.append('line').attr("id", "lineHeight").style("stroke", "#FF8800").style('stroke-width', 2)
		.attr({
		  x1: line5X, y1: line5Y, x2: line5X, y2: line5Y
		})
		.transition().duration(1000).ease('elastic')
		.attr({
		  x2: line5XEnd, y2: line5YEnd
		});
		
		svgSelection.append('line').attr("id", "lineHeight").style("stroke", "#FF8800").style('stroke-width', 2)
		.attr({
		  x1: line6X, y1: line6Y, x2: line6X, y2: line6Y
		})
		.transition().duration(1000).ease('elastic')
		.attr({
		  x2: line6XEnd, y2: line6YEnd
		});
		
		//Calculate BF.
		svgSelection.append("text").text(lBF).attr("x", 185).attr("y", 430).attr("id", "bfCalText").style("fill","red").style("font-size","34px");
		svgSelection.append("text").text(rBF).attr("x", 220).attr("y", 430).attr("id", "bfCalText").style("fill","#FF8800").style("font-size","34px");
		svgSelection.append("text").text("-").attr("x", 205).attr("y", 430).attr("id", "bfCalText").style("fill","#9900FF").style("font-size","34px");
		svgSelection.append("text").text("=").attr("x", 245).attr("y", 430).attr("id", "bfCalText").style("fill","#9900FF").style("font-size","34px");
		svgSelection.append("text").text(correctBF).attr("x", 270).attr("y", 430).attr("id", "bfCalText").style("fill","#9900FF").style("font-size","34px");
		
		//d3.select("#bfCal1").transition().duration(500).attr("fill", "#33CCFF");
	}
}

//Calculate height of subtree.
$(document).ready(function() { 
	$("#bfCal1").click( function(){
		$("#lHeight").remove();
		$("#rHeight").remove();
		$("#lineHeight").remove();
		$("#bfCalText").remove();
		//d3.select("#bfCal1").transition().duration(500).attr("fill", "#4169E1");
		
		line1X = 30, line1Y = 130, line1XEnd = 40, line1YEnd = 130;
		line2X = 30, line2Y = 240, line2XEnd = 40, line2YEnd = 240;
		line3X = 35, line3Y = 130, line3XEnd = 35, line3YEnd = 240;
		line4X = 450, line4Y = 130, line4XEnd = 440, line4YEnd = 130;
		line5X = 450, line5Y = 380, line5XEnd = 440, line5YEnd = 380;
		line6X = 445, line6Y = 130, line6XEnd = 445, line6YEnd = 380;
		lBF = 2; rBF = 4, correctBF = -2;
		text11x = 25, text12x = 20, text11y = 150, text12y = 220;
 		text21x = 455, text22x = 450, text21y = 150, text22y = 220;
		
		bfCal.subtreeHeight();
	});
	$("#bfCal2").click( function(){
		$("#lHeight").remove();
		$("#rHeight").remove();
		$("#lineHeight").remove();
		$("#bfCalText").remove();
		
		line1X = 30, line1Y = 200, line1XEnd = 40, line1YEnd = 200;
		line2X = 30, line2Y = 240, line2XEnd = 40, line2YEnd = 240;
		line3X = 35, line3Y = 200, line3XEnd = 35, line3YEnd = 240;
		lBF = 1, rBF = 0, correctBF = 1;
		text11x = 25, text12x = 20, text11y = 170, text12y = 240;
 		text21x = 195, text22x = 190, text21y = 170, text22y = 240;
		
		bfCal.subtreeHeight();
	});
	$("#bfCal3").click( function(){
		
	});
	$("#bfCal4").click( function(){
		
	});
	$("#bfCal5").click( function(){
		
	});
});

var bfCal = new bfCalculate();