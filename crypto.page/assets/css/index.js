var Slider = (function () {
  var initSlider = function () {
    var dir = $("html").attr("dir");
    var swipeHandler = new Hammer(document.getElementById("slider"));
    swipeHandler.on("swipeleft", function (e) {
      if (dir == "rtl") $(".arrow-left").trigger("click");
      else $(".arrow-right").trigger("click");
    });

    swipeHandler.on("swiperight", function (e) {
      if (dir == "rtl") $(".arrow-right").trigger("click");
      else $(".arrow-left").trigger("click");
    });

    $(".arrow-right , .arrow-left").click(function (event) {
      var nextActiveSlide = $(".slide.active").next();

      if ($(this).hasClass("arrow-left"))
        nextActiveSlide = $(".slide.active").prev();

      if (nextActiveSlide.length > 0) {
        var nextActiveIndex = nextActiveSlide.index();
        $(".dots span").removeClass("active");
        $($(".dots").children()[nextActiveIndex]).addClass("active");

        updateSlides(nextActiveSlide);
      }
    });

    $(".dots span").click(function (event) {
      var slideIndex = $(this).index();
      var nextActiveSlide = $($(".slider").children()[slideIndex]);
      $(".dots span").removeClass("active");
      $(this).addClass("active");

      updateSlides(nextActiveSlide);
    });

    var updateSlides = function (nextActiveSlide) {
      var nextActiveSlideIndex = $(nextActiveSlide).index();

      $(".slide").removeClass("prev-1");
      $(".slide").removeClass("next-1");
      $(".slide").removeClass("active");
      $(".slide").removeClass("prev-2");
      $(".slide").removeClass("next-2");

      nextActiveSlide.addClass("active");

      nextActiveSlide.prev().addClass("prev-1");
      nextActiveSlide.prev().prev().addClass("prev-2");
      nextActiveSlide.addClass("active");
      nextActiveSlide.next().addClass("next-1");
      nextActiveSlide.next().next().addClass("next-2");
    };

    var updateToNextSlide = function (nextActiveSlide) {};
  };
  return {
    init: function () {
      initSlider();
    },
  };
})();

$(function () {
  Slider.init();
});

let navlink = document.querySelector(".nav_links");
let menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  navlink.classList.toggle("start-0");
  document.body.classList.toggle("overflow-hidden");
});

function hidenav() {
  navlink.classList.remove("start-0");
  document.body.classList.toggle("overflow-hidden");
}

//  slider

$(".responsive").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});

$(".feedback_slider").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
