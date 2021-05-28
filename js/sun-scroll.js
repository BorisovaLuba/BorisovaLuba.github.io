$(document).ready(function () {
    
    $(window).scroll(function () {
        var vheight = $(window).height();
        var dheight = $(document).height();

        var top = $(document).scrollTop();
        if (top > (dheight - 1.3*vheight)) {
            $('.sun').removeClass('anim');
            $('.sun3').addClass('anim');
        }
        else if (top > 0.5*vheight) {
            $('.sun').removeClass('anim');
            if (top < 1.3*vheight)
                $('.sun2').addClass('anim');
        } else {
            $('.sun2').removeClass('anim');
            $('.sun3').removeClass('anim');
            if(!$('.sun1').hasClass('anim'))
                $('.sun1').addClass('anim');
        }
    });

        var vheight = $(window).height();
        var dheight = $(document).height();

        var top = $(document).scrollTop();
        if (top > (dheight - 1.3*vheight)) {
            $('.sun').removeClass('anim');
            $('.sun3').addClass('anim');
        }
        else if (top > 0.5*vheight) {
            $('.sun').removeClass('anim');
            if (top < 1.3*vheight)
                $('.sun2').addClass('anim');
        } else {
            $('.sun2').removeClass('anim');
            $('.sun3').removeClass('anim');
            if(!$('.sun1').hasClass('anim'))
                $('.sun1').addClass('anim');
        }

    /* END: Зміна класу для <nav> по скролу */
});