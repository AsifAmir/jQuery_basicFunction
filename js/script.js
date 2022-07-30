$(document).ready(function(){

	//hide
	$('.hide').click(function(){
		$('.txt').hide();
	});
	//show
	$('.show').click(function(){
		$('.txt').show();
	});
	//toggle with time setting in ms
	$('.tgl1').click(function(){
		$('.txt').toggle(1000);
	});
	//toggle fast
	$('.tgl2').click(function(){
		$('.txt').toggle("fast");
	});
	//toggle slow
	$('.tgl3').click(function(){
		$('.txt').toggle("slow");
	});
	// toggle default 
	$('.tgl4').click(function(){
		$('.txt').toggle();
	});
	//alert
	$('.alrt').click(function(){
		alert();
	});
	//alert with text
	$('.alrt2').click(function(){
		alert("Hello !!");
	});
	//fadeIn
	$('.fdIn').click(function(){
		$('.txt').fadeIn();
	});
	//fadeOut
	$('.fdOut').click(function(){
		$('.txt').fadeOut();
	});
	//fadeToggle
	$('.fdtgl').click(function(){
		$('.txt').fadeToggle();
	});
	// fadeTo with time(ms) & opacity
	$('.fato').click(function(){
		$('.txt').fadeTo(1000, .5);
	});
	// slide toggle
	$('.ques').click(function(){
		$('.ans').slideToggle(600);
	});
	// slide toggle by double click
	$('.ques1').dblclick(function(){
		$('.ans1').slideToggle(600);
	});
	// slide toggle by mouseOver
	$('.ques2').mouseover(function(){
		$('.ans2').slideToggle(600);
	});
});