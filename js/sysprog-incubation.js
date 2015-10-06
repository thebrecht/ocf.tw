<script src="js/handlebars-v4.0.2.js"></script>
<script src="js/tabletop-v1.4.2.js"></script>
<script src='js/sysprog-incubation.js'>
$(document).ready(function() {
var renderPage = function(data, tabletop){
    // prepare handlebars template
    var list_item_source = '<div class="item"><h4 class="ui icon header"><i class="circular user icon"></i>{{name}},{{amount}}</h4></div>';
    var list_item = Handlebars.compile(list_item_source);
    // prepare data
    var list = tabletop.sheets('list').all();
    // combine template and data
    $.each(list, function(row_index, row_data){
      var name = row_data['姓名'] || '';
      var amount = row_data['金額'] || '';
      var context = {amount: amount, name: name}
      var $row_dataitem_element = $(row_dataitem(context));
      if(irow_data_store_url.length > 0){
        var $irow_data_store_element = $(irow_data_store(context));
        $row_dataitem_element.append($irow_data_store_element);
      }
      if(name.length > 0){
        var $list_item_element = $(list_item(context));
        $row_dataitem_element.append($list_item_element);
      }
      $('[data-series="'+ series +'"]').append($row_dataitem_element);
    });
  }
  Tabletop.init({
    key: '1Hr5jIsr9Aor6GIcC6q97jFZ3_iTbhfHL1Ujc9hHbT80',
    callback: renderPage,
    simpleSheet: true
  });
});
