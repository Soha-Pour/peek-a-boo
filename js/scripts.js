$(document).ready(function() {
  $("p").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $("p").click(function() {
    $(".word").slideToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#dark-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("charcol-background");
    $("body").addClass("white-text")
  });

  $(".box-it").click(function() {
    $(".box-it").addClass("boxed");
  });



});
