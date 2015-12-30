var gridPercentage = 12.5;
var rows = (100/gridPercentage);
var columns = (100/gridPercentage);
var $row = $("<div />", {class: 'row'});
var $square = $("<div />", {class: 'square'});



$(document).ready(function() {

	//Clear Grid Button
	$("#bt-clear-grid").on('click', function() {
		$("#wrapper .square").css("opacity", 0.2);
	});

	// Grid

	for (var i = 0; i < columns; i++) {
		$row.append($square.clone());
	}

	for (var i = 0; i < rows; i++) {
		$("#wrapper").append($row.clone());
	}


	$(".square").hover(function() {
			$(this).css("opacity", opacitylevel);
	});

	//Opacity Change
	$("#wrapper").on('mouseenter', 'div', function() {
		var opacity = +$(this).css("opacity");
		opacity += 0.2;

		if (opacity < 1){
			$(this).css("opacity", opacity);
		}
	});


});