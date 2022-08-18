const titles = $(".titles a"); //title set
const imgs = $(".imgs a"); //image set

//current banner and timmer
let curIndex = 0;
let timer = null;

//remove active styling
function removeActive() {
  $(".titles a").each(function () {
    $(".titles a").removeClass("active");
  });
  $(".imgs a").each(function () {
    $(".imgs a").removeClass("active");
  });
}

//switch banner
function changeBanner(index) {
  removeActive();
  $(".titles a").eq(index).addClass("active");
  $(".imgs a").eq(index).addClass("active");
}

//auto play banner
function autoBanner() {
  timer = setInterval(function () {
    curIndex++;
    if (curIndex > titles.length - 1) {
      curIndex = 0;
    }
    changeBanner(curIndex);
  }, 3000);
}

$(".titles a").each(function () {
  $(this)
    .mouseenter(function () {
      curIndex = $(this).index();
      changeBanner(curIndex);
      clearInterval(timer);
    })
    .mouseleave(function () {
      autoBanner();
    });
});

autoBanner();

// navigation bar action
let headerAnchor = $("header nav ul li");
$(window).scroll(() => {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() !== 0) {
    $("header").css({
      "background-color": "rgba(0,0,0,0.4)",
      transition: "all .5s",
    });
    headerAnchor.each(() => {
      $("a").css("color", "white");
    });
  } else {
    $("header").css("background-color", "#57544d");
    headerAnchor.each(() => {
      $("a").css("color", "white");
    });
  }
});
//navigation bar action end

//People js

function setFocus() {
  $(".item").each(function () {
    $(".item").removeClass("focus");
  });
  //add focus class to the current selected
  $(this).addClass("focus");
}
$(".item").each(function () {
  $(".item").on("click", setFocus);
});

function setOpacity() {
  $(".people-container").css({
    opacity: "1",
    transition: "all 1s",
  });
}

$(window).scroll(() => {
  if ($(window).scrollTop() > 1400) {
    $(".food-title").animate(
      {
        opacity: 1,
      },
      1500
    );
  }
  if ($(window).scrollTop() > 500) {
    $(".overview-title, .people-title").animate(
      {
        opacity: 1,
      },
      1500
    );
    $(".card:eq(0)").css({
      transform: "translateY(0%)",
      transition: ".6s linear",
    });
    $(".card:eq(1)").css({
      transform: "translateY(0%)",
      transition: ".8s linear",
    });
    $(".card:eq(2)").css({
      transform: "translateY(0%)",
      transition: "1s linear",
    });
  }

  if ($(window).scrollTop() > 1900) {
    $("li").css({
      transform: `translateX(${0}%)`,
      transition: ".8s linear",
    });
  }
  if ($(window).scrollTop() > 4000) {
    setOpacity();
  }
});
