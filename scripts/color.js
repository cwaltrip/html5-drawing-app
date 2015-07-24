// JavaScript that handles the color selection and addition
// Chris Waltrip 07-15-2015 Initial file created

var color = $(".selected").css("background-color");

var size = 5;

$(".controls").on("click", "li", function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
	color = $(this).css("background-color");
});

$("#showColorSelector").click(function(){
	changeColor();
	$("#colorSelector").toggle();
});

$("#showSizeSelector").click(function(){
        changeSize();
        $("#sizeSelector").toggle();
});

function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

function changeSize() {
	size = $("#size").val();
}

$("input[type=range]").change(changeColor);

$("#addNewColor").click(function(){
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	$newColor.click();
});