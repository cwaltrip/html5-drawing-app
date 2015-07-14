var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// When clicking on control list items,
$(".controls").on("click", "li", function(){
	// deselect sibling elements
	$(this).siblings().removeClass("selected");
	// select clicked element
	$(this).addClass("selected");
	// cache current color
	color = $(this).css("background-color");
});

// When "new color" button is pressed,
$("#clearCanvas").click(function(){
	// show or hide the color selector
	clearCanvas();
});

function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
}

// When "new color" button is pressed,
$("#revealColorSelect").click(function(){
	// show or hide the color selector
	changeColor();
	$("#colorSelect").toggle();
});

// update the new color span
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

// When color sliders change
$("input[type=range]").change(changeColor);

// When "add color" is clicked,
$("#addNewColor").click(function(){
	// Append the color to the controls ul
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	// Select the new color
	$newColor.click();
});

// On mouse events on the canvas,
$canvas.mousedown(function(e){
        context.lineWidth = 5;
        context.lineJoin = 'round';
        context.lineCap = 'round';
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	// draw lines
	if (mouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
		context.lineTo(e.offsetX,e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});
