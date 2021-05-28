$(document).ready(function(){
	$('.slider').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:false,
		dots:false,
        pauseOnDotsHover:true,
		slidesToShow:2,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow:1
				}
			},
		]
	});
});

