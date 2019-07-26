(function($) {

  $.fn.railsSortable = function(options) {
    options = options || {};
    var settings = $.extend({}, options);

    settings.update = function(event, ui) {
      if (typeof options.update === 'function') {
        options.update(event, ui);
      }

      $.ajax({
        type: 'POST',
        url: '/sortable/reorder',
        dataType: 'json',
        contentType: 'application/json',
<<<<<<< HEAD
        error: globalHandleError,
        succsess: function(){
        },
        data: JSON.stringify(makePostData($(this))),
=======
        data: JSON.stringify({
          rails_sortable: $(this).sortable('toArray'),
        }),
>>>>>>> origin/use_message_verifier
      });
    }

    this.sortable(settings);
  };
})(jQuery);