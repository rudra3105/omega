/*-----------------------------------------------------------------------------------

    Template Name: Natex

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]

      01. mobile-nav
      02. search-box
      03. countNum
      04. hero-one-slider
      05. hero-two-slider
      06. three-slider
      07. img-slider
      08. produsts-one-slider
      09. innovative-slider
      10. visit-slider
      11. client-slider
      12. testimonial-slider
      13. blog-slider
      14. company-slider
      15. project-showcase-slider 
      16. mySwiper 
      17. accordion-item
      18. progress_bar
      19. scrollTop
      20. lightbox
      21. input add count
      22. li-pd-imgs

-----------------------------------------------------------------------------------*/


jQuery(document).ready(function($) {
    /*** 01. mobile-nav ***/
    $('.mobile-nav .menu-item-has-children').on('click', function(event) {
        $(this).toggleClass('active');
        event.stopPropagation();
    });

    $('#mobile-menu').click(function() {
        $(this).toggleClass('open');
        $('#mobile-nav').toggleClass('open');
    });

    $('#desktop-menu').click(function() {
        $(this).toggleClass('open');
        $('.desktop-menu').toggleClass('open');
    });

    $('#res-cross').click(function() {
        $('#mobile-nav').removeClass('open');
        $('#mobile-menu').removeClass('open')
    });
});
/***-------- 02. search-box   ------- ***/
if (jQuery('.search-box-outer').length) {
    jQuery('.search-box-outer').on('click', function() {
        jQuery('body').addClass('search-active');
    });
    jQuery('.close-search').on('click', function() {
        jQuery('body').removeClass('search-active');
    });
}
/***-------- 03. countNum   ------- ***/

function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 5000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }

}

//When the document is ready
$(function() {
    $(window).scroll(function() {
        $("h2[data-max]").each(function() {
            inVisible($(this));
        });
    })
});

function inVisible(element) {
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            duration: 5000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }

}
$(function() {
    $(window).scroll(function() {
        $("h2[data-max]").each(function() {
            inVisible($(this));
        });
    })
});

// count end

if (typeof Swiper !== 'undefined') {
    /***-------- 04. hero-one-slider   ------- ***/
    var swiper = new Swiper(".hero-one-slider", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        freeMode: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /***-------- 05. hero-two-slider   ------- ***/
    var swiper = new Swiper(".hero-two-slider", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        freeMode: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /***-------- 06. three-slider   ------- ***/
    var swiper = new Swiper(".three-slider", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        freeMode: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /***-------- 07. img-slider   ------- ***/
    var swiper = new Swiper(".img-slider", {
        slidesPerView: 1,
        loop: true,
        // speed: 1000,
        freeMode: true,
        grabCursor: true,
        effect: "fade",
        // autoplay: {
        //   delay: 3000,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /***-------- 08. produsts-one-slider   ------- ***/
    var swiper = new Swiper(".produsts-one-slider", {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        freeMode: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
            },
            556: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });
    /***-------- 09. innovative-slider   ------- ***/
    var swiper = new Swiper(".innovative-slider", {
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        freeMode: true,
        // autoplay: {
        //   delay: 3000,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });
    /***-------- 10. visit-slider   ------- ***/
    var swiper = new Swiper(".visit-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        freeMode: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    /***-------- 11. client-slider   ------- ***/
    var swiper = new Swiper(".client-slider", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        freeMode: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /***-------- 12. testimonial-slider   ------- ***/
    var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        freeMode: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /***-------- 13. blog-slider   ------- ***/
    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 2,
        loop: true,
        speed: 1000,
        spaceBetween: 20,
        freeMode: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });
    /***-------- 14. company-slider   ------- ***/
    var swiper = new Swiper(".company-slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        freeMode: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
            },
            556: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    /***-------- 15. project-showcase-slider   ------- ***/
    var swiper = new Swiper(".project-showcase-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // speed: 1000,
        freeMode: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    /***-------- 16. mySwiper   ------- ***/
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        freeMode: true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            10: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
}

/***-------- 17. accordion-item   ------- ***/
$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if ($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});

// end

/***-------- 18. progress_bar   ------- ***/

$(document).ready(function() {
    progress_bar();
});

function progress_bar() {
    var speed = 30;
    var items = $('.progress_bar').find('.progress_bar_item');

    items.each(function() {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);

        var count = setInterval(function() {
            if (i <= itemValue) {
                var iStr = i.toString();
                item.css({
                    'width': iStr + '%'
                });
                value.find('.item_value').html(iStr + '%');
            } else {
                clearInterval(count);
            }
            i++;
        }, speed);
    });
}
/***-------- 19. scrollTop   ------- ***/
function scrollTopPercentage() {
    const scrollPercentage = () => {
        const scrollTopPos = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
        const scrollElementWrap = $("#scroll-percentage");

        scrollElementWrap.css("background", `conic-gradient( #fff ${scrollValue}%, #000 ${scrollValue}%)`);

        // ScrollProgress
        if (scrollTopPos > 100) {
            scrollElementWrap.addClass("active");
        } else {
            scrollElementWrap.removeClass("active");
        }

        if (scrollValue < 99) {
            $("#scroll-percentage-value").text(`${scrollValue}%`);
        } else {
            $("#scroll-percentage-value").html('<i class="fa-solid fa-arrow-up-long"></i>');
        }
    }
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;
    // Back to Top
    function scrollToTop() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    $("#scroll-percentage").on("click", scrollToTop);
}
scrollTopPercentage();


/* 20. lightbox */
var boxWidth = $("#lightbox").width();
$(".white_content").animate({
    opacity: 0,
    width: 0,
    right: -10000
});
$("#close").on('click', function() {
    $(".white_content").animate({
        opacity: 0,
        width: 0,
        right: -1000
    });
});
$("#show").on('click', function() {
    $(".white_content").animate({
        opacity: 1,
        right: 0
    });

});

/* 21. input add count */
$('.add').click(function() {
    var th = $(this).closest('.wrap').find('.count');
    th.val(+th.val() + 1);
});
$('.sub').click(function() {
    var th = $(this).closest('.wrap').find('.count');
    if (th.val() > 1) th.val(+th.val() - 1);
});


/* 22. li-pd-imgs */
$('.li-pd-imgs').on('click', function() {

    var img_src = "";

    $('.li-pd-imgs.nav-active').removeClass('nav-active');

    $(this).addClass('nav-active');

    img_src = $(this).find('img').attr('src');

    $('.pd-main-img').children('img').attr('src', img_src);

});