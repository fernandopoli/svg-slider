// Auto Play Function
function autoPlaySlider() {
  // Global Variables
  var slideCount = $(".slider-dots li").length - 1;
  var counter = 0;
  setInterval(function() {
    if (counter >= slideCount) {
      counter = 0;
    } else {
      counter += 1;
    }
    $('.slider-dots li:eq("' + counter + '") a').click();
  }, 8000);
}

// Slider Change Function
function SliderChange(e) {
  e.preventDefault();
  // Getting the target
  var linkItem = $(this).data("link");
  // Removing the active to the selected target
  $("*[data-link]")
    .parent()
    .removeClass("active");
  // Adding the active to the selected target
  $('[data-link="' + linkItem + '"]')
    .parent()
    .addClass("active");
  //Changing The image
  $("*[data-img]").removeClass("active");
  $('[data-img="' + linkItem + '"]').addClass("active");
  // Adding Css Animation
  $(".slider-image-container").removeClass("move");
  void this.clientWidth;
  $(".slider-image-container").addClass("move");
}

// Init Click
$("*[data-link]").on("click", SliderChange);

// Init AutoPlay
autoPlaySlider();
