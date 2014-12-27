/*$(document).ready(function(){
  $(".chakdiv").on("mouseenter", function(){
    $(this).animate({right:"200px"});
  });
	$(".chakdiv").on("mouseleave", function(){
		$(this).animate({right:"0px"});
	});
}); 2014-12-26 JXS | cool bouncing mechanism */

$(document).ready(function(){
  $(".chakdiv").click(function(){
    var curId = $(this).attr("id");
    //alert(curId);
    $(this).animate({right:"200px"});
    $(this).parent().find("#" + curId + "Desc").show().animate({right:"-125px", top:"-60px"});
  });
});
