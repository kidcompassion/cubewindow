$(document).ready(function(){
	
	$('.view').click(function(){
		
		$(".photo_credit span").remove();

		$(".credit_link").remove();
		
		var imgArray = [
			{
				"photo_name" : "carillonjane", 
				"photo_credit" : "Photo by someone", 
				"photo_url" : "http://twitter.com" 
			},  
			{
				"photo_name" : "mary", 
				"photo_credit" : "Photo by @pipingloud", 
				"photo_url" : "http://twitter.com/pipingloud" 
			},
			{
				"photo_name" : "olgapolis", 
				"photo_credit" : "Photo by @olgapolis", 
				"photo_url" : "http://twitter.com/olgapolis" 
			}, 
			{
				"photo_name" : "sally", 
				"photo_credit" : "Photo by @sallypoulsen", 
				"photo_url" : "http://twitter.com/sallypoulsen" 
			}, 
			{
				"photo_name" : "contessabessa", 
				"photo_credit" : "Photo by contessabessa", 
				"photo_url" : "http://twitter.com/contessabessa"
			}
			];

		var totalImgs = imgArray.length;

		var number = Math.floor((Math.random() * totalImgs));
		var credit = '<a class="credit_link" href="' + imgArray[number].photo_url + '" target="_blank">' + imgArray[number].photo_credit + '</a>';


		$(".window").css("background-image", "url('img/" + imgArray[number].photo_name + ".jpg')");

		$(".photo_credit").prepend(credit);




	});
	
});