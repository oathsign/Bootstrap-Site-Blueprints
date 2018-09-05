$( document ).ready(function() {

	// Set carousel options
	$('.carousel').carousel({
	  interval: 8000 // 8 seconds vs. default 5
	});

});



$('.navbar-nav li').click(function(){
	// $('.navbar-nav .nav').removeClass('active');
	$(this).addClass('active');
	$(this).siblings().removeClass("active");  
});

