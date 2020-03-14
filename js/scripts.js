$(document).ready(function() {
  $("#reserveTableBtn").click(function() {
    $("#reserveModal").modal("toggle");
  });
  $("#reserveModalClose").click(function() {
    $("#reserveModal").modal("hide");
  });

  $("#loginBtn").click(function() {
    $("#loginModal").modal("toggle");
  });
  $("#loginModalClose").click(function() {
    $("#loginModal").modal("hide");
  });

  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function() {
    if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-pause")
    ) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-pause");
      $("#carouselButton")
        .children("span")
        .addClass("fa-play");
    } else if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-play")
    ) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-play");
      $("#carouselButton")
        .children("span")
        .addClass("fa-pause");
    }
  });
});
