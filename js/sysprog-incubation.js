$(document).ready(function() {
var renderPage = function(data, tabletop){
    // prepare handlebars template
    var list_item_source = '<div class="item" style="margin:0 1em 0 0"><h4 class="ui icon header"><i class="circular user icon"></i>{{name}}<br/>{{amount}}</h4></div>';
    var list_item = Handlebars.compile(list_item_source);
    // prepare data
    var list = tabletop.sheets('donators').all();
    // combine template and data
    $.each(list, function(row_index, row_data){
      var name = row_data['姓名'] || '';
      var amount = row_data['金額'] || '';
      var context = {amount: amount, name: name}
      var $list_item_element = $(list_item(context));
      $('[data-name="donators"] .segment .list').append($list_item_element);
    });
  }
  Tabletop.init({
    key: '1dfka9bdGjT48ciYStp_41xLmWNSfi38I3mDR1-C9GKI',
    callback: renderPage,
    simpleSheet: false
  });
});
