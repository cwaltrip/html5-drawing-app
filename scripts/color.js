// JavaScript that handles the color selection and addition
// Chris Waltrip 07-15-2015 Initial file created

var color = $(".selected").css("background-color");
var size = 10; // $("#newSize").css("width");

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
    var width = $("#size").val();
    $("#newSize").css("width", width).css("height", width).css("border-radius", (width/2)).css("-moz-border-radius", (width/2)).css("-webkit-border-radius", (width/2));
    size = $("#size").val();
}

$("#colorSelector input[type=range]").change(changeColor);
$("#sizeSelector input[type=range]").change(changeSize);

$("#addNewColor").click(function(){
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    $newColor.click();
});

$("#addNewSize").click(function(){
    
});