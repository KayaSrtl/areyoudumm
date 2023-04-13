var window_height, window_width;
var ismenuopen = false;
var is_mobile_phone = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;


$( document ).ready(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
	setTimeout(function() { beReadyPage();}, 1000);
});


$(document).keydown(function(e){
	
	
});




$(window).scroll(function(event){
	
	
	
	
});


function beReadyPage () {
	window_height = parseInt($( window ).height());
	window_width = parseInt($( window ).width());
}




$( window ).resize(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
	return;
});


function areyoudumm(temp) {
	if(temp) {
		$(".main_box_bottom_2").css("display", "flex");
		$(".main_box_bottom").css("display", "none");
		$(".main_box_top").css("display", "none");
	} else {
		$("#false_button").css("left", Math.random() * ($(".false_button_area").width() - $("#false_button").width()));
		$("#false_button").css("top", Math.random() * ($(".false_button_area").height() - $("#false_button").height()));
	}
}
