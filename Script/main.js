function changeSize(size) {
    var e = function () {
      var cw = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = cw / size + "px";
    };
    e();
    var ev = "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener && window.addEventListener(ev, e, false);
    document.addEventListener &&
      document.addEventListener("DOMContentLoaded", e, false);
  }
  
  changeSize(1920);

$(".menu li a").on('click', function (e) {
    var url = $(e.target).data('href');
    var hash = url.substring(url.indexOf("#") + 1);
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top - $('.navbar').height() * 1.5
    }, 500);
    
});  

$(document).on("mouseover", ".menu li", (e) => {
  let isShow = $(e.currentTarget).hasClass("curr");
    if (!isShow) $(e.currentTarget).addClass("curr");
    else $(e.currentTarget).removeClass("curr");
});

var myVar,
  isPause = false,
  slideIndex = 1;

function plusSlides(e) {
  clearRunSlide(), showSlides((slideIndex += e));
}

function currentSlide(e) {
  clearRunSlide(), showSlides((slideIndex = e));
}

function showSlides(e) {
  var i,
    t = $(".slide-item");
  $(".slide-item .slide-card").removeClass("flipped");
  for (
    (e > t.length || slideIndex > t.length) && (slideIndex = 1),
      (e < 1 || slideIndex < 1) && (slideIndex = t.length),
      i = 0;
    i < t.length;
    i++
  )
    t[i].className = "slide-item";
  1 === slideIndex &&
    ((t[t.length - 1].className = "slide-item item-active item-prev"),
    (t[slideIndex - 1].className = "slide-item item-active item-center"),
    (t[slideIndex].className = "slide-item item-active item-next")),
    slideIndex === t.length &&
      ((t[slideIndex - 2].className = "slide-item item-active item-prev"),
      (t[slideIndex - 1].className = "slide-item item-active item-center"),
      (t[0].className = "slide-item item-active item-next")),
    slideIndex !== t.length &&
      1 !== slideIndex &&
      ((t[slideIndex - 2].className = "slide-item item-active item-prev"),
      (t[slideIndex - 1].className = "slide-item item-active item-center"),
      (t[slideIndex].className = "slide-item item-active item-next")),
    autoRunSlide();
}

function autoRunSlide() {
  if (!isPause) {
    myVar = setTimeout(function () {
      showSlides(slideIndex++);
    }, 2500);
  }
}

function clearRunSlide() {
  clearTimeout(myVar);
}

showSlides(slideIndex);
// $(document).on("click", ".item-center", () => {
//   let isFlipped = $(".item-center .slide-card.flipped").length > 0;
//   if (!isFlipped) $(".item-center .slide-card").addClass("flipped");
//   else $(".item-center .slide-card").removeClass("flipped");
// });

$(document).on("click", ".item-next", () => {
  clearRunSlide(), plusSlides(1);
});

$(document).on("click", ".item-prev", () => {
  clearRunSlide(), plusSlides(-1);
});

$(document).on("mouseover", ".slide-item, .next, .prev", () => {
  clearRunSlide();
  isPause = true;
});

$(document).on("mouseout", ".slide-item, .next, .prev", () => {
  isPause = false;
  autoRunSlide();
});