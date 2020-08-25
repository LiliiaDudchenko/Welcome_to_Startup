$(document).ready(function () {

    //Filter
    $(".button[filter]").click(function () {
        if ($(this).attr("val") == "off") {
            $(".button[filter]").attr("val", "off").removeClass("focused");
            $(this).attr("val", "on").addClass("focused");
            $(".filter > div").hide(300);
            $(".filter > div[filter=" + $(this).attr("filter") + "]").show(300);
            if ($(this).attr("filter") == "all") {
                $(".button[filter]").attr("val", "off").removeClass("focused");
                $(this).attr("val", "on").addClass("focused");
                $(".filter > div").show(300);
            }
        }

    });

    //Anchors
    $('body').scrollspy({
        target: ".navbar"
    });



});
//Up button 
var smoothJumpUp = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -50);
        setTimeout(smoothJumpUp, 20);
    }
}

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        document.getElementById('upbutton').style.display = 'block';
    } else {
        document.getElementById('upbutton').style.display = 'none';
    }
}


var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    autoHeight: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 5,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});