// Preloader
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

// Team
$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
  });
});

// Progress bars
$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          2000
        );
      });
      this.destroy();
    },
    { offset: "bottom-in-view" }
  );
});

// Responsive Tabs
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

// Portfolio

$(window).on("load", function () {
  $("#isotope-container").isotope({});

  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $("#isotope-container").isotope({ filter: filterValue });
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

// Magnifier

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// Testimonials

$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
  });
});

// Counter up
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// Clients
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
  });
});

// Google Map

$(window).on("load", function () {
  var addressString = "230 Broadway, NY, New York 10007, USA";
  var myLatLng = { lat: 40.712685, lng: -74.00592 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatLng,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });

  var infoWindow = new google.maps.InfoWindow({
    content: addressString,
  });
  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
});

// Navigation Bar

$(function () {
  showHideNav();
  $(window).scroll(function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      $("#back-to-top").fadeIn();
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

// Animation
$(function() {
  new WOW().init();
})

$(window).on('load', function() {
  $("#home-heading-1").addClass("animated fadeInDown")
  $("#home-heading-2").addClass("animated fadeInLeft")
  $("#home-text").addClass("animated zoomIn")
  $("#home-btn").addClass("animated zoomIn")
  $("#arrow-down i").addClass("animated fadeInDown infinite")
})