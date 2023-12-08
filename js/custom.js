$(function () {
  $(window).on("scroll", function () {
    const sct = $(window).scrollTop();
    if (sct > 300) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }
  });

  $(".gnb").mouseover(function () {
    $(".sub_menu").stop().slideDown(200);
    $(".gnb").addClass("on");
  });
  $(".gnb").mouseout(function () {
    $(".sub_menu").stop().slideUp(200);
    $(".gnb").removeClass("on");
  });

  $(".visual_slide").on("afterChange", function (e, s, c) {
    console.log(e, s, c); //c = 0,1

    const current = $(".visual_slide .slick-current");
    current.addClass("on").siblings().removeClass("on");
  });

  $(".visual_slide").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
  });

  $(".main_arrows .left").on("click", function () {
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $(".visual_slide").slick("slickPrev");
  });

  $(".main_arrows .right").on("click", function () {
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $(".visual_slide").slick("slickNext");
  });

  let st = true;
  $(".main_visual .play").on("click", function () {
    $(this).toggleClass("on");

    if (st) {
      $(".main_visual .visual_slide").slick("slickPlay");
    } else {
      $(".main_visual .visual_slide").slick("slickPause");
    }

    st = !st;
  });

  $(".shop_arrows .left").on("click", function () {
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $(".main_shop_wrap").slick("slickPrev");
  });

  $(".shop_arrows .right").on("click", function () {
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $(".main_shop_wrap").slick("slickNext");
  });

  $(".mopen").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
  });

  $(".main_shop_wrap").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  const tabBtn = $(".tab_btn>ul>li");
  const tabCont = $(".tab_cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function (e) {
    e.preventDefault();
    const index = $(this).index();

    $(this).addClass("active").siblings().removeClass("active");
    tabCont.eq(index).show().siblings().hide();
  });

  $(window).on("scroll", function () {
    let SCT = $(window).scrollTop();
    console.log(SCT);

    if (SCT > 400) {
      $(".to_top").addClass("on");
    } else {
      $(".to_top").removeClass("on");
    }
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
