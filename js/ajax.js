$(function () {
  $("#modalForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#modalForm").serialize();
      $.ajax({
        url: "modal.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#modal-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

  $("#callForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#modalForm").serialize();
      $.ajax({
        url: "call.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#call-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

  $("#reviewForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#reviewForm").serialize();
      $.ajax({
        url: "review.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#review-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  
  $("#formCalc").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formCalc").serialize();
      $.ajax({
        url: "calculator.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

  $("#formCalc2").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formCalc2").serialize();
      $.ajax({
        url: "calculator.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

});
