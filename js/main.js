$(function () {
  $(".heroes__slider-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".heroes__slider-text",
    prevArrow: `<button class="slick-btn slick-prev">
    <img src="images/arrow-prev.png" alt="prev" />
  </button>`,
    nextArrow: `<button class="slick-btn slick-next">
  <img src="images/arrow-next.png" alt="next" />
</button>`,
  });
  $(".heroes__slider-text").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".heroes__slider-img",
  });
});
