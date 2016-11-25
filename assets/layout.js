$(function(){

$("[data-url]").each(function(){
  var url = $(this).attr("data-url");
  $.get(url, function( html ){
    var $page = $(html);
    var title = $page.filter("title").text();
    $("[data-url='"+url+"']").find("[data-value='title']").text(title);
  });
});

});
