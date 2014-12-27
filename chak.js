/*$(document).ready(function(){
  $(".chakdiv").on("mouseenter", function(){
    $(this).animate({right:"200px"});
  });
	$(".chakdiv").on("mouseleave", function(){
		$(this).animate({right:"0px"});
	});
}); 2014-12-26 JXS | cool bouncing mechanism */

/*var chakDesc = {
  crown: "<span class = \"description\" id = \"crownDesc\">
  <p>The highest Chakra represents our ability to be fully connected spiritually.</p>
  <p><strong>Location:</strong> The very top of the head.</p>
  <p><strong>Emotional Issues:</strong> Inner and outer beauty, our connection to spirituality, pure bliss.</p>
  </span>",

  eye: "<span class = \"description\" id = \"eyeDesc\">
  <p>Our ability to focus on and see the big picture.</p>
  <p><strong>Location:</strong> Forehead between the eyes.</p>
  <p><strong>Emotional Issues:</strong> Intuition, imagination, wisdom, ability to think and make decisions.</p>
  </span>"

};*/



$(document).ready(function(){
  $(".chakdiv").mouseenter(function(){
    var curId = $(this).attr("id");
    //var target = document.getElementById(curId);
    //console.log((target+"Desc").innerHTML);
    //alert(curId);
    //$(this).animate({right:"-350px"});
    //$(this).parent().find("#" + curId + "Desc").css({right:"-145px", top:"-60px"}).fadeIn(500);
    var bgColor = $(this).css("background-color");
    $("body").css("background-color", bgColor)

    $(this).parent().find("#theaterinfo").empty();

    $(this).parent().find("#theaterinfo").append($("div#" + curId + "Desc").html());
  });

  var bgColor = $(this).css("background-color");
  $("body").css("background-color", bgColor)


/*  $(".chakdiv").mouseenter(function(){
    var bgColor = $(this).css("background-color");
    $("body").css("background-color", bgColor)


  });*/
});
