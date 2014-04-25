$(document).ready(function(){
	
	$('.view').click(function(){
		var imgArray = [
			"carillonjane", 
			"mary", 
			"olgapolis", 
			"contessabessa",
			"tomfrommyspace",
			"dora",
			"videogirl",
			"cijin",
			"argleton", 
			"241"
			];

		var totalImgs = imgArray.length;

		var number = Math.floor((Math.random() * totalImgs));


		$(".window").css("background-image", "url('img/" + imgArray[number] + ".jpg')");
	});
	
});