"use strict"

$('ul').on('click', 'li', function () {
    $(this).toggleClass('done');
});

$('Ul').on('click', 'li span',  function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
});

$('input').keypress(function (e) { 
    if (e) {
        if (e.which === 13) {
            var itemText = $(this).val();
            $(this).val("");
            $('ul').append('<li class="skew"><span class="button">X</span> ' + itemText + '</li>');
        }
    }
});