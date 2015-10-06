$(document).ready(function() {
var renderPage = function(data, tabletop){
    // prepare handlebars template
    var list_item_source = '<div class="item"><h4 class="ui icon header"><i class="circular user icon"></i>{{name}},{{amount}}</h4></div>';
    var list_item = Handlebars.compile(list_item_source);
    // prepare data
    var list = tabletop.sheets('donators').all();
    // combine template and data
    $.each(list, function(row_index, row_data){
      var name = row_data['姓名'] || '';
      var amount = row_data['金額'] || '';
      var context = {amount: amount, name: name}
      var $row_dataitem_element = $(row_dataitem(context));
      $('[data-name="donators"] .segment').append($row_dataitem_element);
    });
  }
  Tabletop.init({
    key: '1dfka9bdGjT48ciYStp_41xLmWNSfi38I3mDR1-C9GKI',
    callback: renderPage,
    simpleSheet: false
  });
});
