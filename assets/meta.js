$(function(){

$("[data-url]").each(function(){
  var url = $(this).attr("data-url");
  $.get(url, function( html ){
    var $page = $(html);
    var title = $page.filter("title").text();
    var image = $page.filter("meta[property='og:image']").attr("content");
    var description = $page.filter("meta[property='og:description']").attr("content");

    $("[data-url='"+url+"']").find("[data-value='title']").text(title);
    $("[data-url='"+url+"']").find("[data-value='description']").text(description);
    $("[data-url='"+url+"']").find("[data-value='image'] img").attr("src", image);
  });
});

});
