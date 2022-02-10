//console.log("usman");

/*================== Read More Text ==================*/

$(function () {
    var showChar = 490;
    var moretext = "Read More >>";
    var lesstext = "Read Less <<";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span class=" p-3">' +
                hide_content +
                '</span>' +

                '<a href="" class="morelinksss read-text " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 280;
    var moretext = " Read More >>";
    var lesstext = "Read Less <<";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +

                '<a href="" class="morelinks read-texts mt-10" style="display:block;">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 9,
        showItems: 5
    });


});


/*===================== Owl Carousel Slider ======================*/

//<i class=""></i>
//    <i class=""></i>
$(function () {
    $('#owl-one').owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: true,
        slideBy: 4,
        items: 4,
        navText: ["<i class='flaticon-left-1'></i>", " <i class='flaticon-right-arrow'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true
            },
            400: {
                margin: 10,
                items: 1,
                dots: false,
                nav: true
            },
            600: {
                margin: 10,
                slideBy: 2,
                items: 2,
                dots: false,
                nav: true
            },
            768: {
                margin: 10,
                slideBy: 3,
                items: 3,
                dots: false,
                nav: true
            },
            800: {
                margin: 10,
                slideBy: 3,
                items: 3,
                dots: false,
                nav: true
            },
            900: {
                margin: 10,
                slideBy: 3,
                items: 3,
                dots: false,
                nav: true
            },
            1000: {
                margin: 10,
                items: 4,
                dots: false,
                nav: true
            }
        }
    });
});
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        slideBy: 1,
        item: 1,
        navText: ["<i class='flaticon-left-1'></i>", " <i class='flaticon-right-arrow'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: true
            },
            400: {
                items: 1,
                dots: false,
                nav: true
            },
            600: {
                items: 1,
                dots: false,
                nav: true
            },
            800: {
                items: 1,
                dots: false,
                nav: true
            },
            1000: {
                items: 1,
                dots: false,
                nav: true
            }
        }
    });
});

//$(function () {
//    $('.owl-carousel').owlCarousel({
//        loop: true,
//        margin: 0,
//        dots: false,
//        nav: true,
//        item: 1, navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-next'></i>"],
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//                dots: false,
//                nav: true
//            },
//            400: {
//                items: 1,
//                dots: false,
//                nav: true
//            },
//            600: {
//                items: 1,
//                dots: false,
//                nav: true
//            },
//            800: {
//                items: 1,
//                dots: false,
//                nav: true
//            },
//            1000: {
//                items: 1,
//                dots: false,
//                nav: true
//            }
//        }
//    });
//});

/*===================== Slick Slider ======================*/


/*===================== Scroll Top Function Script ======================*/
$(function () {
    $("#home .slider").addClass("mt--30");
    $("#home nav").addClass("mt--24");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#home nav").addClass("sleep fixed-top mt-0 zero-skew");
            $("#home .navbar-nav").removeClass("no-skew");
            $("#home .navbar-brand").removeClass("no-skew");
            $("#home .slider").addClass("mt--46");
        } else {

            $("#home .navbar-nav").addClass("no-skew");
            $("#home .navbar-brand").addClass("no-skew");
            $("#home nav").removeClass(" sleep fixed-top mt-0 zero-skew");


        }


    });
});
/*===================== Nav tabs active Function Script ======================*/

/*===================== Another Load More Script ======================*/
$(function () {
    $(".no-display").slice(0, 12).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".no-display:hidden").slice(0, 4).slideDown();
        if ($(".no-display:hidden").length == 0) {
            $("#load-more").fadeOut('slow');
            $(".btn-gallery-border").fadeOut('slow');

        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});

/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});
/*=====================Timer Function Script ======================*/
/*===================== Donation Script ======================*/
$('input[name="donation"]').change(function (e) {
    var check = $("input[name='donation']:checked").val();
    if (check == "other") {
        $("#radio6").parent().removeClass('display-none');
    } else {
        $("#radio6").parent().addClass('display-none');
    }
});
/*=====================Active Class Script ======================*/
$(function () {
    $('.form-check-label').on('click',
        function () {
            $('.form-check-label').removeClass('radio-active');
            $(this).addClass('radio-active');
        });
});

/*=====================Counter  Script ======================*/
var counters = [];
counters = $(".counter-value");
var countersQuantity = counters.length;
console.log(counters + "," + countersQuantity);
var counter = [];

for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}
var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 1);
}
var cond = true;
requestScrollAnimation((pos) => {
    var elAlert = document.getElementById("counter-strike");
    var isVisible = isScrolledIntoView(elAlert, true);

    if (isVisible) {
        if (cond) {
            for (var j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
            cond = false;
        }


    }
});

/*===================== JS Gallery Filter ======================*/
$(document).ready(function () {
    $(".btn-act").on('click', function () {
        $(".btn-act").removeClass("filter-active");
        $(this).addClass("filter-active");
    });
});
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("no-display");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
