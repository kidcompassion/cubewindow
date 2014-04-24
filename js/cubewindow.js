$(document).ready(function(){
	
	$('.view').click(function(){
		
		var number = Math.floor((Math.random() *5));
		var imgArray = [
			'yellow', 
			'blue', 
			'green', 
			'red', 
			'purple'
			];

		$('.window').css('background-image', imgArray[number]);
	});
	
});