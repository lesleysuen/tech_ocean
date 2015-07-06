$(document).ready(function(){

    

// var previousScroll = 0,
// headerOrgOffset = $('#header').offset().top;

// $('#header-wrap').height($('#header').height());

// $(window).scroll(function() {
//     var currentScroll = $(this).scrollTop();
//     console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
//     if(currentScroll > headerOrgOffset) {
//         if (currentScroll > previousScroll) {
//             $('#header').fadeOut();
//         } else {
//             $('#header').fadeIn();
//             $('#header').addClass('fixed');
//         }
//     } else {
//          $('#header').removeClass('fixed');   
//     }
//     previousScroll = currentScroll; 
// });


var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
  vid.classList.add("stopfade");
}

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// }); 

$('iframe.google_map').each( function(i, iframe) {
    $(iframe).parent().hover( // make inactive on hover
        function() { $(iframe).css('pointer-events', 'none');
    }).click( // activate on click
        function() { $(iframe).css('pointer-events', 'auto');
    }).trigger('mouseover'); // make it inactive by default as well
});


/* get the value of the bottom of the #main element by 
adding the offset of that element plus its height, set it as a variable */
// var homeBottom = parseFloat($('#home').offset().top) + parseFloat($('#home').height());

// on scroll, 
// $(window).on('scroll',function(){
//     // we round here to reduce a little workload
// 	var stop = Math.round($(window).scrollTop());
// 	console.log(stop);
// 	console.log(homeBottom);
// 	if (stop > homeBottom) {
// 	    $('.container-fluid').addClass('second-section');
// 	    // $('.container-fluid').addClass( 	)
// 	} else {
// 	    $('.container-fluid').removeClass('second-section');
// 	}
// });

// $(function () {
//     $('.header').stickyNavbar({
//     activeClass: "active",          // Class to be added to highlight nav elements
//     sectionSelector: "scrollto",    // Class of the section that is interconnected with nav links
//     animDuration: 250,              // Duration of jQuery animation
//     startAt: 0,                     // Stick the menu at XXXpx from the top of the this() (nav container)
//     easing: "linear",               // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
//     animateCSS: true,               // AnimateCSS effect on/off
//     animateCSSRepeat: false,        // Repeat animation everytime user scrolls
//     cssAnimation: "fadeInDown",     // AnimateCSS class that will be added to selector
//     jqueryEffects: false,           // jQuery animation on/off
//     jqueryAnim: "slideDown",        // jQuery animation type: fadeIn, show or slideDown
//     selector: "a",                  // Selector to which activeClass will be added, either "a" or "li"
//     mobile: false,                  // If false nav will not stick under 480px width of window
//     mobileWidth: 480,               // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due usability on mobile devices)
//     zindex: 9999,                   // The zindex value to apply to the element: default 9999, other option is "auto"
//     stickyModeClass: "sticky",      // Class that will be applied to 'this' in sticky mode
//     unstickyModeClass: "unsticky"   // Class that will be applied to 'this' in non-sticky mode
//   });
// });

$("#body").scroll( function() {

    var value = $(this).scrollTop();
    if ( value > 120 )
        $("#navbar-collapse-main").hide();
    else
        $("#navbar-collapse-main").show();
});

}); 
