$(document).ready(function(){
  if ($(window).width() > 650) {
    $(".chakdiv").hover(
    function(){
      $(this).animate({padding:"5px"}, 100);
    },
    function(){
      $(this).animate({padding:"0px"}, 50);
    });
  };

  $(".chakdiv").mouseenter(function(){
    var curId = $(this).attr("id");
    var bgColor = $(this).css("background-color");
    $("body").css("background-color", bgColor)
    $(this).parent().parent().find("#theaterinfo").empty();
    $(this).parent().parent().find("#theaterinfo").append($("div#" + curId + "Desc").html());
  });
});

/*if ($(window).width() > 650) {
  alert('greater than 650');
}

if window.width > 650px;
$(this).animate({padding:"5px"}, 100);
},
function(){
  $(this).animate({padding:"0px"}, 50);
});
*/
