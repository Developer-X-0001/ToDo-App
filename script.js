$(document).ready(function() {
    $('#input').change(function() {
        $('p').fadeOut(250);
        var input = $(this).val();
        var item = $('<li>' + input + '</li>').hide().fadeIn(500);
        $('ul').append(item);
        $(this).val('');
    })
})
$('ul').on('click', 'li', function() {
    if ($(this).css('background') == 'rgb(0, 255, 0)' || $(this).css('background-color') == 'rgb(0, 255, 0)' ) {
        $(this).css('background', 'rgb(255, 49, 49)').fadeOut(2000, function(){
            $(this).remove();
        });
        if ($('li').length == 1) {
            $('.noTasks').delay(2020).fadeIn(2000)
        }
    } else {
        $(this).css('background', 'lime');
        $(this).html('<s>' + $(this).html() + '</s>');
        let text = $('<p>Click again to remove</p>').hide().fadeIn(1000).delay(1000).fadeOut(2000);
        $('ul').append(text).delay(2000);
    }
})