$(document).ready(function() {

    // Боковое меню

    $('.menuToggle').on('click', function() {
        $('body').toggleClass('none-scroll');
        $('.nav-list-wrap').toggleClass('selected');
        $('.overlay-page').toggleClass('on-overlay');
        $(this).toggleClass('on-hidden');
    });



    $('.overlay-page').on('click', function() {
        $('body').removeClass('none-scroll');
        $('.nav-list-wrap').removeClass('selected');
        $('.menuToggle').removeClass('selected on-hidden');
        $(this).removeClass('on-overlay');

        
    });


    $('[data-countdown]').each(function() {
		  var $this = $(this), finalDate = $(this).data('countdown');
		  $this.countdown(finalDate, function(event) {
		  	$this.html(event.strftime('%D:%H:%M:%S'));
		  });
	});




});




