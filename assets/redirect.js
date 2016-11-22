$(function(){

$("[data-url]").each(function(){
  var url = $(this).attr("data-url");
  $.get(url, function( html ){
    var $page = $(html);
    var title = $page.filter("title").text();
    var target = $page.filter("meta[http-equiv='refresh']").attr("content");
    target = target.slice( target.indexOf("url=") + 4 );
    $("[data-url='"+url+"']").find("[data-value='title']").text(title);
    $("[data-url='"+url+"']").find("[data-value='redirect url'] pre").text(target);
  });
});

});
