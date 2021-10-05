$(function () {
  $(document).mouseup(function (e) {
    var div = $(".menu_ul, .lines");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".menu_ul").removeClass("active");
      document.getElementById("menu-bar").checked = false;
      document.getElementById("menu-active").checked = false;
    }
  });

  $(window).scroll(function () {
    let offset = $(window).scrollTop();
    $(".menu.scroll").toggleClass("fixed", offset > 100);
    $(".nav").toggleClass("fixed", offset > 100);
  });

  $(document).mouseup(function (e) {
    var div = $(".city_list");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".city_list").hide();
    }
  });

  $(".lines").on("click", function () {
    if (
      document.getElementById("menu-bar").checked ||
      document.getElementById("menu-active").checked
    ) {
      $(".menu_ul").removeClass("active");
    } else {
      $(".menu_ul").addClass("active");
    }
  });

  $(".close_sale").click(function () {
    $(".topest").slideUp(500);
  });

  /* ************** calculator select ******************* */
  $("select").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());
    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
    }
    var $listItems = $list.children("li");
    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
    });
    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });

  /* ************** calculator select ******************* */

  let link = $(".footer__menu a, .menu li a");
  link.on("click", function (e) {
    e.preventDefault();
    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);
    $("html, body").animate({ scrollTop: target.offset().top - 120 }, 1000);
  });

  document.querySelector(".btn-back").addEventListener("click", function () {
    location.reload();
  });

  var swiper = new Swiper(".reviewSwiper", {
    spaceBetween: 60,
    navigation: {
      nextEl: ".review-button-next",
      prevEl: ".review-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      992: {
        slidesPerView: 1.6,
        slidesPerGroup: 1,
      },
    },
  });

  $(".filter_tab").click(function () {
    $(".filter_tab")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  function toggleGoods(target, show, hide) {
    $(target).click(function () {
      $(hide).fadeOut(0);
      $(show).fadeIn();
    });
  }

  toggleGoods(".sert", ".section_sert", "section.catalog .col-lg-9");
  toggleGoods(".vkladki", ".section_vkladki", "section.catalog .col-lg-9");
  toggleGoods(".ceramic", ".section_ceramic", "section.catalog .col-lg-9");
  toggleGoods(".mceramic", ".section_mceramic", "section.catalog .col-lg-9");
  toggleGoods(".temporal", ".section_temporal", "section.catalog .col-lg-9");
  toggleGoods(".protez", ".section_protez", "section.catalog .col-lg-9");
  toggleGoods(".helper", ".section_helper", "section.catalog .col-lg-9");
});
