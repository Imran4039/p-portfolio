// 1. Simple mode, it styles document scrollbar:
$(function() {
//*******for nice scroll********//  
    $("body").niceScroll({
    	cursorcolor: "#40AFCC",
    	cursorwidth: "15px",
    	cursorborder: "2px solid #fff",
    	cursorborderradius: "30px",
    	scrollspeed: 60, 
    });

//*******for parallax********//
    var images = document.getElementsByClassName('simple-parallax');
	var para = new simpleParallax(images,{
	delay: .8,
	orientation:'left',
	transition:'cubic-bezier(0,0,0,1)',
	scale: 1.1,
    overflow: true,
    breakpoint: 100
});

//*******fakeloader********//
$(".fakeloader").fakeLoader({

// Time in milliseconds for fakeLoader disappear
timeToHide:1200, 

// 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
spinner:"spinner1",//Options: 

// Background color. Hex, RGB or RGBA colors
bgColor:"#2ecc71", 
            
});



});