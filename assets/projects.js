$(function(){

const filters = ["type", "topic", "field"];

// setup default value for filters

var settings = {};

for (var i = filters.length - 1; i >= 0; i--) {
  settings[filters[i]] = "all";
}

// define filter actions

var $selectedCards = $('#current .card');
$('#filter_count').text($selectedCards.length);

var runFilter = function () {

  $selectedCards = $('#current .card');

  Object.keys(settings).forEach(function (filter_id) { 

    if (settings[filter_id] != "all") {
      $selectedCards = $selectedCards.filter('[data-' + filter_id + '~="' + settings[filter_id] + '"]');
    }

  });

  $('#filter_count').text($selectedCards.length);
  
  $selectedCards.removeClass("display-none");
  $('#current .card').not($selectedCards).addClass("display-none");
}

// bind events

for (var i = filters.length - 1; i >= 0; i--) {

  const filter_id = filters[i];

  $('#submenu .item[data-'+ filter_id +']').on('click tap', function () {

    settings[filter_id] = $(this).attr('data-' + filter_id);

    $('#submenu [data-content="'+ filter_id +'"]').text( $(this).text() );
    runFilter();

  })

}

});
